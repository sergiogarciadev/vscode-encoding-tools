export class Base64 {
  private static ALPHABET: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  public static encode(str: string) {
    let input: any = new TextEncoder().encode(str) as Object;
    let output = "";
    let triplet = 0;
    const length = input.length;
    let omitPadding = false;

    const at = function (shift: number) {
      return Base64.ALPHABET[(triplet >> (6 * shift)) & 63];
    };

    let i = 0;

    for (; i < length - 2; i += 3) {
      triplet = (input[i] << 16) + (input[i + 1] << 8) + input[i + 2];
      output += at(3) + at(2) + at(1) + at(0);
    }

    if (i + 2 === length) {
      triplet = (input[i] << 16) + (input[i + 1] << 8);
      output += at(3) + at(2) + at(1) + (omitPadding ? "" : "=");
    } else if (i + 1 === length) {
      triplet = input[i] << 16;
      output += at(3) + at(2) + (omitPadding ? "" : "==");
    }

    return output;
  }

  public static decode(input: string) {
    input = input.replace(/\s+/g, "");
    while (input.length % 4 !== 0) {
      input += "=";
    }

    const length = input.length;

    let outputBytes = [];

    for (let i = 0; i < length - 3; i += 4) {
      let triplet =
        (Base64.ALPHABET.indexOf(input[i + 0]) << 18) +
        (Base64.ALPHABET.indexOf(input[i + 1]) << 12) +
        (Base64.ALPHABET.indexOf(input[i + 2]) << 6) +
        Base64.ALPHABET.indexOf(input[i + 3]);

      outputBytes.push(
        ...[(triplet >> 16) & 255, (triplet >> 8) & 255, triplet & 255],
      );
    }

    if (input.endsWith("==")) {
      outputBytes.pop();
      outputBytes.pop();
    } else if (input.endsWith("=")) {
      outputBytes.pop();
    }

    return new TextDecoder().decode(new Uint8Array(outputBytes));
  }
}

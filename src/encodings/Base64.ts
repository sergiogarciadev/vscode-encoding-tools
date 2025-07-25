import { ReadableBitStream } from "./ReadableBitStream";
import { WritableBitStream } from "./WritableBitStream";

export class Base64 {
  private alphabet: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  public encode(str: string) {
    const reader = ReadableBitStream.fromString(str);

    let output = "";

    while (!reader.eof) {
      output += this.alphabet[reader.readBits(6)];
    }

    // add padding
    while (output.length % 4 !== 0) {
      output += this.alphabet[64];
    }

    return output;
  }

  public decode(input: string) {
    const writer = new WritableBitStream();

    for (let i = 0; i < input.length; i++) {
      if (input[i] === this.alphabet[64]) {
        break;
      }

      const value = this.alphabet.indexOf(input[i]);

      if (value === -1) {
        continue;
      }

      writer.writeBits(value, 6);
    }

    if (writer.stream[writer.stream.length - 1] === 0) {
      writer.stream.pop();
    }

    return writer.toString();
  }
}

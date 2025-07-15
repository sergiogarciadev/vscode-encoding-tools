import * as vscode from "vscode";

export class Hex {
  private static ALPHABET: string = "0123456789abcdef";

  public static encode(str: string) {
    let input: any = new TextEncoder().encode(str) as Object;
    let output = "";
    const length = input.length;

    for (let i = 0; i < length; i++) {
      output += Hex.ALPHABET[Math.trunc(input[i] / 16)];
      output += Hex.ALPHABET[input[i] % 16];
    }

    return output;
  }

  public static decode(input: string) {
    if (input.length % 2 != 0) {
      vscode.window.showWarningMessage("Input length is not even!");
      return input;
    }

    const length = input.length;

    let outputBytes = [];

    for (let i = 0; i < length - 1; i += 2) {
      let byte =
        Hex.ALPHABET.indexOf(input[i + 0]) * 16 +
        Hex.ALPHABET.indexOf(input[i + 1]);

      outputBytes.push(byte);
    }

    return new TextDecoder().decode(new Uint8Array(outputBytes));
  }
}

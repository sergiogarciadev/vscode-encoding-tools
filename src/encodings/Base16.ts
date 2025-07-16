import * as vscode from "vscode";
import { ReadableBitStream } from "./ReadableBitStream";
import { WritableBitStream } from "./WritableBitStream";

export class Base16 {
  private readonly alphabet: string = "0123456789abcdef";

  public encode(str: string) {
    const reader = ReadableBitStream.fromString(str);

    let output = "";

    while (!reader.eof) {
      output += this.alphabet[reader.readBits(4)];
    }

    return output;
  }

  public decode(input: string) {
    if (input.length % 2 !== 0) {
      vscode.window.showWarningMessage("Input length is not even!");
      return input;
    }

    const writer = new WritableBitStream();

    for (let i = 0; i < input.length; i++) {
      writer.writeBits(this.alphabet.indexOf(input[i]), 4);
    }

    return writer.toString();
  }
}

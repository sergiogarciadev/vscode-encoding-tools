import * as vscode from "vscode";

import { registerEncodeCommand } from "./commands/registerEncodeCommand";
import { Base64 } from "./encodings/Base64";
import { Hex } from "./encodings/Hex";

export function activate(context: vscode.ExtensionContext) {
  registerEncodeCommand(context, "vscode-encoding-tools.frombase64", (s) =>
    Base64.decode(s),
  );
  registerEncodeCommand(context, "vscode-encoding-tools.tobase64", (s) =>
    Base64.encode(s),
  );

  registerEncodeCommand(context, "vscode-encoding-tools.fromhex", (s) =>
    Hex.decode(s),
  );
  registerEncodeCommand(context, "vscode-encoding-tools.tohex", (s) =>
    Hex.encode(s),
  );
}

export function deactivate() {}

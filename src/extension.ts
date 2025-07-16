import * as vscode from "vscode";

import { registerEncodeCommand } from "./commands/registerEncodeCommand";
import { Base64 } from "./encodings/Base64";
import { Base16 } from "./encodings/Base16";
import { Base32 } from "./encodings/Base32";

export function activate(context: vscode.ExtensionContext) {
  registerEncodeCommand(context, "vscode-encoding-tools.frombase32", (s) =>
    new Base32().decode(s),
  );
  registerEncodeCommand(context, "vscode-encoding-tools.tobase32", (s) =>
    new Base32().encode(s),
  );

  registerEncodeCommand(context, "vscode-encoding-tools.frombase64", (s) =>
    new Base64().decode(s),
  );
  registerEncodeCommand(context, "vscode-encoding-tools.tobase64", (s) =>
    new Base64().encode(s),
  );

  registerEncodeCommand(context, "vscode-encoding-tools.fromhex", (s) =>
    new Base16().decode(s),
  );
  registerEncodeCommand(context, "vscode-encoding-tools.tohex", (s) =>
    new Base16().encode(s),
  );
}

export function deactivate() {}

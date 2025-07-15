import * as vscode from "vscode";

type EncodeFunction = (text: string) => string;

export function registerEncodeCommand(
  context: vscode.ExtensionContext,
  command: string,
  encodeFunction: EncodeFunction,
) {
  const disposable = vscode.commands.registerCommand(command, function () {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      const document = editor.document;
      const selection = editor.selection;

      // Get the word within the selection
      let selectedText = document.getText(selection);

      if (selectedText.length === 0) {
        vscode.window.showErrorMessage("No text selected!");
        return;
      }

      try {
        selectedText = encodeFunction(selectedText);
      } catch {
        vscode.window.showErrorMessage("Encoding error!");
        return;
      }

      editor.edit((editBuilder) => {
        editBuilder.replace(selection, selectedText);
      });
    }
  });

  context.subscriptions.push(disposable);
}

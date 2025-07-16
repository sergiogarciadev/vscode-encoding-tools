import * as vscode from "vscode";

type EncodeFunction = (text: string) => string;

class ReplaceEdit {
  public readonly selection: vscode.Selection;
  public readonly text: string;

  public constructor(selection: vscode.Selection, text: string) {
    this.selection = selection;
    this.text = text;
  }
}

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
      const selections = editor.selections;

      let replaces: ReplaceEdit[] = [];

      for (let selection of selections) {
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

        replaces.push(new ReplaceEdit(selection, selectedText));
      }

      editor.edit((editBuilder) => {
        for (let replace of replaces) {
          editBuilder.replace(replace.selection, replace.text);
        }
      });
    }
  });

  context.subscriptions.push(disposable);
}

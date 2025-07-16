# Encoding Tools for VSCode

This extensions provide common encoding tools in VS Code commands.

## Features

Encoding Tools support encoding to and from:

- Base16 (Hexadecimal)
- Base32
- Base64

## Keybinds

### On Windows/Linux

| Key Binding         | Command            |
|---------------------|--------------------|
| Ctrl+K Ctrl+X       | Encode to Hex      |
| Ctrl+K Ctrl+Shift+X | Encode from Hex    |
| Ctrl+K Ctrl+V       | Encode to Base32   |
| Ctrl+K Ctrl+Shift+V | Encode from Base32 |
| Ctrl+K Ctrl+B       | Encode to Base64   |
| Ctrl+K Ctrl+Shift+B | Encode from Base64 |

### On Mac

| Key Binding       | Command            |
|-------------------|--------------------|
| Cmd+K Cmd+X       | Encode to Hex      |
| Cmd+K Cmd+Shift+X | Encode from Hex    |
| Cmd+K Cmd+V       | Encode to Base32   |
| Cmd+K Cmd+Shift+V | Encode from Base32 |
| Cmd+K Cmd+B       | Encode to Base64   |
| Cmd+K Cmd+Shift+B | Encode from Base64 |


## Release Notes

### 0.1.0

* Added From/To Base32 Encoding
* Changed encoders to use a new method for simplicity

### 0.0.3

* Added support for multiple selections
* Added keybinds and context menu items

### 0.0.2

* Added icon and changed name to `Encoding Tools`

### 0.0.1

* Initial release of `vscode-encoding-tools`.

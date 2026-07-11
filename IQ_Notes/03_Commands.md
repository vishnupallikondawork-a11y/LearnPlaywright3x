# VS Code Commands — Complete Keyboard Shortcuts Reference

## What Are VS Code Commands?

VS Code commands are actions you can trigger via the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) or **keyboard shortcuts**. Every action — from opening files to formatting code to running the debugger — is backed by a command.

---

## Side-by-Side Comparison Table

| # | Action | Windows / Linux | Mac | Command Palette ID |
|---|--------|----------------|-----|-------------------|
| 1 | Open Command Palette | `Ctrl + Shift + P` | `Cmd + Shift + P` | `workbench.action.showCommands` |
| 2 | Quick Open (Go to File) | `Ctrl + P` | `Cmd + P` | `workbench.action.quickOpen` |
| 3 | New Window | `Ctrl + Shift + N` | `Cmd + Shift + N` | `workbench.action.newWindow` |
| 4 | Close Window | `Ctrl + Shift + W` | `Cmd + Shift + W` | `workbench.action.closeWindow` |
| 5 | Open Settings | `Ctrl + ,` | `Cmd + ,` | `workbench.action.openSettings` |
| 6 | Open Keyboard Shortcuts | `Ctrl + K, Ctrl + S` | `Cmd + K, Cmd + S` | `workbench.action.openGlobalKeybindings` |
| 7 | Toggle Terminal | `Ctrl + `` ` | `Cmd + `` ` | `workbench.action.terminal.toggleTerminal` |
| 8 | New Terminal | `Ctrl + Shift + `` ` | `Cmd + Shift + `` ` | `workbench.action.terminal.new` |
| 9 | Toggle Sidebar | `Ctrl + B` | `Cmd + B` | `workbench.action.toggleSidebarVisibility` |
| 10 | Open Explorer | `Ctrl + Shift + E` | `Cmd + Shift + E` | `workbench.view.explorer` |
| 11 | Open Search | `Ctrl + Shift + F` | `Cmd + Shift + F` | `workbench.view.search` |
| 12 | Open Source Control | `Ctrl + Shift + G` | `Cmd + Shift + G` | `workbench.view.scm` |
| 13 | Open Run/Debug | `Ctrl + Shift + D` | `Cmd + Shift + D` | `workbench.view.debug` |
| 14 | Open Extensions | `Ctrl + Shift + X` | `Cmd + Shift + X` | `workbench.view.extensions` |
| 15 | Find in File | `Ctrl + F` | `Cmd + F` | `actions.find` |
| 16 | Replace in File | `Ctrl + H` | `Cmd + Option + F` | `editor.action.startFindReplaceAction` |
| 17 | Find in Files (Project-wide) | `Ctrl + Shift + F` | `Cmd + Shift + F` | `workbench.action.findInFiles` |
| 18 | Replace in Files | `Ctrl + Shift + H` | `Cmd + Shift + H` | `workbench.action.replaceInFiles` |
| 19 | Go to Line | `Ctrl + G` | `Ctrl + G` | `workbench.action.gotoLine` |
| 20 | Go to Symbol in File | `Ctrl + Shift + O` | `Cmd + Shift + O` | `workbench.action.gotoSymbol` |
| 21 | Go to Symbol in Workspace | `Ctrl + T` | `Cmd + T` | `workbench.action.showAllSymbols` |
| 22 | Go to Definition | `F12` | `F12` | `editor.action.revealDefinition` |
| 23 | Peek Definition | `Alt + F12` | `Option + F12` | `editor.action.peekDefinition` |
| 24 | Go to References | `Shift + F12` | `Shift + F12` | `editor.action.goToReferences` |
| 25 | Rename Symbol | `F2` | `F2` | `editor.action.rename` |
| 26 | Format Document | `Shift + Alt + F` | `Shift + Option + F` | `editor.action.formatDocument` |
| 27 | Format Selection | `Ctrl + K, Ctrl + F` | `Cmd + K, Cmd + F` | `editor.action.formatSelection` |
| 28 | Comment Line (Toggle) | `Ctrl + /` | `Cmd + /` | `editor.action.commentLine` |
| 29 | Block Comment (Toggle) | `Shift + Alt + A` | `Shift + Option + A` | `editor.action.blockComment` |
| 30 | Select All | `Ctrl + A` | `Cmd + A` | `editor.action.selectAll` |
| 31 | Multi-Cursor (Add Above) | `Ctrl + Alt + Up` | `Cmd + Option + Up` | `editor.action.insertCursorAbove` |
| 32 | Multi-Cursor (Add Below) | `Ctrl + Alt + Down` | `Cmd + Option + Down` | `editor.action.insertCursorBelow` |
| 33 | Select All Occurrences | `Ctrl + Shift + L` | `Cmd + Shift + L` | `editor.action.selectHighlights` |
| 34 | Select Next Occurrence | `Ctrl + D` | `Cmd + D` | `editor.action.addSelectionToNextFindMatch` |
| 35 | Move Line Up | `Alt + Up` | `Option + Up` | `editor.action.moveLinesUpAction` |
| 36 | Move Line Down | `Alt + Down` | `Option + Down` | `editor.action.moveLinesDownAction` |
| 37 | Copy Line Up | `Shift + Alt + Up` | `Shift + Option + Up` | `editor.action.copyLinesUpAction` |
| 38 | Copy Line Down | `Shift + Alt + Down` | `Shift + Option + Down` | `editor.action.copyLinesDownAction` |
| 39 | Delete Line | `Ctrl + Shift + K` | `Cmd + Shift + K` | `editor.action.deleteLines` |
| 40 | Select Current Line | `Ctrl + L` | `Cmd + L` | `expandLineSelection` |
| 41 | Indent Line | `Ctrl + ]` | `Cmd + ]` | `editor.action.indentLines` |
| 42 | Outdent Line | `Ctrl + [` | `Cmd + [` | `editor.action.outdentLines` |
| 43 | Trim Trailing Whitespace | `Ctrl + K, Ctrl + X` | (same) | `editor.action.trimTrailingWhitespace` |
| 44 | Fold Block | `Ctrl + Shift + [` | `Cmd + Option + [` | `editor.fold` |
| 45 | Unfold Block | `Ctrl + Shift + ]` | `Cmd + Option + ]` | `editor.unfold` |
| 46 | Fold All | `Ctrl + K, Ctrl + 0` | `Cmd + K, Cmd + 0` | `editor.foldAll` |
| 47 | Unfold All | `Ctrl + K, Ctrl + J` | `Cmd + K, Cmd + J` | `editor.unfoldAll` |
| 48 | Split Editor | `Ctrl + \` | `Cmd + \` | `workbench.action.splitEditor` |
| 49 | Close Editor | `Ctrl + W` | `Cmd + W` | `workbench.action.closeActiveEditor` |
| 50 | Close All Editors | `Ctrl + K, Ctrl + W` | `Cmd + K, Cmd + W` | `workbench.action.closeAllEditors` |
| 51 | Reopen Closed Editor | `Ctrl + Shift + T` | `Cmd + Shift + T` | `workbench.action.reopenClosedEditor` |
| 52 | Switch Between Editors | `Ctrl + Tab` | `Ctrl + Tab` | `workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup` |
| 53 | Navigate Editor Groups | `Ctrl + 1/2/3` | `Cmd + 1/2/3` | `workbench.action.focusFirstEditorGroup` |
| 54 | Toggle Zen Mode | `Ctrl + K, Z` | `Cmd + K, Z` | `workbench.action.toggleZenMode` |
| 55 | Toggle Full Screen | `F11` | `Ctrl + Cmd + F` | `workbench.action.toggleFullScreen` |
| 56 | Zoom In | `Ctrl + =` | `Cmd + =` | `workbench.action.zoomIn` |
| 57 | Zoom Out | `Ctrl + -` | `Cmd + -` | `workbench.action.zoomOut` |
| 58 | Reset Zoom | `Ctrl + Numpad0` | (N/A) | `workbench.action.zoomReset` |
| 59 | Toggle Minimap | (no default) | (no default) | `editor.action.toggleMinimap` |
| 60 | Open Integrated Terminal | `Ctrl + `` ` | `Cmd + `` ` | `workbench.action.terminal.focus` |
| 61 | Clear Terminal | (no default) | `Cmd + K` | `workbench.action.terminal.clear` |
| 62 | Kill Terminal | (no default) | (no default) | `workbench.action.terminal.kill` |
| 63 | Start Debugging | `F5` | `F5` | `workbench.action.debug.start` |
| 64 | Stop Debugging | `Shift + F5` | `Shift + F5` | `workbench.action.debug.stop` |
| 65 | Step Over | `F10` | `F10` | `workbench.action.debug.stepOver` |
| 66 | Step Into | `F11` | `F11` | `workbench.action.debug.stepInto` |
| 67 | Step Out | `Shift + F11` | `Shift + F11` | `workbench.action.debug.stepOut` |
| 68 | Continue | `F5` | `F5` | `workbench.action.debug.continue` |
| 69 | Toggle Breakpoint | `F9` | `F9` | `editor.debug.action.toggleBreakpoint` |
| 70 | Show Problems | `Ctrl + Shift + M` | `Cmd + Shift + M` | `workbench.actions.view.problems` |
| 71 | Show Output | `Ctrl + Shift + U` | `Cmd + Shift + U` | `workbench.action.output.toggleOutput` |
| 72 | Show Debug Console | `Ctrl + Shift + Y` | `Cmd + Shift + Y` | `workbench.debug.action.toggleRepl` |
| 73 | Quick Fix | `Ctrl + .` | `Cmd + .` | `editor.action.quickFix` |
| 74 | Trigger Suggestion | `Ctrl + Space` | `Ctrl + Space` | `editor.action.triggerSuggest` |
| 75 | Trigger Parameter Hints | `Ctrl + Shift + Space` | `Cmd + Shift + Space` | `editor.action.triggerParameterHints` |
| 76 | Go to Bracket | `Ctrl + Shift + \` | `Cmd + Shift + \` | `editor.action.jumpToBracket` |
| 77 | Save File | `Ctrl + S` | `Cmd + S` | `workbench.action.files.save` |
| 78 | Save All | `Ctrl + K, S` | `Cmd + Option + S` | `workbench.action.files.saveAll` |
| 79 | Undo | `Ctrl + Z` | `Cmd + Z` | `undo` |
| 80 | Redo | `Ctrl + Y` | `Cmd + Shift + Z` | `redo` |
| 81 | Cut Line (empty selection) | `Ctrl + X` | `Cmd + X` | `editor.action.clipboardCutAction` |
| 82 | Open Previous File | `Ctrl + P, P` | `Cmd + P, P` | `workbench.action.quickOpenPreviousRecentlyUsedEditor` |
| 83 | Navigate Back | `Ctrl + Alt + -` | `Ctrl + -` | `workbench.action.navigateBack` |
| 84 | Navigate Forward | `Ctrl + Shift + -` | `Ctrl + Shift + -` | `workbench.action.navigateForward` |
| 85 | Duplicate Selection/Line | — | `Cmd + D` (multi-press) | — |

---

## Category Breakdown

| Category | Count | Key Shortcuts |
|----------|-------|--------------|
| General / Navigation | 10 | `Ctrl+P`, `Ctrl+Shift+P`, `Ctrl+B`, `Ctrl+G` |
| Editor / Editing | 18 | `Ctrl+D`, `Ctrl+/`, `F2`, `Alt+Up/Down` |
| Search & Replace | 4 | `Ctrl+F`, `Ctrl+H`, `Ctrl+Shift+F` |
| Debugging | 8 | `F5`, `F9`, `F10`, `F11`, `Shift+F11` |
| Terminal | 4 | `Ctrl+`` `, `Ctrl+Shift+`` ` |
| Window / UI | 7 | `Ctrl+\`, `Ctrl+W`, `Ctrl+Tab`, `F11` |
| Files / Save | 4 | `Ctrl+S`, `Ctrl+K S` |
| View Panels | 6 | `Ctrl+Shift+E/F/G/X/D/M` |
| Multi-Cursor | 4 | `Ctrl+Alt+Up/Down`, `Ctrl+Shift+L` |
| Code Folding | 4 | `Ctrl+Shift+[/]`, `Ctrl+K Ctrl+0/J` |

---

## Modifier Key Mapping

| Windows/Linux Key | Mac Equivalent |
|-------------------|----------------|
| `Ctrl` | `Cmd` (⌘) |
| `Alt` | `Option` (⌥) |
| `Shift` | `Shift` (⇧) |
| `Windows` | `Ctrl` (⌃) — rarely used |

---

## How to Discover All Commands

1. Open **Command Palette** → `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Type - `>Preferences: Open Keyboard Shortcuts` (or press `Ctrl+K Ctrl+S` / `Cmd+K Cmd+S`)
3. Every available command and its current keybinding is listed there
4. You can search, customize, or reset any shortcut

This is the authoritative source — VS Code ships ~1000+ commands out of the box, and extensions add more.

---

## One-Liner Summary

- **VS Code Commands** = Every action is backed by a command ID — trigger them via keyboard shortcuts or the Command Palette (`Ctrl+Shift+P`).
- **85+ essential shortcuts** listed above across navigation, editing, debugging, terminal, and window management.
- **Windows uses `Ctrl`** where **Mac uses `Cmd`** — most other modifiers map 1:1.

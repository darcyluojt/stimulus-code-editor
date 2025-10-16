import { keymap, lineNumbers, highlightActiveLineGutter,
highlightSpecialChars, drawSelection, dropCursor, rectangularSelection,
crosshairCursor, highlightActiveLine } from "@codemirror/view"
import { indentOnInput, syntaxHighlighting, defaultHighlightStyle,
bracketMatching, foldGutter, foldKeymap } from "@codemirror/language"
import { history, historyKeymap, defaultKeymap, indentWithTab } from "@codemirror/commands"
import { EditorState } from "@codemirror/state"
import { highlightSelectionMatches } from "@codemirror/search"
import { lintKeymap } from "@codemirror/lint"
import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete"

export const standardSetup = [
  // lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  // foldGutter(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, {
    fallback: true}),
  bracketMatching(),
  rectangularSelection(),
  crosshairCursor(),
  // highlightActiveLine(),
  highlightSelectionMatches(),

  keymap.of([
    ...defaultKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...closeBracketsKeymap,
    ...lintKeymap,
    // indentWithTab
  ])


]
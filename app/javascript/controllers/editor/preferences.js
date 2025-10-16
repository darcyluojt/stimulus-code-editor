import { keymap, lineNumbers, highlightActiveLine } from "@codemirror/view"
import { foldGutter } from "@codemirror/language"
import { indentWithTab } from "@codemirror/commands"

export const preferences = {
  set(options = {}) {
    const {
     enableLineNumbers = true,
     enableFoldGutter = true,
     enableHighlightActiveLine = true,
     enableIndentWithWeb = true
    } = options

    return [
      enableLineNumbers && lineNumbers(),
      enableFoldGutter && foldGutter(),
      enableHighlightActiveLine && highlightActiveLine(),
      enableIndentWithWeb ? keymap.of([indentWithTab]) : null,
    ].filter(Boolean)
  }
}

import { autocompletion, completionKeymap } from "@codemirror/autocomplete"
import { keymap } from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"

export const autocomplete = [
  autocompletion(),
  keymap.of(completionKeymap),
  javascript()
]
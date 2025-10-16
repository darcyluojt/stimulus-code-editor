import { autocompletion, completionKeymap } from "@codemirror/autocomplete"
import { keymap } from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"

const languages = {
  javascript: javascript(),
  html: html(),
  css: css()
}

export const autocomplete = {
  for(language) {
    console.log("languages", languages)
    console.log("language:", autocomplete)
    return [
      autocompletion(),
      keymap.of(completionKeymap),
      languages[language] || javascript()
    ]
  }
}
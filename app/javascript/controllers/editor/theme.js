import {
  githubLight,
  githubDark,
  vsCodeLight,
  vsCodeDark
} from "@fsegurai/codemirror-theme-bundle"
import { EditorView } from "codemirror"

const themes = {
  githubDark,
  githubLight,
  vsCodeDark,
  vsCodeLight
}

export const theme = {
  set(name, options = {}) {
    const {
      fontSize=14,
      lineHeight=1.5
    } = options
    console.log("themes", themes)
    console.log("theme:", theme)
    return [
      themes[name] || null,
      EditorView.theme({
       "&": {
        fontSize: `${fontSize}px`
       },
       ".cm-line": {
        lineHeight: lineHeight
       }
      })
    ]
  }
}

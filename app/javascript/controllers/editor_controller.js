import { Controller } from "@hotwired/stimulus"
import { standardSetup } from "./editor/setup"
import { autocomplete } from "./editor/autocomplete"
import { preferences } from "./editor/preferences"
import { theme } from "./editor/theme"
import { EditorView } from "@codemirror/view"
import { debounce } from "./helpers/debounce"

const statuses = {
  saved: "Saved",
  saving: "Saving...",
  failed: "Save failed"
}
// Connects to data-controller="editor"
export default class extends Controller {
  static values = {
    content: String,
    updateUrl: String
  }

  static targets = ["status"]

  initialize() {
    this.debounceUpdate = debounce(() => {
      this.#update()
    })
  }

  connect() {
    console.log("Editor connected")
    this.editor = new EditorView({
      doc: this.contentValue,
      parent: this.element,
      extensions: [
        standardSetup,
        autocomplete.for("html"),
        theme.set("githubDark", { fontSize: 12, lineHeight: 1.6 }),
        preferences.set({
          enableLineNumbers: true,
          enableFoldGutter: true,
          enableHighlightActiveLine: true,
          enableIndentWithWeb: true
        }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            this.statusTarget.textContent = statuses.saving
            this.debounceUpdate()
          }
        })
      ]
    })
  }

  disconnect() {
    this.editor.destroy()
  }

  //private

  async #update() {
    const response = await fetch(
      this.updateUrlValue,
      {
        method: "PUT",
        headers: {
          "X-CSRF-TOKEN":
          document.querySelector('[name="csrf-token"]').content,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          page: {
            content: this.editor.state.doc.toString()
          }
        })
      }
    )
    response.ok ?
      this.statusTarget.textContent = statuses.saved :  this.statusTarget.textContent = statuses.failed
  }
}

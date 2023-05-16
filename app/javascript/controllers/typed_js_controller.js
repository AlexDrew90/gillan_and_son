import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    this.disconnect() // Disconnect any previous instance

    this.typed = new Typed(this.element, {
      strings: ["to your kitchen"],
      startDelay: 200,
      typeSpeed: 100,
      loop: false,
      showCursor: false
    })
  }

  disconnect() {
    if (this.typed) {
      this.typed.destroy() // Destroy the previous instance if it exists
    }
  }
}

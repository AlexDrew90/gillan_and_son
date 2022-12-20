import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["to your kitchen"],
      startDelay: 200,
      typeSpeed: 100,
      loop: false,
      showCursor: false
    })
  }
}

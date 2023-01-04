import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log("Is this connected?");
  }
  carouselScroll() {
    if (window.scrollY >= (300)) {
      console.log("Scroll detected");
      this.element.classList.add("button-banner")
      this.element.classList.remove("button-div")
    } else {
      this.element.classList.add("button-div")
      this.element.classList.remove("button-banner")
    }
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log("HELLOOO!!!!");
  }
  updateNavbar() {
    // if (window.scrollY >= (100 + this.element.offsetHeight)) {
      const width = window.innerWidth;
    if ((width >= 769 && window.scrollY >= (520)) || (width <= 768 && window.scrollY >= (360))) {
      this.element.classList.add("button-banner");
      this.element.classList.remove("button-div");
    } else {
      this.element.classList.add("button-div");
      this.element.classList.remove("button-banner");
    }
  }
}

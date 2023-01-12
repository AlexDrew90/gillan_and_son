import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = [ "menu", "icon" ]


connect() {
    console.log("dropdown");
  }

  list() {
    if (this.menuTarget.classList.contains("hide-nav-list")) {
    this.menuTarget.classList.remove("hide-nav-list");
    this.iconTarget.classList.add("move-icon");
    }
    else{
      this.menuTarget.classList.add("hide-nav-list");
      this.iconTarget.classList.remove("move-icon");
      }
  }



}

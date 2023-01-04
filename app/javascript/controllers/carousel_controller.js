import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log("Is this connected?");
  }
  static targets = ["one", "two", "three"];

  one() {
    this.oneTarget.classList.add("hide-carousel")
  }

}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log("Is this connected?");
  }

  left() {
    console.log("left");
  }

  right() {
    console.log("right");
  }

}

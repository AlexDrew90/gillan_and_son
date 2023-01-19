import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = [ "hourglass-top", "hourglass-bottom" ]

  connect() {
    console.log("icons");
  }
  iconAnimateHourglassTop() {
    let topPart = document.getElementById("top-hourglass");
    if (window.scrollY >= (250)) {
      topPart.classList.add("top-hourglass-empty");
    } else{
      topPart.classList.remove("top-hourglass-empty");
    }
  }

  iconAnimateHourglassBottom() {
    let bottomPart = document.getElementById("bottom-hourglass");
    if (window.scrollY >= (250)) {
      bottomPart.classList.add("bottom-hourglass-fill");
    }else{
      bottomPart.classList.remove("bottom-hourglass-fill");
    }
  }
}

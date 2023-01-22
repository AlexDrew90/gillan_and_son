import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = [ "hourglass-top", "hourglass-bottom", "main-stamp", "award-number" ]

  connect() {
    console.log("icons");
  }
  iconAnimateHourglassTop() {
    let topPart = document.getElementById("top-hourglass");
    let rect =topPart.getBoundingClientRect();
    if (rect.top <= (450)) {
      topPart.classList.add("top-hourglass-empty");
    } else{
      topPart.classList.remove("top-hourglass-empty");
    }
  }

  iconAnimateHourglassBottom() {
    let bottomPart = document.getElementById("bottom-hourglass");
    let topPart = document.getElementById("top-hourglass");
    let rect =topPart.getBoundingClientRect();
    if (rect.top <= (450)) {
      bottomPart.classList.add("bottom-hourglass-fill");
    }else{
      bottomPart.classList.remove("bottom-hourglass-fill");
    }
  }

  iconAnimateStampMain() {

    let mainPart = document.getElementById("main-stamp");
    let rect =mainPart.getBoundingClientRect();
    if (rect.top <= (450)) {
      mainPart.classList.remove("stamp-up");
      mainPart.classList.add("stamp-down");
    } else{
      mainPart.classList.remove("stamp-down");
      mainPart.classList.add("stamp-up");
    }
    if (rect.top < (350)) {
      mainPart.classList.add("stamp-up");
      mainPart.classList.remove("stamp-down");
    }

  }

  iconAnimateRosette() {
    let rosettePart  = document.getElementById("rosette");
    let mainPart = document.getElementById("award-main");
    let rect =mainPart.getBoundingClientRect();
    if (rect.top <= (450)) {
        rosettePart.classList.add("rotate-award-clockwise");
        rosettePart.classList.remove("rotate-award-anticlockwise");
    } else{
      rosettePart.classList.add("rotate-award-anticlockwise");
      rosettePart.classList.remove("rotate-award-clockwise");
    }
  }
}

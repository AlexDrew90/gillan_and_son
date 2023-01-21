import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = [ "hourglass-top", "hourglass-bottom", "main-stamp", "stamp-ink" ]

  connect() {
    console.log("icons");
  }
  iconAnimateHourglassTop() {
    let topPart = document.getElementById("top-hourglass");
    let rect =topPart.getBoundingClientRect();
    if (rect.top <= (500)) {
      topPart.classList.add("top-hourglass-empty");
    } else{
      topPart.classList.remove("top-hourglass-empty");
    }
  }

  iconAnimateHourglassBottom() {
    let bottomPart = document.getElementById("bottom-hourglass");
    let topPart = document.getElementById("top-hourglass");
    let rect =topPart.getBoundingClientRect();
    if (rect.top <= (500)) {
      bottomPart.classList.add("bottom-hourglass-fill");
    }else{
      bottomPart.classList.remove("bottom-hourglass-fill");
    }
  }

  iconAnimateStampMain() {

    let mainPart = document.getElementById("main-stamp");
    let rect =mainPart.getBoundingClientRect();
    console.log(rect.top);
    if (rect.top <= (500)) {
      mainPart.classList.remove("stamp-up");
      mainPart.classList.add("stamp-down");
    } else{
      mainPart.classList.remove("stamp-down");
      mainPart.classList.add("stamp-up");
    }
    if (rect.top < (450)) {
      mainPart.classList.add("stamp-up");
      mainPart.classList.remove("stamp-down");
    }

  }

  iconAnimateStampInk() {
    let inkPart  = document.getElementById("ink");
    let mainPart = document.getElementById("main-stamp");
    let rect =mainPart.getBoundingClientRect();
    if (rect.top <= (500)) {
        // inkPart.classList.remove("ink-hidden");
    } else{
      inkPart.classList.add("ink-hidden");
    }
  }
}

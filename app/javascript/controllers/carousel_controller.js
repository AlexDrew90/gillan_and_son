import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

static targets = [ "slideone", "slidetwo", "slidethree", "indicatorone", "indicatortwo", "indicatorthree" ]

connect() {
    console.log("Is this connected?");
  }

  left() {
    console.log("left");
  }

  right() {
    console.log("right");
  }

  indicatorOne() {
    console.log("one");
    this.slideoneTarget.classList.remove("hide-carousel");
    this.slidetwoTarget.classList.add("hide-carousel");
    this.slidethreeTarget.classList.add("hide-carousel");
    this.indicatoroneTarget.classList.add("active-indicator");
    this.indicatortwoTarget.classList.remove("active-indicator");
    this.indicatorthreeTarget.classList.remove("active-indicator");

  }

  indicatorTwo() {
    console.log("two");
    this.slidetwoTarget.classList.remove("hide-carousel");
    this.slideoneTarget.classList.add("hide-carousel");
    this.slidethreeTarget.classList.add("hide-carousel");
    this.indicatortwoTarget.classList.add("active-indicator");
    this.indicatoroneTarget.classList.remove("active-indicator");
    this.indicatorthreeTarget.classList.remove("active-indicator");
  }

  indicatorThree() {
    console.log("three");
    this.slidethreeTarget.classList.remove("hide-carousel");
    this.slideoneTarget.classList.add("hide-carousel");
    this.slidetwoTarget.classList.add("hide-carousel");
    this.indicatorthreeTarget.classList.add("active-indicator");
    this.indicatoroneTarget.classList.remove("active-indicator");
    this.indicatortwoTarget.classList.remove("active-indicator");
  }

}

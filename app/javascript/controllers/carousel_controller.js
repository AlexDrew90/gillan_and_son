import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

static targets = [ "slideone", "slidetwo", "slidethree", "indicatorone", "indicatortwo", "indicatorthree" ]

connect() {

  }

  left() {
    let activeSlide = this.element.querySelector(".active-slide");
    let activeIndicator = this.element.querySelector(".active-indicator");
    const carouselTrack = activeSlide.parentElement;
    const slideArray = Array.from(carouselTrack.children);
    const indicatorTrack = this.element.querySelector(".carousel-nav");
    const indicatorArray = Array.from(indicatorTrack.children);
    const length = slideArray.length;
    let currentSlideIndex = slideArray.indexOf(activeSlide);
    let currentIndicatorIndex = indicatorArray.indexOf(activeIndicator);
    activeSlide.classList.remove("active-slide");
    activeSlide.classList.add("hide-carousel");
    activeIndicator.classList.remove("active-indicator");
    let slideToLeft = slideArray[(currentSlideIndex+length-1)%length];
    let indicatorToLeft = indicatorArray[(currentIndicatorIndex+length-1)%length];
    slideToLeft.classList.add("active-slide");
    slideToLeft.classList.remove("hide-carousel");
    indicatorToLeft.classList.add("active-indicator");
  }

  right() {
    let activeSlide = this.element.querySelector(".active-slide");
    let activeIndicator = this.element.querySelector(".active-indicator");
    const carouselTrack = activeSlide.parentElement;
    const slideArray = Array.from(carouselTrack.children);
    const indicatorTrack = this.element.querySelector(".carousel-nav");
    const indicatorArray = Array.from(indicatorTrack.children);
    const length = slideArray.length;
    let currentSlideIndex = slideArray.indexOf(activeSlide);
    let currentIndicatorIndex = indicatorArray.indexOf(activeIndicator);
    activeSlide.classList.remove("active-slide");
    activeSlide.classList.add("hide-carousel");
    activeIndicator.classList.remove("active-indicator");
    let slideToRight = slideArray[(currentSlideIndex+1)%length];
    let indicatorToRight = indicatorArray[(currentIndicatorIndex+1)%length];
    slideToRight.classList.add("active-slide");
    slideToRight.classList.remove("hide-carousel");
    indicatorToRight.classList.add("active-indicator");
  }

  indicatorOne() {
    this.slideoneTarget.classList.remove("hide-carousel");
    this.slideoneTarget.classList.add("active-slide");
    this.slidetwoTarget.classList.add("hide-carousel");
    this.slidetwoTarget.classList.remove("active-slide");
    this.slidethreeTarget.classList.add("hide-carousel");
    this.slidethreeTarget.classList.remove("active-slide");
    this.indicatoroneTarget.classList.add("active-indicator");
    this.indicatortwoTarget.classList.remove("active-indicator");
    this.indicatorthreeTarget.classList.remove("active-indicator");

  }

  indicatorTwo() {
    this.slidetwoTarget.classList.remove("hide-carousel");
    this.slidetwoTarget.classList.add("active-slide");
    this.slideoneTarget.classList.add("hide-carousel");
    this.slideoneTarget.classList.remove("active-slide");
    this.slidethreeTarget.classList.add("hide-carousel");
    this.slidethreeTarget.classList.remove("active-slide");
    this.indicatortwoTarget.classList.add("active-indicator");
    this.indicatoroneTarget.classList.remove("active-indicator");
    this.indicatorthreeTarget.classList.remove("active-indicator");
  }

  indicatorThree() {
    this.slidethreeTarget.classList.remove("hide-carousel");
    this.slidethreeTarget.classList.add("active-slide");
    this.slideoneTarget.classList.add("hide-carousel");
    this.slideoneTarget.classList.remove("active-slide");
    this.slidetwoTarget.classList.add("hide-carousel");
    this.slidetwoTarget.classList.remove("active-slide");
    this.indicatorthreeTarget.classList.add("active-indicator");
    this.indicatoroneTarget.classList.remove("active-indicator");
    this.indicatortwoTarget.classList.remove("active-indicator");
  }

}

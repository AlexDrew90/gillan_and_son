import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cms-toggle"
export default class extends Controller {

  static targets = [ "gallery", "testimonials", "brands", "materials", "staff", "requirements" ]

  connect() {
  }


  gallery() {
    let thisHeader = this.element.querySelector(".cms-header-gallery-items");
    let selectedHeader = this.element.querySelector(".selected-cms-header");
    let thisSection = this.element.querySelector(".gallery-cms");
    let selectedSection = this.element.querySelector(".active-materials-section");

    selectedHeader.classList.remove("selected-cms-header");
    thisHeader.classList.add("selected-cms-header");
    selectedSection.classList.add("hidden-cms");
    selectedSection.classList.remove("active-materials-section");
    thisSection.classList.remove("hidden-cms");
    thisSection.classList.add("active-materials-section");
  }

  testimonials() {
    console.log("hi");
    let thisHeader = this.element.querySelector(".cms-header-testimonials");
    let selectedHeader = this.element.querySelector(".selected-cms-header");
    let thisSection = this.element.querySelector(".review-cms");
    let selectedSection = this.element.querySelector(".active-materials-section");

    selectedHeader.classList.remove("selected-cms-header");
    thisHeader.classList.add("selected-cms-header");
    selectedSection.classList.add("hidden-cms");
    selectedSection.classList.remove("active-materials-section");
    thisSection.classList.remove("hidden-cms");
    thisSection.classList.add("active-materials-section");
  }

  brands() {
    let thisHeader = this.element.querySelector(".cms-header-brands");
    let selectedHeader = this.element.querySelector(".selected-cms-header");
    let thisSection = this.element.querySelector(".brands-cms");
    let selectedSection = this.element.querySelector(".active-materials-section");

    selectedHeader.classList.remove("selected-cms-header");
    thisHeader.classList.add("selected-cms-header");
    selectedSection.classList.add("hidden-cms");
    selectedSection.classList.remove("active-materials-section");
    thisSection.classList.remove("hidden-cms");
    thisSection.classList.add("active-materials-section");
  }

  materials() {
    let thisHeader = this.element.querySelector(".cms-header-materials");
    let selectedHeader = this.element.querySelector(".selected-cms-header");
    let thisSection = this.element.querySelector(".materials-cms");
    let selectedSection = this.element.querySelector(".active-materials-section");

    selectedHeader.classList.remove("selected-cms-header");
    thisHeader.classList.add("selected-cms-header");
    selectedSection.classList.add("hidden-cms");
    selectedSection.classList.remove("active-materials-section");
    thisSection.classList.remove("hidden-cms");
    thisSection.classList.add("active-materials-section");
  }

  staff() {
    let thisHeader = this.element.querySelector(".cms-header-staff");
    let selectedHeader = this.element.querySelector(".selected-cms-header");
    let thisSection = this.element.querySelector(".staff-cms");
    let selectedSection = this.element.querySelector(".active-materials-section");

    selectedHeader.classList.remove("selected-cms-header");
    thisHeader.classList.add("selected-cms-header");
    selectedSection.classList.add("hidden-cms");
    selectedSection.classList.remove("active-materials-section");
    thisSection.classList.remove("hidden-cms");
    thisSection.classList.add("active-materials-section");
  }

  requirements() {
    let thisHeader = this.element.querySelector(".cms-header-requirements");
    let selectedHeader = this.element.querySelector(".selected-cms-header");
    let thisSection = this.element.querySelector(".requirements-cms");
    let selectedSection = this.element.querySelector(".active-materials-section");

    selectedHeader.classList.remove("selected-cms-header");
    thisHeader.classList.add("selected-cms-header");
    selectedSection.classList.add("hidden-cms");
    selectedSection.classList.remove("active-materials-section");
    thisSection.classList.remove("hidden-cms");
    thisSection.classList.add("active-materials-section");
  }

}

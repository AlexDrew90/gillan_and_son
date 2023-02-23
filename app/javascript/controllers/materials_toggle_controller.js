import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="materials-toggle"
export default class extends Controller {

  static targets = [ "granite", "quartz", "ceramic" ]

  connect() {
    console.log("Is materials toggle connected?");
  }

  granite() {
    console.log("Granite");
    let graniteSection = this.element.querySelector(".active-materials-section");
    let quartzSection = this.element.querySelector(".materials-quartz-section");
    let ceramicSection = this.element.querySelector(".materials-ceramic-section");
    let selectedHeader = this.element.querySelector(".selected-material");
    let graniteHeader = this.element.querySelector(".granite-header");
    let pointer = this.element.querySelector(".materials-tab-pointer");
    selectedHeader.classList.remove("selected-material");
    graniteHeader.classList.add("selected-material");
    graniteSection.classList.remove("inactive-materials-section");
    quartzSection.classList.add("inactive-materials-section");
    ceramicSection.classList.add("inactive-materials-section");
    pointer.classList.remove("pointer-granite");
    pointer.classList.remove("pointer-quartz");
    pointer.classList.remove("pointer-ceramic");
    pointer.classList.add("pointer-granite");
  }

  quartz() {
    console.log("Quartz");
    let graniteSection = this.element.querySelector(".active-materials-section");
    let quartzSection = this.element.querySelector(".materials-quartz-section");
    let ceramicSection = this.element.querySelector(".materials-ceramic-section");
    let selectedHeader = this.element.querySelector(".selected-material");
    let quartzHeader = this.element.querySelector(".quartz-header");
    let pointer = this.element.querySelector(".materials-tab-pointer");
    selectedHeader.classList.remove("selected-material");
    quartzHeader.classList.add("selected-material");
    quartzSection.classList.remove("inactive-materials-section");
    graniteSection.classList.add("inactive-materials-section");
    ceramicSection.classList.add("inactive-materials-section");
    pointer.classList.remove("pointer-granite");
    pointer.classList.remove("pointer-quartz");
    pointer.classList.remove("pointer-ceramic");
    pointer.classList.add("pointer-quartz");
  }

  ceramic() {
    console.log("Ceramic");
    let graniteSection = this.element.querySelector(".active-materials-section");
    let quartzSection = this.element.querySelector(".materials-quartz-section");
    let ceramicSection = this.element.querySelector(".materials-ceramic-section");
    let selectedHeader = this.element.querySelector(".selected-material");
    let ceramicHeader = this.element.querySelector(".ceramic-header");
    let pointer = this.element.querySelector(".materials-tab-pointer");
    selectedHeader.classList.remove("selected-material");
    ceramicHeader.classList.add("selected-material");
    ceramicSection.classList.remove("inactive-materials-section");
    graniteSection.classList.add("inactive-materials-section");
    quartzSection.classList.add("inactive-materials-section");
    pointer.classList.remove("pointer-granite");
    pointer.classList.remove("pointer-quartz");
    pointer.classList.remove("pointer-ceramic");
    pointer.classList.add("pointer-ceramic");
  }

}

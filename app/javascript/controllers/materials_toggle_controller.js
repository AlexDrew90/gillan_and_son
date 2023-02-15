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
    graniteSection.classList.remove("active-slide");
  }

  quartz() {
    console.log("Quartz");
  }

  ceramic() {
    console.log("Ceramic");
  }

}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="materials-toggle"
export default class extends Controller {

  static targets = [ "granite", "quartz", "ceramic" ]

  connect() {
    console.log("Is materials toggle connected?");
  }

}

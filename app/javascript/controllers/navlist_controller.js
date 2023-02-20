import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {




connect() {

  }

  list() {

    let navLinks = this.element.querySelector(".navbar-links");
    if (navLinks.classList.contains("hide-nav-list")){
      navLinks.classList.remove("hide-nav-list");
    }
    else{
      navLinks.classList.add("hide-nav-list");
    }
  }



}

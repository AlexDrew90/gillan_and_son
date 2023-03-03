import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="gallery"
export default class extends Controller {
  connect() {
  }

  expand() {
    console.log("Expand");
    let imgModal = () => {
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      //add the modal to the main section or the parent element
      document.querySelector(".expand-wrap").append(modal);
  };
  imgModal();
  }

}

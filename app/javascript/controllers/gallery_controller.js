import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="gallery"
export default class extends Controller {
  connect() {
  }

  expand() {
    let imageSource = this.element.childNodes[1].src;
    let imgModal = (imageSource) => {
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      //add the modal to the main section or the parent element
      document.querySelector(".expand-wrap").append(modal);
      //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", imageSource);
    modal.append(newImage)
  };
  imgModal(imageSource);
  }

}

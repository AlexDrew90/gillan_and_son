import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="gallery"
export default class extends Controller {
  connect() {
  }

  expand() {
    let imageTiles = document.getElementsByClassName("gallery-tile");
    console.log(imageTiles);
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
    //adding the navigation and close buttons to modal
    const leftArrow = document.createElement("i");
    leftArrow.setAttribute("class", "fas fa-angle-left prevBtn");
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    const rightArrow = document.createElement("i");
    rightArrow.setAttribute("class", "fas fa-angle-right nextBtn");


    //close function
    closeBtn.onclick = () => {
    modal.remove();};

  modal.append(leftArrow, newImage, rightArrow, closeBtn);
  };

  imgModal(imageSource);
  }

}

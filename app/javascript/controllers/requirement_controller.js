import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="requirement"
export default class extends Controller {
  connect() {
  }


expand() {
  console.log(this.element);
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
  //adding the close button to modal
  closeBtn.setAttribute("class", "fas fa-times closeBtn");


  //close function
  closeBtn.onclick = () => {
  modal.remove();};

modal.append(newImage, closeBtn);
};

imgModal(imageSource);
}
}

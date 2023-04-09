import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="requirement"
export default class extends Controller {
  connect() {
    let slideshowElements = document.getElementsByClassName("requirement-demo-slideshow");
    console.log(slideshowElements);
    let currentSlide = 0
    let arrayLength = slideshowElements.length;
    slideshowElements[currentSlide].classList.remove("hide-slide-image");
    function changeSlide() {
      slideshowElements[currentSlide].classList.add("hide-slide-image");
      currentSlide = (currentSlide + 1) % arrayLength;
      slideshowElements[currentSlide].classList.remove("hide-slide-image");
  }
  setInterval(changeSlide, 3000);

  }

expand() {
  window.onclick = e => {
   let imageSource =  e.target.id
   console.log(imageSource);
   return imageSource
};
// console.log(imageSource);
//   let imgModal = (imageSource) => {
//     const modal = document.createElement("div");
//     modal.setAttribute("class", "modal");
//     //add the modal to the main section or the parent element
//     document.querySelector(".quote-build-wrapper").append(modal);
//     //adding image to modal
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", imageSource);
//   modal.append(newImage)
//   //adding the close button to modal
//   closeBtn.setAttribute("class", "fas fa-times closeBtn");


//   //close function
//   closeBtn.onclick = () => {
//   modal.remove();};

// modal.append(newImage, closeBtn);
// };

// imgModal(imageSource);
}
}

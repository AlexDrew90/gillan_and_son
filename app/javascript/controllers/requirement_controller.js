import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="requirement"
export default class extends Controller {
  connect() {
    let slideshowElements = document.getElementsByClassName("requirement-demo-slideshow");
    let currentSlideCounter = 0;
    slideshowElements[currentSlideCounter].classList.remove("hide-slide-image");
    let arrayLength = slideshowElements.length;

    function changeSlide() {
      slideshowElements[currentSlideCounter].classList.add("hide-slide-image");
      currentSlideCounter = (currentSlideCounter + 1) % arrayLength;
      console.log(currentSlideCounter);
      slideshowElements[currentSlideCounter].classList.remove("hide-slide-image");
    }

    this.slideChangeInterval = setInterval(changeSlide, 4000);
  }

  disconnect() {
    clearInterval(this.slideChangeInterval);
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

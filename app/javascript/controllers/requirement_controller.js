import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="requirement"
export default class extends Controller {
  connect() {
    let slideshowElements = document.getElementsByClassName("requirement-demo-slideshow");
    slideshowElements[0].classList.add("hide-slide-image");
    slideshowElements[1].classList.add("hide-slide-image");
    slideshowElements[2].classList.add("hide-slide-image");
    slideshowElements[3].classList.add("hide-slide-image");
    slideshowElements[4].classList.add("hide-slide-image");
    slideshowElements[5].classList.add("hide-slide-image");
    slideshowElements[6].classList.add("hide-slide-image");
    slideshowElements[7].classList.add("hide-slide-image");
    slideshowElements[8].classList.add("hide-slide-image");
    slideshowElements[9].classList.add("hide-slide-image");
    slideshowElements[10].classList.add("hide-slide-image");
    console.log(slideshowElements[0]);
    console.log(slideshowElements[1]);
    console.log(slideshowElements[2]);
    console.log(slideshowElements[3]);
    console.log(slideshowElements[4]);
    console.log(slideshowElements[5]);
    console.log(slideshowElements[6]);
    console.log(slideshowElements[7]);
    console.log(slideshowElements[8]);
    console.log(slideshowElements[9]);
    console.log(slideshowElements[10]);
    let currentSlideCounter = 0;
    // slideshowElements[0].classList.add("active");
    slideshowElements[currentSlideCounter].classList.remove("hide-slide-image");
    let arrayLength = slideshowElements.length;
    // currentSlide.classList.remove("hide-slide-image");
    // currentSlide.classList.add("active");
    function changeSlide() {
      // slideshowElements[currentSlide].classList.add("active");
      slideshowElements[currentSlideCounter].classList.add("hide-slide-image");
      currentSlideCounter = (currentSlideCounter + 1) % arrayLength;
      console.log(currentSlideCounter);
      slideshowElements[currentSlideCounter].classList.remove("hide-slide-image");
      // slideshowElements[currentSlide].classList.add("active");
  }


  setInterval(changeSlide, 4000);

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

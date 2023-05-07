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
      //adding the navigation and close buttons to modal
      const leftArrow = document.createElement("i");
      leftArrow.setAttribute("class", "fas fa-angle-left prevBtn");
      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("class", "fas fa-times closeBtn");
      const rightArrow = document.createElement("i");
      rightArrow.setAttribute("class", "fas fa-angle-right nextBtn");
      rightArrow.setAttribute("data-action", "click->gallery#rightImageButton");
      let imageTiles = document.getElementsByClassName("gallery-tile");
      console.log(imageTiles);
      let imageSrcArray = [];
      console.log(imageSource);

    for (const element of imageTiles) {
      imageSrcArray.push(element.src);
    }


    leftArrow.onclick = () => {
      let indexOfCurrentImage = imageSrcArray.indexOf(imageSource);
      let galleryLength = imageSrcArray.length
      let prevSource = imageSrcArray[(indexOfCurrentImage-1)];
      if(indexOfCurrentImage == 0) {
        prevSource = imageSrcArray[galleryLength-1]
      }
      newImage.setAttribute("src", prevSource);
      imageSource = prevSource;
      };

    rightArrow.onclick = () => {
      let indexOfCurrentImage = imageSrcArray.indexOf(imageSource);
      let galleryLength = imageSrcArray.length
      let nextSource = imageSrcArray[(indexOfCurrentImage+1)]
        if(indexOfCurrentImage == (galleryLength-1)) {
          nextSource = imageSrcArray[0]
        }
      newImage.setAttribute("src", nextSource)
      imageSource = nextSource
      };


    //close function
    closeBtn.onclick = () => {
    modal.remove();};

  modal.append(leftArrow, newImage, rightArrow, closeBtn);
  };

  imgModal(imageSource);
  }

}

import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="requirement"
window.selectedRequirmentArray = [];
export default class extends Controller {
  connect() {
    // Slideshow functionality
    let slideshowElements = document.getElementsByClassName("requirement-demo-slideshow");
    let currentSlideCounter = 0;
    slideshowElements[currentSlideCounter].classList.remove("hide-slide-image");
    let arrayLength = slideshowElements.length;
    function changeSlide() {
      if(slideshowElements.length > 0){
      slideshowElements[currentSlideCounter].classList.add("hide-slide-image");
      currentSlideCounter = (currentSlideCounter + 1) % arrayLength;
      slideshowElements[currentSlideCounter].classList.remove("hide-slide-image");
    }
  }
    this.slideChangeInterval = setInterval(changeSlide, 4000);

   // Attach event listener for expand method to elements with class "question-image"
   let questionImages = this.element.querySelectorAll(".question-image");
   questionImages.forEach((image) => {
     image.addEventListener("click", this.expand.bind(this));
   });

   // Attach event listener for toggleRequirement method to elements with class "requirement-item"
   let requirementItems = this.element.querySelectorAll(".requirement");
   requirementItems.forEach((item) => {
     item.addEventListener("click", this.toggleRequirement.bind(this));
   });
  }


  disconnect() {
    clearInterval(this.slideChangeInterval);
    this.element.removeEventListener("click", this.expand.bind(this));

  }


  expand(e) {
    if (e.target.classList.contains("question-image")) {
      console.log("Hello");
      let imageSource = `/assets/requirements/${e.target.dataset.photoUrl}`;
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("class", "fas fa-times closeBtn");

      let imgModal = (imageSource, modal, closeBtn) => {
        //add the modal to the main section or the parent element
        document.querySelector(".requirements-intro-section").append(modal);
        //adding image to modal
        const newImage = document.createElement("img");
        newImage.setAttribute("src", imageSource);
        modal.append(newImage);
        //adding the close button to modal
        modal.append(newImage, closeBtn);

        //close function
        closeBtn.onclick = () => {
          modal.remove();
        };
      };

      imgModal(imageSource, modal, closeBtn);
    }
  }


  toggleRequirement(e) {

    // Check if the click event was triggered by the "requirement-question" element or any of its children
    if (e.target.closest(".requirement-question") || e.target.closest(".requirement-question *")) {
      return;
    }

    // Find the "quote-build-right" element
    const quoteBuildRight = document.querySelector(".quote-build-right");

    // Hide the current content and clear the container
    quoteBuildRight.innerHTML = '';

    // Get the selected requirement's content
    let selectedRequirementContent = e.target.closest(".requirement").querySelector(".requirement-name p").textContent;
    window.selectedRequirmentArray.push(selectedRequirementContent);
    console.log(window.selectedRequirmentArray);

    // Create a new div to display the selected requirement's content
    const selectedRequirementDiv = document.createElement("div");
    selectedRequirementDiv.setAttribute("class", "selected-requirement");
    selectedRequirementDiv.textContent = selectedRequirementContent;

    // Append the selected requirement's content to the "quote-build-right" container
    quoteBuildRight.appendChild(selectedRequirementDiv);


  }


}

import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="requirement"
export default class extends Controller {
  selectedRequirmentArray = [];
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

    // Attach event listener for expand method
    this.element.addEventListener("click", this.expand.bind(this));
    this.element.addEventListener("click", this.toggleRequirement.bind(this));
  }


  disconnect() {
    clearInterval(this.slideChangeInterval);
    this.element.removeEventListener("click", this.expand.bind(this));
     this.element.removeEventListener("click", this.toggleRequirement.bind(this));
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
    // const selectedRequirementContent = e.currentTarget.querySelector(".requirement-name p").textContent;
    let selectedRequirementContent = e.currentTarget
    this.selectedRequirmentArray.push(`${selectedRequirementContent}`)
    console.log(this.selectedRequirmentArray);

    // Create a new div to display the selected requirement's content
    const selectedRequirementDiv = document.createElement("div");
    selectedRequirementDiv.setAttribute("class", "selected-requirement");
    selectedRequirementDiv.textContent = selectedRequirementContent;

    // Append the selected requirement's content to the "quote-build-right" container
    quoteBuildRight.appendChild(selectedRequirementDiv);


  }


}

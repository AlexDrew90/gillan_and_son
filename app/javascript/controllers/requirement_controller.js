import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="requirement"
window.selectedRequirmentArray = [];
window.multipleRequirmentArray = [];
const quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("max", "10");
    quantityInput.setAttribute("step", "1");
    quantityInput.setAttribute("class", "user-input-requirements quantity-input");

    const sizeInputOne = document.createElement("input");
    sizeInputOne.setAttribute("type", "text");
    sizeInputOne.setAttribute("placeholder", "width");
    sizeInputOne.setAttribute("class", "user-input-requirements");

    const sizeInputTwo = document.createElement("input");
    sizeInputTwo.setAttribute("type", "text");
    sizeInputTwo.setAttribute("placeholder", "height");
    sizeInputTwo.setAttribute("class", "user-input-requirements");

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
    window.selectedRequirmentArray = [];
    window.multipleRequirmentArray = [];
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

  removeSelectedRequirement(e, selectedRequirementContent) {
    if (e.target.classList.contains("reqCloseBtn")) {
      const selectedRequirementDiv = e.target.closest(".selected-requirement");
      const selectedRequirementName = selectedRequirementDiv.querySelector(".selected-requirement-name").textContent;

      // Remove the selected requirement div
      selectedRequirementDiv.remove();

      // Remove the corresponding requirement from the arrays
      window.selectedRequirmentArray = window.selectedRequirmentArray.filter((element) => {
        return element.dataset.name !== selectedRequirementName;
      });

      window.multipleRequirmentArray = window.multipleRequirmentArray.filter((name) => {
        return name !== selectedRequirementName;
      });

      // If the removed requirement is in selectedRequirementContent, remove it
      if (selectedRequirementContent && selectedRequirementContent.dataset.name === selectedRequirementName) {
        selectedRequirementContent.remove();
      }

    }
  }


  toggleRequirement(e) {
    // Check if the click event was triggered by the "requirement-question" element or any of its children
    if (e.target.closest(".requirement-question") || e.target.closest(".requirement-question *")) {
      return;
    }

    // Find the "quote-build-right" element
    const quoteBuildRight = document.querySelector(".quote-build-right");

    // Get the selected requirement's content
    let selectedRequirementContent = e.target.closest(".requirement");

    if (
      selectedRequirementContent.dataset.input === "Quantity" &&
      window.selectedRequirmentArray.includes(selectedRequirementContent)
    ) {
      console.log("Quantity already there");
      alert("You have already added this requirement. If you require more than one, please let us know by updating the quantity field.");
    } else {
      // Hide the current content and clear the container
      quoteBuildRight.innerHTML = "";

      window.selectedRequirmentArray.push(selectedRequirementContent);
      if (selectedRequirementContent.dataset.input === "Size") {
        window.multipleRequirmentArray.push(selectedRequirementContent.dataset.name);
        console.log(multipleRequirmentArray);
      }

      window.selectedRequirmentArray.forEach(element => {
        const numOfElement = multipleRequirmentArray.filter(x => x === element.dataset.name).length;
        const existingElement = document.querySelector(`#text-wrap-${element.dataset.name}`);

        if (numOfElement > 1 && existingElement) {
          const appendInput = document.createElement("p");
          appendInput.setAttribute("class", "selected-requirement-addition");
          appendInput.textContent = `${element.dataset.input}:`;
          existingElement.appendChild(appendInput);
          existingElement.appendChild(sizeInputOne.cloneNode());
          existingElement.appendChild(document.createTextNode(" x "));
          existingElement.appendChild(sizeInputTwo.cloneNode());
          existingElement.appendChild(document.createTextNode(" (mm)"));
        } else {
          // Original else block code to create and append the new selectedRequirementDiv
          const selectedRequirementDiv = document.createElement("div");
          selectedRequirementDiv.setAttribute("class", "selected-requirement");

          const selectedRequirementDivImage = document.createElement("img");
          selectedRequirementDivImage.setAttribute("class", "selected-requirement-image");
          selectedRequirementDivImage.setAttribute("src", `/assets/requirements/${element.dataset.photo}`);

          const selectedRequirementDivTextWrap = document.createElement("div");
          selectedRequirementDivTextWrap.setAttribute("class", "selected-requirement-text-wrap");
          selectedRequirementDivTextWrap.setAttribute("id", `text-wrap-${element.dataset.name}`);

          const inputWrap = document.createElement("div");
          inputWrap.setAttribute("class", "input-wrap");

          const selectedRequirementDivName = document.createElement("p");
          selectedRequirementDivName.setAttribute("class", "selected-requirement-name");
          if(numOfElement === 0){
            selectedRequirementDivName.textContent = `${element.dataset.name}`;
          }else{
          selectedRequirementDivName.textContent = `${element.dataset.name} (x ${numOfElement})`;
          }

          const selectedRequirementDivInput = document.createElement("p");
          selectedRequirementDivInput.setAttribute("class", "selected-requirement-input");
          if(element.dataset.input === "Size"){
          selectedRequirementDivInput.textContent = `${element.dataset.input}:`;
          }else{
            selectedRequirementDivInput.textContent = `${element.dataset.input}:`;
          }

          // Append the selected requirement's content to the "quote-build-right" container
          const reqCloseBtn = document.createElement("i");
          reqCloseBtn.setAttribute("class", "fas fa-times reqCloseBtn");
          // Add the event listener directly to the reqCloseBtn
          reqCloseBtn.addEventListener("click", (e) => this.removeSelectedRequirement(e, selectedRequirementContent));
          quoteBuildRight.appendChild(selectedRequirementDiv);
          selectedRequirementDiv.appendChild(reqCloseBtn);
          selectedRequirementDiv.appendChild(selectedRequirementDivImage);
          selectedRequirementDiv.appendChild(selectedRequirementDivTextWrap);
          selectedRequirementDivTextWrap.appendChild(selectedRequirementDivName);
          selectedRequirementDivTextWrap.appendChild(inputWrap);
          inputWrap.appendChild(selectedRequirementDivInput);
          if(element.dataset.input === "Size"){
            inputWrap.appendChild(sizeInputOne.cloneNode());
            inputWrap.appendChild(document.createTextNode(" x "));
            inputWrap.appendChild(sizeInputTwo.cloneNode());
            inputWrap.appendChild(document.createTextNode(" (mm)"));
          }else{
          inputWrap.appendChild(quantityInput.cloneNode());
          }
        }
      });
    }
  }


}

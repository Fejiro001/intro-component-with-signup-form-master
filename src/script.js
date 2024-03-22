"use strict";
const inputElements = document.querySelectorAll(".input");
const errorMessage = document.querySelectorAll(".error-message");
const errorIcon = document.querySelectorAll(".error-icon");
const claimButton = document.querySelector(".btn-claim");
const extraMessage = "Looks like this is not an ";

// Displays error message and the error icon
const displayError = function (index) {
  inputElements[index].style.borderColor = "hsl(0, 100%, 74%)";
  errorMessage[index].textContent =
    inputElements[index].dataset.name + " cannot be empty";
  errorMessage[index].classList.add("display-error");
  errorIcon[index].classList.add("display-error");
};

// Hides error message and the error icon
const hideError = function (index) {
  inputElements[index].style.borderColor = "hsl(246, 25%, 77%)";
  errorMessage[index].classList.remove("display-error");
  errorIcon[index].classList.remove("display-error");
};

// verifyInputs checks if any of the inputs changes display and styling depending on validity
const verifyInputs = function () {
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value === "") {
      displayError(i);
    } else {
      hideError(i);
    }
    // extra validation for emails in case of pattern mismatch
    if (i === 2 && inputElements[i].validity.patternMismatch) {
      displayError(i);
      errorMessage[i].textContent = extraMessage + "email";
    }
    // extra validation for passwords in case of pattern mismatch
    if (i === 3 && inputElements[i].validity.patternMismatch) {
      displayError(i);
      errorMessage[i].textContent = extraMessage + "password";
    }
  }
};

claimButton.addEventListener("click", verifyInputs);

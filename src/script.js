"use strict";
const inputElements = document.querySelectorAll(".input");
const errorMessage = document.querySelectorAll(".error-message");
const errorIcon = document.querySelectorAll(".error-icon");
const claimButton = document.querySelector(".btn-claim");

// Displays error message and the error icon
const displayError = function (index) {
  inputElements[index].style.borderColor = "hsl(0, 100%, 74%)";
  errorMessage[index].style.display = "block";
  errorIcon[index].style.display = "block";
};

// Hides error message and the error icon
const hideError = function (index) {
  inputElements[index].style.borderColor = "hsl(246, 25%, 77%)";
  errorMessage[index].style.display = "none";
  errorIcon[index].style.display = "none";
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
      errorMessage[i].textContent = "Looks like this is not an email";
    }
    // extra validation for passwords in case of pattern mismatch
    if (i === 3 && inputElements[i].validity.patternMismatch) {
      displayError(i);
      errorMessage[i].textContent = "Looks like this is not a password";
    }
  }
};

claimButton.addEventListener("click", verifyInputs);

"use strict";
const inputElements = document.querySelectorAll(".input");
const errorMessage = document.querySelectorAll(".error-message");
const errorIcon = document.querySelectorAll(".error-icon");
const claimButton = document.querySelector(".btn-claim");

// Changes error message content for email and password for pattern mismatch
const updateErrorMessage = function (index, message) {
  errorMessage[index].textContent = "Looks like this is not " + message;
};

// Displays error message and the error icon
const displayError = function (index) {
  const inputName = inputElements[index].dataset.name || "Field";
  inputElements[index].style.borderColor = "hsl(0, 100%, 74%)";
  errorMessage[index].textContent = inputName + " cannot be empty";
  errorMessage[index].classList.add("display-error");
  errorIcon[index].classList.add("display-error");
};

// Hides error message and the error icon
const hideError = function (index) {
  inputElements[index].style.borderColor = "hsl(246, 25%, 77%)";
  errorMessage[index].classList.remove("display-error");
  errorIcon[index].classList.remove("display-error");
};

// Changes input elements styling depending on validity and displays/hides error messages
const verifyInputs = function () {
  inputElements.forEach((input, index) => {
    if (input.value === "") {
      displayError(index);
    } else {
      hideError(index);
    }

    // Extra validation for email and password
    if (input.type === "email" && input.validity.patternMismatch) {
      displayError(index);
      updateErrorMessage(index, "an email");
    }
    if (input.type === "password" && input.validity.patternMismatch) {
      displayError(index);
      updateErrorMessage(index, "a password");
    }
  });
};

claimButton.addEventListener("click", verifyInputs);

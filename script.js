const firstName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const phoneNumber = document.getElementById("inputPhone");
const email = document.getElementById("inputEmail");
const textArea = document.getElementById("questionTextArea");
const form = document.getElementById("form");

// Phone validation function
function validatePhoneNumber(number) {
  const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  return regex.test(String(number).toLowerCase());
}
// Email validation function
function validateEmail(emailValue) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(emailValue).toLowerCase());
}

//Form submission event handler and validation check
form.addEventListener("submit", (e) => {
  let messages = [];

  if (firstName.value === "" || firstName.value === null) {
    messages.push("First name is required.");
  }
  if (lastName.value === "" || lastName.value === null) {
    messages.push("Last name is required.");
  }
  if (!validatePhoneNumber(phoneNumber.value)) {
    messages.push("Invalid phone number.");
  }
  if (!validateEmail(email.value)) {
    messages.push("Invalid email.");
  }
  if (textArea.value === "" || textArea.value === null) {
    messages.push("Message is required.");
  }

  if (messages.length > 0) {
    e.preventDefault();
    messages.forEach((message) => {
      if (message === "First name is required.") {
        firstName.classList.add("is-invalid");
        firstName.classList.add("text-danger");
        document.getElementById("form-first-name").innerHTML += message;
      } else if (message === "Last name is required.") {
        lastName.classList.add("is-invalid");
        lastName.classList.add("text-danger");
        document.getElementById("form-last-name").innerHTML += message;
      } else if (message === "Invalid phone number.") {
        phoneNumber.classList.add("is-invalid");
        phoneNumber.classList.add("text-danger");
        document.getElementById("form-phone").innerHTML += message;
      } else if (message === "Invalid email.") {
        email.classList.add("is-invalid");
        email.classList.add("text-danger");
        document.getElementById("form-email").innerHTML += message;
      } else {
        textArea.classList.add("is-invalid");
        textArea.classList.add("text-danger");
        document.getElementById("form-text-area").innerHTML += message;
      }
    });
  } else {
    location.replace("./thank-you-page.html");
  }
});

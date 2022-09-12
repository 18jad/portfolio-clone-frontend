const header = document.querySelector("header");
const submitButton = document.querySelector(".submit-btn");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const telInput = document.getElementById("tel-input");
const messageInput = document.getElementById("message-input");

const inputs = [nameInput, emailInput, telInput, messageInput];

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 20) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (
      nameInput.value.trim().length >= 3 &&
      emailInput.value.trim() != "" &&
      telInput.value.trim() != "" &&
      messageInput.value.trim().length > 5
    ) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
});

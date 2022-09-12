const header = document.querySelector("header");
const submitButton = document.querySelector(".submit-btn");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const telInput = document.getElementById("tel-input");
const messageInput = document.getElementById("message-input");
const form = document.querySelector("form");

const inputs = [nameInput, emailInput, telInput, messageInput];

const checkHeader = () => {
  if (window.scrollY > 20) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};

document.addEventListener("scroll", (e) => {
  checkHeader();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    checkEmail();
  } catch (err) {
    console.log(err);
  }
});

function checkEmail() {
  let email = emailInput.value;

  // check if email is valid and contains only 1 @ symbol
  if (email.indexOf("@") == -1 || email.split("@").length - 1 > 2) {
    throw new Error("Please enter a valid email address.");
  } else {
    let splittedEmail = email.split("@");
    let firstHalf = splittedEmail[0];
    let secondHalf = splittedEmail[1].split(".")[0];
    console.log(secondHalf, firstHalf);
    // check if string before @ length is 3 or more
    if (firstHalf.length < 3)
      throw new Error(
        "Characters before @ symbol must be at least 3 characters",
      );
    // check after @symbol and before .com ending
    else if (secondHalf.length < 5)
      throw new Error(
        "Characters after @ symbol must be at least 5 characters",
      );
  }
}

window.onload = checkHeader;

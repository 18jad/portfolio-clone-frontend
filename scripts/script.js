const header = document.querySelector("header");
const submitButton = document.querySelector(".submit-btn");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const telInput = document.getElementById("tel-input");
const messageInput = document.getElementById("message-input");
const form = document.querySelector("form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");

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
  // if everything is ok pass and if there was an error remove it
  try {
    checkEmail();
    removeError(emailInput, emailError);
  } catch (err) {
    emailInput.classList.add("error");
    emailError.textContent = err.message;
  }
  try {
    checkName();
    removeError(nameInput, nameError);
  } catch (err) {
    nameInput.classList.add("error");
    nameError.textContent = err.message;
  }
  try {
    checkMessage();
    removeError(messageInput, messageError);
  } catch (err) {
    messageInput.classList.add("error");
    messageError.textContent = err.message;
  }
  try {
    checkPhone();
    removeError(telInput, phoneError);
  } catch (err) {
    telInput.classList.add("error");
    phoneError.textContent = err.message;
  }

  // if everything is validated and ok, remove all errors and clear inputs
  if (checkEmail() && checkName() && checkMessage() && checkPhone()) {
    alert("Message sent successfully");
    emailInput.value = "";
    messageInput.value = "";
    telInput.value = "";
    nameInput.value = "";
    removeError(emailInput, emailError);
    removeError(nameInput, nameError);
    removeError(messageInput, messageError);
    removeError(telInput, phoneError);
  }
});

function removeError(input, errorField) {
  if (input.classList.contains("error")) {
    input.classList.remove("error");
  }
  errorField.textContent = "";
}

function checkEmail() {
  let email = emailInput.value;

  // check if email is valid and contains only 1 @ symbol
  if (email.indexOf("@") == -1 || email.split("@").length - 1 > 2) {
    throw new Error("Please enter a valid email address.");
  } else {
    let splittedEmail = email.split("@");
    let firstHalf = splittedEmail[0];
    let secondHalf = splittedEmail[1].split(".")[0];

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
  // success
  return true;
}

function checkPhone() {
  let number = telInput.value;
  // check if number start with +961
  if (number.slice(0, 4) != "+961") {
    throw new Error("Number should start with +961.");
  } else {
    // check if number start with 3 or 7
    let startingNumber = number[4];

    // check if number is formated well and not short
    if (startingNumber == null || startingNumber == undefined) {
      throw new Error("Number too short or badly formated.");
    } else if (startingNumber == "3") {
      if (number.trim().length != 11) {
        throw new Error("Number should be 7 digits long.");
      }
    } else {
      if (number.trim().length != 12) {
        throw new Error("Number should be 8 digits long.");
      }
    }
  }
  // success
  return true;
}

function checkMessage() {
  let message = messageInput.value;
  // if message is less than 100 characters return error
  if (message.length < 100) {
    throw new Error("Message should be at least 100 characters long.");
  }
  // success
  return true;
}

function checkName() {
  let name = nameInput.value;
  if (name.length < 5) {
    throw new Error("Name should be at least 5 characters long.");
  }
  // success
  return true;
}

window.onload = checkHeader;

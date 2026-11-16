const form = document.getElementById("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userCnic = document.getElementById("userCnic");
const cnicText = document.getElementById("cnicText");
const userAge = document.getElementById("userAge");
const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const cnicError = document.getElementById("cnicError");
const ageError = document.getElementById("ageError");
const defaultBox = document.getElementById("defaultBox");
const eligibleBox = document.getElementById("eligibleBox");
const notEligibleBox = document.getElementById("notEligibleBox");

userCnic.addEventListener("input", (e) => {
  let val = userCnic.value.replace(/[^0-9-]/g, "");

  if (e.inputType !== "deleteContentBackward") {
    if (val.length === 5 || val.length === 13) {
      val = val + "-";
    }
  }
  userCnic.value = val;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = userName.value.trim();
  let email = userEmail.value.trim();
  let cnic = userCnic.value.trim();
  let cleanCnic = cnic.replaceAll("-", "");
  let rawAge = userAge.value.trim();
  let age = Number(rawAge);
  let isValid = true;

  if (username === "") {
    userError.classList.remove("hidden");
    isValid = false;
  } else {
    userError.classList.add("hidden");
  }

  if (email === "") {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (cleanCnic.length !== 13) {
    cnicError.classList.remove("hidden");
    cnicText.style.display = "none";
    isValid = false;
  } else {
    cnicError.classList.add("hidden");
    cnicText.style.display = "block";
  }

  if (rawAge === "" || age <= 0 || age > 120) {
    ageError.classList.remove("hidden");
    isValid = false;
  } else {
    ageError.classList.add("hidden");
  }

  if (!isValid) {
    defaultBox.classList.remove("hidden");
    notEligibleBox.classList.add("hidden");
    eligibleBox.classList.add("hidden");
    return;
  }

  defaultBox.classList.add("hidden");

  if (age >= 18) {
    eligibleBox.classList.remove("hidden");
    notEligibleBox.classList.add("hidden");
  } else {
    eligibleBox.classList.add("hidden");
    notEligibleBox.classList.remove("hidden");
  }
});

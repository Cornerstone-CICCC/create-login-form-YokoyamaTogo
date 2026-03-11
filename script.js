const emailInput = document.getElementById("email");
const emailLeftIcon = document.getElementById("email-left-icon");
const passwordInput = document.getElementById("password");
const passwordLeftIcon = document.getElementById("password-left-icon");

emailInput.addEventListener("focus", () => {
  emailLeftIcon.src = "images/mail-focus.svg";
});

emailInput.addEventListener("blur", () => {
  emailLeftIcon.src = "images/mail.svg";
});

passwordInput.addEventListener("focus", () => {
  passwordLeftIcon.src = "images/lock-focus.svg";
});

passwordInput.addEventListener("blur", () => {
  passwordLeftIcon.src = "images/lock.svg";
});

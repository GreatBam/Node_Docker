const signinToggler = document.getElementById("signin-toggler");
const signupToggler = document.getElementById("signup-toggler");
const sigininContainer = document.querySelector(".signin-container");
const siginupContainer = document.querySelector(".signup-container");

siginupContainer.style.display = "none";

signinToggler.onclick = () => {
  sigininContainer.style.display = "block";
  siginupContainer.style.display = "none";
};

signupToggler.onclick = () => {
  sigininContainer.style.display = "none";
  siginupContainer.style.display = "block";
};

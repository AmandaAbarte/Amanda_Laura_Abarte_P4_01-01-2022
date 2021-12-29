function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const locationSelector = document.querySelector(".checkbox-icon");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

//close form 

closeForm.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//form validation 

firstName.addEventListener("input", ($event) => {
  if ($event.target.value.length >= 2) {

  }
});

firstName.addEventListener("input", ($event) => {
  if ($event.target.value.length >= 2) {

  }
});
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

const submitButton = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close form

closeForm.addEventListener("click", () => {
  modalbg.style.display = "none";
});



/**
 * Form Submission / Handling
 */
const form = document.getElementById("form");
const formStatus = document.getElementById("form_status");

const firstName = document.querySelector("#first");
const firstNameError = document.getElementById("first_name_error");

const lastName = document.querySelector("#last");
const lastNameError = document.getElementById("last_name_error");

const email = document.querySelector("#email");
const emailError = document.getElementById("email_error");

const birthDate = document.querySelector("#birthdate");
const birthDateError = document.getElementById("birthdate_error");

const tournaments = document.getElementById("quantity");
const tournamentsError = document.getElementById("quantity_error");

const locationSelector = document.querySelectorAll(".checkbox-icon");
const locationSelectorError = document.getElementById("location_error");

const terms = document.getElementById("checkbox1");
const termsError = document.getElementById("terms_error");

form.addEventListener("submit", (e) => {
  let errors = [];

  // Prevent the page from reloading on submission
  e.preventDefault();

  // Serialize the form inputs

  // Validate the FirstName - Should be > 2 characters
  if (firstName.value.length < 2) {
    errors.push("First name should be 2 characters or more");
    firstNameError.innerHTML = "Your first name should be 2 characters or more";
  } else {
    firstNameError.innerHTML = " ";
  }

  //validate that last name is atleast 4 characters
  if (lastName.value.length < 4) {
    errors.push("Last name should be 4 characters or more");
    lastNameError.innerHTML = "Your last name should be 4 characters or more";
  } else {
    lastNameError.innerHTML = " ";
  }

  //email address follows format of something@something.something
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.innerHTML = "";
  } else {
    errors.push("please enter a valid email address");
    emailError.innerHTML = "please enter a valid email address";
  }

  //Birthdate entered?
  if (birthDate.value.length < 8) {
    errors.push("enter your birth day");
    birthDateError.innerHTML = "Please enter your birth day";
  } else {
    birthDateError.innerHTML = "";
  }

  //number of tournaments - a number is entered

  if (tournaments.value.length < 1) {
    errors.push("tournaments field left empty");
    tournamentsError.innerHTML = "Please fill out this field";
  } else {
    tournamentsError.innerHTML = "";
  }

  //a location is selected

  if (document.querySelectorAll('input[type="radio"]:checked').length < 1) {
    errors.push("no location selected");
    locationSelectorError.innerHTML = "Please select a location";
  } else {
    locationSelectorError.innerHTML = "";
  }

  //t&c is accepted
  if (terms.checked) {
    termsError.innerHTML = "";
  } else {
    errors.push("t&c not accepted");
    termsError.innerHTML = "Please agree to terms and conditions";
  }

  // To submit or NOT to submit? It depends on the errors!
  if (errors.length > 0) {
    console.log("Do Nothing");
    console.log(errors);
    formStatus.innerHTML = "You have some errors with your form!";
  } else {
    console.log("Submit the form successfully.");
    console.log(errors);
    formStatus.innerHTML = "Thank you! We've received your form submission!";
    form.reset();
  }
});

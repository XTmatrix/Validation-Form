const submitButton = document.querySelector(".btn-register");

submitButton.onclick = validateForm;

function showAlertAndFocus(field, message) {
  alert(message);
  field.focus();
  field.select();
}
let isValid = true;

function validateForm() {
  // Validate first Name
  const firstNameField = $(".first-name-input");
  const firstNameValue = firstNameField.val().trim();

  if (firstNameValue === "") {
    isValid = false;
    alert("Enter your First Name");
    return isValid;
  } else if (!/^[a-zA-Z]{3,10}$/.test(firstNameValue)) {
    isValid = false;
    showAlertAndFocus(
      firstNameField,
      "Name must be 3 to 6 alphabets without numbers."
    );
    return isValid;
  }

  // Validate Last Name
  const lastNameField = $(".last-name-input");
  const lastNameValue = lastNameField.val().trim();

  if (lastNameValue === "") {
    isValid = false;
    alert("Enter your Last Name");
    return isValid;
  }

  // Validate Email
  const emailField = $(".Email-input");
  const emailValue = emailField.val().trim();

  if (emailValue === "") {
    isValid = false;
    alert("Enter your Email");
    return isValid;
  }

  // Validate Mobile
  const mobileField = $(".mobile-input");
  const mobileValue = mobileField.val().trim();

  if (mobileValue === "" || !/^\d{10}$/.test(mobileValue)) {
    isValid = false;
    showAlertAndFocus(mobileField, "Mobile number must be 10 digits.");
    return isValid;
  }

  // Validate Gender
  const genderField = $('input[name="gender"]:checked');

  if (genderField.length === 0) {
    isValid = false;
    alert("Please select your gender.");
    return isValid;
  }

  // Validate Date of Birth
  const dobField = $('input[name="dob"]');
  const dobValue = dobField.val().trim();

  if (dobValue === "") {
    isValid = false;
    alert("Please enter your date of birth.");
    return isValid;
  }

  // Validate Address
  const addressField = $("#textarea");
  const addressValue = addressField.val().trim();

  if (addressValue === "") {
    isValid = false;
    showAlertAndFocus(addressField, "Please enter your address.");
    return isValid;
  }

  // Validate City Name
  const cityNameField = $("#cityname");

  const cityNameValue = cityNameField.val().trim();

  if (cityNameValue === "") {
    isValid = false;
    showAlertAndFocus(cityNameField, "Enter your City Name");
    return isValid;
  }

  // Validate Area Pin
  const areaPinField = $("#areapin");
  const areaPinValue = areaPinField.val().trim();

  if (areaPinValue === "" || areaPinValue.length !== 6) {
    isValid = false;
    showAlertAndFocus(areaPinField, "Area Pin must be a 6-digit number.");
    return isValid;
  }

  // Validate State Name
  const stateNameField = $("#statename");
  const stateNameValue = stateNameField.val().trim();

  if (stateNameValue === "") {
    isValid = false;
    showAlertAndFocus(stateNameField, "Enter your State Name");
    return isValid;
  }

  // Validate Qualification
  const qualificationField = $("#qualification");
  const qualificationValue = qualificationField.val().trim();

  if (qualificationValue === "") {
    isValid = false;
    alert("Select your Qualification");
    return isValid;
  }

  // Validate Specialization
  const specializationCheckboxes = $('input[name="specialization"]:checked');

  if (specializationCheckboxes.length === 0) {
    isValid = false;
    alert("Select at least one Specialization");
    return isValid;
  }

  // Validate Password
  const passwordField = $('input[name="password"]');
  const passwordValue = passwordField.val().trim();

  if (passwordValue === "") {
    isValid = false;
    alert("Enter your Password");
    return isValid;
  }

  return isValid;
}

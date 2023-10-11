function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const verifyPassword = document.getElementById("verify-password").value;
  const shippingAddress = document.getElementById("shipping-address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const copyAddress = document.getElementById("copy-address").checked;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const accountType = document.querySelector(
    'input[name="account-type"]:checked'
  );
  const programmingSkills = document.getElementById("programming-skills");
  const yearsInSchool = document.getElementById("years-in-school").value;
  const creditCard = document.getElementById("credit-card").value;

  // Custom validation logic for each field
  if (!isValidEmail(username)) {
    alert("Please enter a valid email address for the username.");
    return false;
  }

  if (password !== verifyPassword) {
    alert("Passwords do not match.");
    return false;
  }

  if (copyAddress && !isValidShippingAddress(shippingAddress)) {
    alert("Please enter a valid shipping address.");
    return false;
  }

  if (!isValidCity(city)) {
    alert("Please enter a valid city.");
    return false;
  }

  if (!isValidState(state)) {
    alert("Please enter a valid 2-letter state abbreviation.");
    return false;
  }

  if (!isValidZip(zip)) {
    alert("Please enter a valid 5-digit ZIP code.");
    return false;
  }

  if (!isValidPhone(phone)) {
    alert(
      "Please enter a valid phone number (10 digits without spaces or dashes)."
    );
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!accountType) {
    alert("Please select an account type.");
    return false;
  }

  if (programmingSkills.selectedOptions.length === 0) {
    alert("Please select at least one programming skill.");
    return false;
  }

  if (!isValidCreditCard(creditCard)) {
    alert("Please enter a valid credit card number.");
    return false;
  }

  // All validation passed
  return true;
}

function isValidEmail(email) {
  // Implement email validation logic here
  // Example: You can use a regular expression for email validation
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

function isValidShippingAddress(address) {
  // Implement shipping address validation logic here
  return address.trim() !== "";
}

function isValidCity(city) {
  // Implement city validation logic here
  return city.trim() !== "";
}

function isValidState(state) {
  // Implement state validation logic here
  // You can check against a list of valid state abbreviations
  const validStates = ["AL", "AK", "AZ", "AR", "CA" /* ... */];
  return validStates.includes(state.toUpperCase());
}

function isValidZip(zip) {
  // Implement ZIP code validation logic here
  // You can use a regular expression to check for 5 digits
  const zipRegex = /^\d{5}$/;
  return zipRegex.test(zip);
}

function isValidPhone(phone) {
  // Implement phone number validation logic here
  // You can use a regular expression to check for 10 digits
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function isValidCreditCard(creditCard) {
  // Implement credit card number validation logic here
  // You can use a regular expression or a library to validate credit card numbers
  return /* Your credit card validation logic here */;
}

document.addEventListener("DOMContentLoaded", () => {
  var cardNumberInput = document.getElementById("cardnumber");
  var frontCardNumber = document.querySelector(".front-cardnumber p");

  cardNumberInput.addEventListener("input", (event) => {
    var enteredCardNumber = event.target.value;
    enteredCardNumber = enteredCardNumber.replace(/\s/g, "");
    const formattedCardNumber = enteredCardNumber.replace(/(\d{4})/g, "$1 ");
    frontCardNumber.textContent = formattedCardNumber;
  });

  var usernameInput = document.getElementById("username");
  var frontCardName = document.querySelector(".user-name p");

  usernameInput.addEventListener("input", (event) => {
    var enteredUsername = event.target.value;
    frontCardName.textContent = enteredUsername;
  });

  var monthInput = document.getElementById("month");
  var frontCardMonth = document.getElementById("mm");

  monthInput.addEventListener("input", (event) => {
    var enteredMonth = event.target.value;
    frontCardMonth.textContent = enteredMonth;
  });

  var yearInput = document.getElementById("year");
  var frontCardYear = document.getElementById("yy");

  yearInput.addEventListener("input", (event) => {
    var enteredYear = event.target.value;
    frontCardYear.textContent = enteredYear;
  });

  var cvcInput = document.getElementById("cvc");
  var frontCardCvc = document.getElementById("cvc-back");

  cvcInput.addEventListener("input", (event) => {
    var enteredCvc = event.target.value;
    frontCardCvc.textContent = enteredCvc;
  });
});

function validateForm(event) {
  event.preventDefault();
}
function submitInputValidation(){
  var username = validateInput("username", "invalid cardholder name");
  var cardnumber = validateInput("cardnumber","invalid card number should be 16 numbers")
  var month = validateInput("month", "invalid month format MM");
  var year = validateInput("year", "invalid year format YY");
  var cvc = validateInput("cvc", "invalid year format cvc 3 numbers");
  var form = document.getElementById("creditCardForm");
  var successMessage = document.getElementById("success-message");

  console.log(username);
  console.log(cardnumber);
  console.log(month);
  console.log(year);
  console.log(cvc);

  if (username && cardnumber && month && year && cvc) {
    console.log("valide");
    form.style.display = 'none';
    successMessage.style.display = 'block';
    // return false;
  } 
  else {
    console.log('test');
    // return true;
  }
}

function validateInput(inputId, errorMessage) {

  var input = document.getElementById(inputId);
  var errorSpan = document.getElementById(`${inputId}-error`);

  if (!input.validity.valid) {
    input.style.borderColor = "red";
    errorSpan.textContent = errorMessage;
    return false;
  } else {
    input.style.borderColor = "";
    errorSpan.textContent = "";
    return true;
  }
}

function resetForm() {
  var form = document.getElementById("creditCardForm");
  var successMessage = document.getElementById("success-message");
  form.reset();
  form.style.display = "block";
  successMessage.style.display = "none";
}

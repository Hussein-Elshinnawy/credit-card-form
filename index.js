  var cardNumberInput = document.getElementById("cardnumber");
  var frontCardNumber = document.querySelector(".front-cardnumber p");
  var usernameInput = document.getElementById("username");
  var frontCardName = document.querySelector(".user-name p");
  var monthInput = document.getElementById("month");
  var frontCardMonth = document.getElementById("mm");
  var yearInput = document.getElementById("year");
  var frontCardYear = document.getElementById("yy");
  var cvcInput = document.getElementById("cvc");
  var frontCardCvc = document.getElementById("cvc-back");

  function updateCardDetails(inputElement, displayElement) {
    var enteredValue = inputElement.value;
    displayElement.textContent = enteredValue;
  }
  //adjust this code to call the update card and formate 
  function updateCardNumberDetails(inputElement, displayElement) {
    var enteredValue = inputElement.value;
    var formattedValue = enteredValue.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ");
    displayElement.textContent = formattedValue;
  }

  cardNumberInput.addEventListener("input", () => updateCardNumberDetails(cardNumberInput, frontCardNumber));
  usernameInput.addEventListener("input", () => updateCardDetails(usernameInput, frontCardName));
  monthInput.addEventListener("input", () => updateCardDetails(monthInput, frontCardMonth));
  yearInput.addEventListener("input", () => updateCardDetails(yearInput, frontCardYear));
  cvcInput.addEventListener("input", () => updateCardDetails(cvcInput, frontCardCvc));



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

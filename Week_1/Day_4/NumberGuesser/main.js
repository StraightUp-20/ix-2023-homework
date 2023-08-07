// let inputField = document.getElementById("inputField");
// let submitButtom = document.getElementById("submitButton");

// submitButtom.addEventListener("submit", (e) => {
//   e.preventDefault();
//   printRandomGuess();
//   readInputField();
// });

// function printRandomGuess() {
//   let randomNumber = Math.floor(Math.random() * 11);
//   console.log(randomNumber);
// }

// function readInputField() {
//   inputField.value;
// }

let inputField = document.getElementById("inputField");
let displayAnswerOnSubmit = document.getElementById("displayAnswerOnSubmit");

inputField.addEventListener("submit", (e) => {
  e.preventDefault();
  let userGuess = inputField.value;
  let randomNumber = Math.floor(Math.random() * 11);

  if (userGuess === "") {
    displayAnswerOnSubmit.innerHTML = "Enter Valid guess";
  } else if (userGuess < 0 || userGuess > 10) {
    displayAnswerOnSubmit.innerHTML = "Please enter a number between 0 and 10";
  } else if (userGuess === randomNumber) {
    displayAnswerOnSubmit.innerHTML = `Good Job! ${userGuess} is the correct answer`;
  } else {
    displayAnswerOnSubmit.innerHTML = "So close, Try Again!";
  }

  clearInput(inputField);
});

function clearInput(inputField) {
  inputField.value = "";
}

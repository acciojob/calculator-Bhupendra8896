//your code here
const input = document.getElementById("input");
const buttons = document.querySelectorAll(".button");
let currentInput = "";
let lastInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    if (buttonText === "C") {
      clear();
    } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/")
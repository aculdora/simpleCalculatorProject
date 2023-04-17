/*function calculator() {
  // Print the available operations
  console.log("Available operations:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");

  // Get the user's choice of operation
  let operation = parseInt(prompt("Please select operation (1-4):"));

  // Get the operands
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  // Perform the selected operation
  let result;
  if (operation === 1) {
    result = num1 + num2;
  } else if (operation === 2) {
    result = num1 - num2;
  } else if (operation === 3) {
    result = num1 * num2;
  } else if (operation === 4) {
    result = num1 / num2;
  } else {
    console.log("Invalid choice");
    return;
  }

  // Print the result
  console.log("Result:", result);
}

// Call the function to start the calculator
calculator();*/

/*function calculator() {
  // Print the available operations
  console.log("Available operations:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");

  // Get the user's choice of operation
  let operation = parseInt(prompt("Please select operation (1-4):"));

  // Get the number of operands
  let numCount = parseInt(prompt("How many numbers do you want to use?"));

  // Get the operands
  let nums = [];
  for (let i = 0; i < numCount; i++) {
    let num = parseFloat(prompt(`Enter number ${i + 1}:`));
    nums.push(num);
  }

  // Perform the selected operation
  let result;
  if (operation === 1) {
    result = nums.reduce((acc, num) => acc + num);
  } else if (operation === 2) {
    result = nums.reduce((acc, num) => acc - num);
  } else if (operation === 3) {
    result = nums.reduce((acc, num) => acc * num);
  } else if (operation === 4) {
    result = nums.reduce((acc, num) => acc / num);
  } else {
    console.log("Invalid choice");
    return;
  }

  // Print the result
  console.log("Result:", result);
}

// Call the function to start the calculator
calculator();*/

/*function calculator() {
  // Print the available operations
  console.log("Available operations:");
  console.log("+ Addition");
  console.log("- Subtraction");
  console.log("* Multiplication");
  console.log("/ Division");

  // Get the user's choice of operation
  let operation = prompt("Please select operation (+, -, *, /):");

  // Get the number of operands
  let numCount = parseInt(prompt("How many numbers do you want to use?"));

  // Get the operands
  let nums = [];
  for (let i = 0; i < numCount; i++) {
    let num = parseFloat(prompt(`Enter number ${i + 1}:`));
    nums.push(num);
  }

  // Perform the selected operation
  let result;
  if (operation === "+") {
    result = nums.reduce((acc, num) => acc + num);
  } else if (operation === "-") {
    result = nums.reduce((acc, num) => acc - num);
  } else if (operation === "*") {
    result = nums.reduce((acc, num) => acc * num);
  } else if (operation === "/") {
    result = nums.reduce((acc, num) => acc / num);
  } else {
    console.log("Invalid choice");
    return;
  }

  // Print the result
  console.log("Result:", result);
}

// Call the function to start the calculator
calculator();*/
const clearBtn = document.querySelector(".clear");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const resultEl = document.getElementById("result");

// Define variables
let num1 = null;
let num2 = null;
let operator = null;

// Add event listeners
clearBtn.addEventListener("click", clearResult);
numberBtns.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});
equalsBtn.addEventListener("click", calculateResult);

// Define functions
function appendNumber(number) {
  if (resultEl.value === "0") {
    resultEl.value = number;
  } else {
    resultEl.value += number;
  }
}

function setOperator(op) {
  num1 = parseFloat(resultEl.value);
  operator = op;
  resultEl.value = "";
}

function clearResult() {
  num1 = null;
  num2 = null;
  operator = null;
  resultEl.value = "0";
}

function calculateResult() {
  num2 = parseFloat(resultEl.value);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Error";
  }
  resultEl.value = result;
}
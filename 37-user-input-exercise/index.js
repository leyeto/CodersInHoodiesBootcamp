// install and  import "readline-sync" npm package before you do exercises

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
const readline = require("readline-sync");
const name = readline.question("Please enter your name: ");

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

// let selectedSymbol = readline.question(

const mathSymbols = ["+", "-", "*", "/"];
// const symbol = readline.questionInt(
//   mathSymbols,
//   "Please enter number of symbol you'll execute"
// );
let symbol, selectedSymbol, number1, number2;

const askSymbol = () => {
  symbol = readline.question("Select a symbol from +,-,*,/");
  symbol = symbol.trim();
  if (symbol !== "+" || "-" || "*" || "*") {
    return askSymbol();
  }
  return symbol;
};

if (symbol === "+") {
  selectedSymbol = "add";
} else if (symbol === "-") {
  selectedSymbol = "subtract";
} else if (symbol === "*") {
  selectedSymbol = "multiply";
} else if (symbol === "*") {
  selectedSymbol = "divide";
}

/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

const askFirstNumber = () => {
  number = readline.question("Enter first number \n"); // "5"
  const parsedNumber = parseInt(number);

  if (!Number.isInteger(parsedNumber)) {
    return askFirstNumber();
  }

  return parsedNumber;
};

number1 = askFirstNumber();

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

const askSecondNumber = () => {
  number2 = readline.question("Enter second number\n");
  const parsedNumber2 = parseInt(number2);

  if (Number.isInteger(parsedNumber2)) {
    return parsedNumber2;
  }
  return askSecondNumber();
};
number2 = askSecondNumber();

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
let result;
if (selectedSymbol === "add") {
  result = number1 + number2;
} else if (selectedSymbol === "subtract") {
  result = number1 - number2;
} else if (selectedSymbol === "multiply") {
  result = number1 * number2;
} else if (selectedSymbol === "divide") {
  result = number1 / number2;
}
console.log(result, number1, number2, selectedSymbol, symbol);
console.log("=====================");
console.log(`Here you go, the result is ${result}`);

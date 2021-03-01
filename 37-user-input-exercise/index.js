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
//   "Enter maths symbol -,+,/ 0r * \n",
//   (EnteredSymbol) => {
//     if (EnteredSymbol.trim() === "+" || "-" || "/" || "*") {
//       console.log("Valid symbol");
//       readline.close();
//     } else {
//       readline.prompt(`${EnteredSymbol} is incorrect, please try again`);
//       readline.prompt();
//       readline.on("line", (EnteredSymbol) => {
//         if (EnteredSymbol.trim() === "+" || "-" || "/" || "*") {
//           console.log("symbol is valid");
//           readline.close();
//         } else {
//           readline.prompt(`${EnteredSymbol}, is still invalid, Again \n`);
//           readline.prompt();
//         }
//       });
//     }
//     readline.on("close", () => {
//       console.log("Correct");
//     });
//   }
// );

const mathSymbols = ["+", "-", "*", "/"];
let symbol = readline.keyInSelect(
  mathSymbols,
  "Please enter number of symbol you'll execute"
);
if (symbol === 1) {
  selectedSymbol = "add";
} else if (symbol === 2) {
  selectedSymbol = "subtract";
} else if (symbol === 3) {
  selectedSymbol = "multiply";
} else if (symbol === 4) {
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

const firstNumber = readline.question("Enter first number \n");
readline.question("Try to guess the first number entered? \n", (number1) => {
  if (number1 === firstNumber) {
    console.log("Number Entered is correct");
    readline.close();
  } else {
    readline.prompt(`${number1} was incorrect can you try again`);
    readline.prompt();
    readline.on("line", (number1) => {
      if (number1 === firstNumber) {
        console.log("Nice you got it");
        readline.close();
      } else {
        readline.prompt(`${number1}, was wrong again, another try`);
        readline.prompt();
      }
    });
  }
});

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

const secondNumber = readline.question("Enter second number \n");
readline.question("Try to guess the second number entered? \n", (number2) => {
  if (number2 === secondNumber) {
    console.log("Number Entered is correct");
    readline.close();
  } else {
    readline.prompt(`${number2} was incorrect can you try again`);
    readline.prompt();
    readline.on("line", (number2) => {
      if (number2 === secondNumber) {
        console.log("Nice you got it");
        readline.close();
      } else {
        readline.prompt(`${number2}, was wrong again, another try`);
        readline.prompt();
      }
    });
  }
});

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

if (selectedSymbol === "add") {
  result = number1 + number2;
} else if (selectedSymbol === "subtract") {
  result = number1 - number2;
} else if (selectedSymbol === "multiply") {
  result = number1 * number2;
} else if (selectedSymbol === "divide") {
  result = number1 / number2;
}

console.log("=====================");
console.log(`Here you go, the result is ${result}`);

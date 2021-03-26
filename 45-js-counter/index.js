let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
let corrector;
const count = document.querySelector(".counter_value");
const action = (symbol) => {
  if (symbol === "+") {
    corrector = step;
    step = parseInt(corrector);
    console.log("Counter is a " + typeof counter);
    console.log("Step is a  " + typeof step);
    counter += step;
    count.innerText = counter;
    console.log("this line " + typeof count);
  } else if (symbol === "-") {
    counter -= step;
    count.innerText = counter;
  } else {
    console.log("invalid symbol");
  }
};

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

const stepButton = document.querySelector("form");
stepButton.addEventListener("submit", (event) => {
  event.preventDefault();
  const stepParagraph = document.querySelector(".step_value");
  const stepInput = document.querySelector("#step");
  step = stepInput.value;
  stepParagraph.innerText = stepInput.value;
  stepInput.value = 1;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const decrease = document.querySelector('.inc_dec [id="decrement"]');
decrease.addEventListener("click", (event) => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const increase = document.querySelector('.inc_dec [id="increment"]');
increase.addEventListener("click", (event) => {
  action("+");
});

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let decreaser;
const autoDecrement = document.querySelector(
  '.auto_inc_dec [id="auto_decrement"]'
);
autoDecrement.addEventListener("click", (event) => {
  clearTimeout(increaser);
  decreaser = setInterval(function () {
    count.innerText -= step;
  }, 1000);
});

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let increaser;
const autoIncrement = document.querySelector(
  '.auto_inc_dec [id="auto_increment"]'
);
autoIncrement.addEventListener("click", (event) => {
  clearTimeout(decreaser);
  increaser = setInterval(function () {
    corrector = step;
    step = parseInt(corrector);
    corrector = parseInt(count.innerText);

    console.log("corrector is a " + typeof corrector);
    console.log("Step is a  " + typeof step);
    count.innerText = corrector + step;
  }, 1000);
});

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const stopAuto = document.querySelector('.auto_inc_dec [id="stop_auto"]');
stopAuto.addEventListener("click", (event) => {
  clearTimeout(increaser);
  clearTimeout(decreaser);
  console.log("counter should have stopped");
});

// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const clickTheButton = () => {
  const clickMe = document.querySelector(".click button");
  clickMe.addEventListener("click", (event) => {
    console.log("Log message on console");
  });
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

const hoverOver = () => {
  const anchorHover = document.querySelector(".mouseover a");
  anchorHover.addEventListener("mouseover", (event) => {
    console.log("We came");
  });
};

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */

const handleLeave = () => {
  const anchorLeave = document.querySelector(".mouseover a");
  anchorLeave.addEventListener("mouseout", (event) => {
    console.log("We left");
  });
};

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const focusOnMe = () => {
  const inputFocus = document.querySelector(".input");
  inputFocus.addEventListener(
    "focus",
    (event) => {
      console.log("Text cell entered");
    },
    true
  );
};

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

const clickElsewhere = () => {
  const inputElsewhere = document.querySelector(".input");
  inputElsewhere.addEventListener(
    "blur",
    (event) => {
      console.log("Elsewhere has run");
    },
    true
  );
};

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
  const keyPress = document.querySelector(".input");
  keyPress.addEventListener("keydown", (event) => {
    console.log(event.target.value);
  });
};

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const releaseAKey = () => {
  const keyRelease = document.querySelector(".input");
  keyRelease.addEventListener("keyup", (event) => {
    console.log(event.target.value);
  });
};

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const inputToUpperCase = () => {
  const toUpper = document.querySelector(".input");
  toUpper.addEventListener("keyup", (event) => {
    //let pressedKey = event.target.value.toUpperCase();
    event.target.value = event.target.value.toUpperCase();
    console.log(event.target.value.toUpperCase());
  });
};

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

const handleSelectChange = () => {
  const selectChange = document.querySelector(".select");
  selectChange.addEventListener("change", (event) => {
    console.log(event.target.value);
  });
};

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

const submitFormHandler = () => {
  const first = document.querySelector('form [name="firstName"]');
  const last = document.querySelector('form [name="lastName"]');
  const submitForm = document.querySelector("form");
  let user = {};
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    user = {
      firstName: first.value,
      lastName: last.value,
    };
    console.log(user);
  });
};

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
  window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
  });
};

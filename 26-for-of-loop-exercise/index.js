/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function getIntegersOnly(array) {
  let newArray = [];
  for (let element of array) {
    if (Number.isInteger(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */

function getEvenNumbers(array) {
  let newArray = [];
  for (let element of array) {
    if (element % 2 === 0) {
      newArray.push(element);
    }
  }
  return newArray;
}

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */

function getEvenNumbersFromMixedArray(array) {
  let newArray = [];
  for (let element of array) {
    if (Number.isInteger(element) && element % 2 === 0) {
      newArray.push(element);
    }
  }
  return newArray;
}

/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */

function getOddNumbers(array) {
  let newArray = [];
  for (let element of array) {
    if (element % 2 === 1) {
      newArray.push(element);
    }
  }
  return newArray;
}

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */

function evenOddTransform(array) {
  let newArray = [];
  for (let element of array) {
    if (element % 2 === 0) {
      newArray.push(element - 1);
    }
    if (element % 2 === 1) {
      newArray.push(element + 1);
    }
  }
  return newArray;


// function evenOddTransform(numbers) {
//   let modifiedNumbers = [];
//   for (let number of numbers) {
//     // read about ternaries
//     const modifier = number % 2 ? 1 : -1;

//     modifiedNumbers.push(number + modifier);
//   }
//   return modifiedNumbers;
// }

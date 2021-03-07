/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */

reverseArray = function (arrayToReverse = []) {
  if (Array.isArray(arrayToReverse)) {
    let reversedArray = [];
    reversedArray = arrayToReverse.reverse();
    return reversedArray;
  } else {
    return "Please, pass correct type";
  }
};

/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */

function nextOddNum(number) {
  let nextOdd = 0;
  for (let i = number; i < number + 3; i++) {
    if (i % 2 === 1) {
      nextOdd = i;
      continue;
    }
  }
  return nextOdd;
}

console.log(nextOddNum(3));

/**
 * Exercise 3
 *
 * create an inline function {isLessThan100} which should take
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is
 * less than 100. Otherwise return false.
 */

function isLessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}

/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */

function incrementBy5(numberToIncrease) {
  return numberToIncrease + 5;
}

/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and
 * return the result
 */
function incrementor(array, increase) {
  let newArray = array.map((number) => number + increase);
  return newArray;
}

function incrementAllBy5(numbers, incrementor) {
  // let incrementedNumbers = [];

  // numbers.forEach(number => {
  //   const incrementedNumber = incrementor(number);
  //   incrementedNumbers.push(incrementedNumber)
  // })

  // return incrementedNumbers;

  return numbers.map((number) => incrementor(number));

  // return numbers.map((number) =>{
  //   return incrementor(number);
  // })
}

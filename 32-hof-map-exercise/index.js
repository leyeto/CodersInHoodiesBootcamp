// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */

const convertToPositive = (array) => {
  let newArray = [];
  array.map((number) => {
    if (number < 0) {
      newArray.push(Math.abs(number));
    } else {
      newArray.push(number);
    }
  });
  return newArray;
};

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

const getAllNames = (objectWithNames) => {
  let namesOnly = objectWithNames.map((parameter) =>
    namesOnly.push(Object.values((objectWithNames = { name })))
  );
  return namesOnly;
};

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

function greetAll(arrayOfNames) {
  let hiArray = arrayOfNames.map((name) => `Hi, ${name}!`);
  return hiArray;
}

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

function multiplyAllNumbers(arrayToBeMultiplied) {
  let multipliedArray = arrayToBeMultiplied.map((number) => {
    if (number % 1 === 0) {
      number * 5;
    }
  });
  return multipliedArray;
}

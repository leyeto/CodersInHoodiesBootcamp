const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */

function sortedData(dataTypes) {
  let strings = [];
  let integers = [];
  let floats = [];
  let arrays = [];
  let objects = [];
  for (let data of dataTypes) {
    if (Number.isInteger(data)) {
      integers.push(data);
    } else if (Array.isArray(data)) {
      arrays.push(data);
    } else if (typeof data === "object") {
      objects.push(data);
    } else if (typeof data === "string") {
      strings.push(data);
    } else if (!Number.isInteger(data) && data % 1 !== 0) {
      floats.push(data);
    }
  }
  const sortedObject = {};
  sortedObject.integers = integers;
  sortedObject.strings = strings;
  sortedObject.floats = floats;
  sortedObject.arrays = arrays;
  sortedObject.objects = objects;
  return sortedObject;
}

/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */

function multipliedByNextNumber(array) {
  let multiplyNextArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      multiplyNextArray.push(array[i]);
    } else {
      multiplyNextArray.push(array[i] * array[i + 1]);
    }
  }
  return multiplyNextArray;
}

/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */

function multipliedEvenNumbers(numbers) {
  let evenNumbers = numbers.filter((number) => number % 2 !== 1);
  console.log("evenNumbers", evenNumbers);
  const modifiedEvenNumbers = evenNumbers.map((evenNumber, index) => {
    if (index === evenNumbers.length - 1) {
      return evenNumber * 2;
    } else {
      return evenNumber * evenNumbers[index + 1];
    }
  });
  console.log("modifiedEvenNumbers", modifiedEvenNumbers);

  const result = numbers.map((number) => {
    if (number % 2) {
      return number;
    } else {
      return modifiedEvenNumbers.shift();
    }
  });
  console.log("result", result);
  return result;
}

/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */

function multipliedOddNumbers(numbers) {
  let oddNumbers = numbers.filter((number) => number % 2 === 1);
  let modifiedOddNumber = oddNumbers.map((number, index) => {
    if (index === oddNumbers.length - 1) {
      return oddNumbers[index];
    } else {
      return oddNumbers[index] * oddNumbers[index + 1];
    }
  });
  let finalNumbers = numbers.map((number) => {
    if (number % 2 === 1) {
      return modifiedOddNumber.shift();
    } else {
      return number;
    }
  });
  return finalNumbers;
}

/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */

function multipliedEvenOddNumbers(numbers, type) {
  let modifiedArray = [];
  if (type === "even") {
    return multipliedEvenNumbers(numbers);
  }
  if (type === "odd") {
    return multipliedOddNumbers(numbers);
  } else {
    return numbers;
  }
}

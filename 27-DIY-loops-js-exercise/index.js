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
  multiplyNextArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    multiplyNextArray.push(array[i] + array[i + 1]);
  }
  multiplyNextArray.push(array[array.length - 1] * 1);

  return multiplyNextArray;
}
multipliedByNextNumber([3, 5, 3, 3, 8, 32, 21, 24, 8]);

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

function multipliedEvenNumbers(array) {
  nextEven = 1;
  modifiedEven = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      modifiedEven.push(array[i]);
    }
    if (array[i] % 2 === 0) {
      while (array[i + 1] % 2 === 0) {
        nextEven = array[i + 1];
        modifiedEven.push(array[i] * nextEven);
        nextEven = 1;
        i++;
      }
      if (nextEven === 1) {
        modifiedEven.push(array[i] * 2);
      }
    }
  }
  console.log(modifiedEven);
  return modifiedEven;
}

multipliedEvenNumbers([2, 5, 6, 2, 13, 7, 5, 7]);

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

function multipliedOddNumbers(array) {
  nextOdd = 1;
  modifiedOdd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      modifiedOdd.push(array[i]);
    }
    if (array[i] % 2 === 1) {
      while (array[i + 1] % 2 === 1) {
        nextOdd = array[i + 1];
        modifiedOdd.push(array[i] * nextOdd);
        nextOdd = 1;
        i++;
      }
      if (nextOdd === 1) {
        modifiedEven.push(array[i] * 1);
      }
    }
  }
  console.log(modifiedOdd);
  return modifiedOdd;
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

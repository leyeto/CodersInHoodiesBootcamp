//
/**
 * !!! IMPORTANT !!!
 *
 * USE "for" loop to recreate all JS pre-built functions
 */

/**
 * Exercise #1
 *
 * create a function forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

/**
 * Exercise #2
 *
 * create a function map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

function map(array, callback) {
  let mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i], i));
  }
  return mappedArray;
}

/**
 * Exercise #3
 *
 * create a function filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

function filter(array, callback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i) === true) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

/**
 * Exercise #4
 *
 * create a function find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i) === true) {
      return array[i];
    }
  }
}

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i) === true) {
      return i;
    }
  }
}

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

function every(array, callback) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i) === false) {
      return false;
    }
  }
  return true;
}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i) === true) {
      return true;
    }
  }
  return false;
}

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

function reduce(array, callback, initialValue = 0) {
  let reduceOutput = initialValue;
  for (let i = 0; i < array.length; i++) {
    reduceOutput += callback(array[i], i);
  }
  return reduceOutput;
}

/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(object) {
  for (let property in object) {
    console.log(`Property name: ${property}`);
  }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
  let objectValues = [];
  for (let property in object) {
    objectValues.push(object[property]);
  }

  return objectValues;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(object) {
  let str = "";
  for (let property in object) {
    str += object[property] + " ";
  }

  // read about trim method in JS
  return str.trim();
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */
function propertyValueString(object) {
  for (let property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}

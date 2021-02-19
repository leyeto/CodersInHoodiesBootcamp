/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(object) {
  for (let property in object) {
    console.log(`${property}: ${object[property]} \n`);
  }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
  var array = [];
  for (let property in object) {
    array.push(object[property]);
  }
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(object) {
  var str = "";
  for (let property in object) {
    str += object[property] + " ";
  }
  return str;
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */
function propertyValueString(object) {
  var str = "";
  for (let property in object) {
    str += ` ${property} : ${object[property]} \n`;
  }
  return str;
}

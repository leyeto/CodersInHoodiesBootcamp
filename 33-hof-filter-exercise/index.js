/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */

const noStrings = (mixedArray) => {
  const noStringArray = mixedArray.filter(
    (element) => typeof element !== "string"
  );
  return noStringArray;
};

/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */

const justStrings = (mixedArray) => {
  const StringArray = mixedArray.filter(
    (element) => typeof element === "string"
  );
  return StringArray;
};

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */

const justStringsLongerThan5 = (mixedArray) => {
  const StringArray5plus = mixedArray.filter(
    (element) => typeof element === "string" && element.length > 5
  );
  return StringArray5plus;
};

/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

const numbersMoreThan13 = (mixedArray) => {
  const greaterThan13 = mixedArray.filter(
    (element) => typeof element === "number" && element > 13
  );
  return greaterThan13;
};

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

const objectsOnly = (mixedArray) => {
  const objects = mixedArray.filter((element) => typeof element === "object");
  return objects;
};

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */

const truthyOnly = (mixedArray) => {
  const truthArray = mixedArray.filter(
    (element) => Boolean(element) || element === 0
  );
  return truthArray;
};

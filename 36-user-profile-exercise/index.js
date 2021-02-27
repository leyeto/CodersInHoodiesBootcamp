// install and  import "readline-sync" npm package before you do exercises

const user = {};
const readlineSync = require("readline-sync");
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */

/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */

user.firstName = readlineSync.question("Enter first name:  ");
user.lastName = readlineSync.question("Enter last name:  ");
console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */

user.age = readlineSync.question("Enter your age:  ");

/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
user.email = readlineSync.question("Enter your email address:  ");

/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
  `Here what we have, your full name is ${require("chalk").blue(
    user.firstName
  )} ${require("chalk").inverse.bold(user.lastName)}. 
    You are ${require("chalk").yellow.underline(
      user.age
    )} and if we need to contact with you we can send 
    a letter to ${require("chalk").green(user.email)} `
);

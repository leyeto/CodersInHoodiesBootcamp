let count = 10; // DO NOT TOUCH THIS LINE :)

/**
 * Exercise 1
 * create a function {countdown}
 * This function should have while loop which will
 * decrease {count} and log every step with message
 * "Remaining: X" where X is a number. When {count} will
 * be equal to 0 log message "Go!"
 */

function countdown() {
  while (count >= 0) {
    if (count === 0) {
      console.log("Go!");
      break;
    }
    console.log("Remaining: " + count);
    count--;
  }
}

// ==========================

/**
 * Exercise 2
 *
 * create a function {countdownWithParam} which should
 * be the same as {countdown} the only difference is
 * that it takes any number as a param and count from that point
 */

function countdownWithParam(number) {
  while (number >= 0) {
    if (count === 0) {
      console.log("Go!");
      break;
    }
    console.log("Remaining: " + number);
    number--;
  }
}

// ==========================
let ruler = [];
/**
 * Exercise 3
 * create a function {rulerConstructor} and by using while loop
 * create a ruler with step 10 and push each number to {ruler}
 * until you reach 100.
 * The result of calling {rulerConstructor} is that {ruler}
 * will be [0,10,20,30,40,50,60,70,80,90,100]
 */

function rulerConstructor() {
  let number = 0;
  while (number <= 100) {
    ruler.push(number);
    number += 10;
  }
}

// ==========================

/**
 * Exercise 4
 * create a function {partyPadding} which takes an array of names
 * of guests at a party. If there are less than 5 guests, add
 * "Neighbour" to the array until you have at least 5 guests.
 * Without using an if statement!
 */
let guest = [];
function partyPadding(guests) {
  var length = guests.length;
  guests.fill(5 - guests.length, "Neighbour");
  while (length <= 5) {
    guests.push("Neighbour");
    length++;
  }
}

partyPadding();

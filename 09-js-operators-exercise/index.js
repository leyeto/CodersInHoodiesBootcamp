/**
 * Exercise #1
 *
 * Create a function with name {sum} that will take
 * 2 numbers as parameters and return a sum
 *
 * NOTE: additionally you can have console.log() to log the result
 */

/**
 * Exercise #2
 *
 * Create a function with name {subtract} that will take
 * minuend as a first parameter, subtrahend as a second
 * and should return a difference
 *
 * NOTE: additionally you can have console.log() to log the result
 */

/**
 * Exercise #3
 *
 * Create a function with name {multiply} that will take
 * 2 factors, and return a product
 *
 * NOTE: additionally you can have console.log() to log the result
 */

/**
 * Exercise #4
 *
 * Create a function with name {divide} that will take
 * dividend as a first parameter, divisor as a second parameter
 * and return a quotient
 *
 * NOTE: additionally you can have console.log() to log the result
 */

/**
 * Exercise #5
 *
 * Create a function with name {getRemainder} that will take
 * dividend as a first parameter, divisor as a second parameter
 * and return a remainder
 *
 * NOTE: additionally you can have console.log() to log the result
 */

/**
 * Exercise #6
 *
 * Create a function with name {increment} that will take
 * a number, increment by 1 and return a result
 *
 * NOTE: additionally you can have console.log() to log the result
 */

/**
 * Exercise #7
 *
 * Create a function with name {decrement} that will take
 * a number, decrement by 1 and return a result
 *
 * NOTE: additionally you can have console.log() to log the result
 */

function sum(a, b){
    var sum = a + b;
    console.log(sum);
    return sum;
}

function subtract(a, b){
    var diff = a - b;
    console.log(diff);
    return diff;
}

function multiply(a,b){
    var multiple = a * b;
    console.log(multiple);
    return multiple;
}

function divide(a , b){
    var div = a / b;
    console.log(div);
    return div;
}

function getRemainder(a , b){
    var remainder = a % b;
    console.log(remainder);
    return remainder;
}

function increment(a){
    console.log(a++)
    return a++;
}

function decrement(a){
    console.log(a--)
    return a--;
}
/**
 * Exercise 1
 *
 * create a function "isOdd" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Not odd" if it's
 * anything else
 */

/**
 * Exercise 2
 *
 * create a function "isEven" which takes a number as a parameter
 * and return a string "Is even" if it's even or "Not even" if it's
 * anything else
 */

/**
 * Exercise 3
 *
 * create a function "oddOrEven" which takes a number as a parameter
 * and return a string "Is odd" if it's odd or "Is even" if it's even
 */

/**
 * Exercise 4
 *
 * create function "roundedNumber" which takes a fraction as a parameter
 * and return rounded integer
 */

/**
 * Exercise 5
 *
 * create function "roundToLowerInteger" which takes a fraction as a parameter
 * and returns the largest integer less than or equal to a given number
 */

/**
 * Exercise 6
 *
 * create function "roundToLargerInteger" which takes a fraction as a parameter
 * and returns rounded number up to the next largest integer
 */

/**
 * Exercise 7
 *
 * create function "convertToPositive" which takes a negative number as a parameter
 * and returns same number but positive
 */

/**
 * Exercise 8
 *
 * create function "findMaxNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the maximum number
 */

/**
 * Exercise 9
 *
 * create function "findMinNumber" which takes a few numbers(at least 4 numbers) as a parameters
 * and returns the minimum number
 */


 function isOdd(number){
     let remainder = number % 2;
     if(remainder == 1){         
         return "Is odd";
     }else{
         return "Not odd";
     }
 }

 function isEven(number){
     let remainder = number % 2;
     if(remainder == 2){
         return "Is even";
         //Error isEven return string for even number 
     }else{
         return "Not even";
     }
 }

 function oddOrEven(number){
     let remainder = number % 2;
     if(remainder == 1){
         return "Is odd";
     }
     if(remainder == 2){
         return "Is even";
        //  Error oddOrEven return string for even number
     }
 }

 function roundedNumber(number){
     return Math.round(number);     
 }

 function roundToLowerInteger(number){
     return Math.floor(number);
 }

 function roundToLargerInteger(number){
     return Math.ceil(number);
 }

 function convertToPositive(number){
     return -(number);
 }

 function findMaxNumber(number1, number2, number3, number4){
     return Math.max(number1,number2,number3,number4);
 }

 function findMinNumber(number1, number2, number3, number4){
    return Math.min(number1,number2,number3,number4);
}
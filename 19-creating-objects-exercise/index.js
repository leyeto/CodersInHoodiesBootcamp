/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
let user = {
  firstName: "Steve",
  lastName: "Martin",
  age: 31,
};

/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
let allTypes = {
  string: "String",
  number: 214,
  obj: { laptop: "Mac", keyboard: "HP", monitor: "Dell" },
  array: [1, 2, 3, 4, 5],
  fun: function () {
    var stringNumber = allTypes.string.concat(this.number);
  },
  boo: true,
};

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject(name,rating,ticketPrice) {
    const movie = {
        name: name,
        rating: rating,
        ticketPrice: ticketPrice,
  return Object.values(movie);
}}

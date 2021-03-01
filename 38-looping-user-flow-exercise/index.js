// install and  import "readline-sync" npm package before you do exercises
var readlineSync = require("readline-sync");
let selectedItems = {
  book: "",
  movie: "",
  nextTrip: "",
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic",
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups",
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland",
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

let selectedBook = readlineSync.keyInSelect(books, "Select a book key 1-7 \n");
console.log("You entered " + books[selectedBook]);
selectedItems.book = books[selectedBook];
user.book = selectedItems.book;
console.log(`${selectedItems.book} has been added to selected items as book`);

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

let selectMovie = readlineSync.keyInSelect(
  movies,
  "Select a movie from the list"
);
console.log(`${movies[selectMovie]} was selected`);
user.movie = movies[selectMovie];
user.movie = selectedItems.movie;

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

let selectCountry = readlineSync.keyInSelect(
  countries,
  "Select a movie from the list"
);
console.log(`${countries[selectCountry]} was selected`);
user.nextTrip = movies[selectMovie];
user.nextTrip = selectedItems.nextTrip;

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */
readlineSync.close();

const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

const fetchData = async (urlLink = "https://cat-fact.herokuapp.com/facts") => {
  await fetch(urlLink)
    .then((response) => response.json())
    .then((data) => {
      console.log("JSON is \n" + data);
      const arrayOfFacts = [];
      data.forEach((object) => {
        Object.entries(object).forEach(([key, value]) => {
          arrayOfFacts.push(key, value);
        });
      });

      //   arrayOfFacts = JSON.parse(data);
      console.log("Array of Facts is\n" + arrayOfFacts);
      return arrayOfFacts;
    });
};

button.addEventListener("click", (event) => {
  const factText = document.querySelector(".fact");
  const factAuthor = document.querySelector(".author");
  factText.innerText = fetchData()[user];
  factAuthor.innerText = fetchData()[text];
});

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

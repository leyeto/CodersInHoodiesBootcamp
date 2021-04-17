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
  return await fetch(urlLink)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getThreeFacts = async () => {
  let randomNumbers = [];
  let arrayOfFacts = [];
  let dataObject = await fetchData();
  let temp;
  while (randomNumbers.length < 3) {
    temp = Math.floor(Math.random() * 5);
    if (randomNumbers.indexOf(temp) === -1) {
      randomNumbers.push(temp);
      arrayOfFacts.push(dataObject[temp]);
    }
  }
  return arrayOfFacts;
};

const createFactElement = (fact, author) => {
  return `<li>
  <p class="fact">${fact}</p>
  <p class="author">${author}</p>
</li>`;
};

button.addEventListener("click", async (event) => {
  result.innerHTML = "";
  const threeFacts = await getThreeFacts();
  threeFacts.forEach((fact) => {
    const factElement = createFactElement(fact.text, fact.user);
    result.innerHTML += factElement;
  });
});

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */

const getResponse = async (urlLink) => {
  await fetch(urlLink).then((response) => {
    console.log("We ran");
    if (response.ok) {
      result.innerHTML = `Valid link! <a href=${urlLink} target='_blank'>
    </a>`;
    } else {
      result.innerText = `Request failed with status code: ${response.status}`;
    }
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getResponse(input.value);
});

input.addEventListener("focus", (event) => {
  input.value = "";
  result.innerText = "";
});

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */

// input.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const web = input.value;
//   fetch(web).then((response) => {
//     if (response.ok) {
//       result.innerText = `Valid link! ${web}`;
//     } else {
//       result.innerText = `Request failed with status code: ${response.status}`;
//     }
//   });
// });

// const getResponse = async (urlLink) => {
//   const reply = await fetch(urlLink).then((response) => {
//     if (response.ok) {
//       result.innerText = `Valid link! ${urlLink}`;
//     } else {
//       result.innerText = `Request failed with status code: ${response.status}`;
//     }
//   });
// };

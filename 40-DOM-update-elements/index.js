// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */

const setTitle = (stringInH1) => {
  const h1Title = document.querySelector("h1");
  h1Title.innerText = stringInH1;
};

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */

const appendToTitle = (joinTitle) => {
  let existingH1 = document.querySelector("h1");
  existingH1.innerText += joinTitle;
};

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

const prependToTitle = (textToPrepend) => {
  const existingH1 = document.querySelector("h1");
  const currentText = existingH1.innerText;
  existingH1.innerText = textToPrepend + currentText;
};

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to replace the element inside the div, and the
 * text is displayed inside that element. The element should be the tag name
 * passed into the function
 */

const setInnerHTMLForDiv = (tag, text) => {
  const divFound = document.querySelector("div");
  divFound.innerHTML += `<${tag}>${text}</${tag}>`;
};

/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */
const pushPtoDivWithText = (stringWithP) => {
  const divFound = document.querySelector("div");
  divFound.innerHTML += `<p>${stringWithP}</p>`;
};

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */
const setSrcToImage = (imagelink, imageDes) => {
  const newImage = document.querySelector("img");
  newImage.src = imagelink;
  newImage.alt = imageDes;
  return document.body.appendChild(newImage);
};

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

const setCodersInHoodsLink = (url, text) => {
  const webLink = document.querySelector("a");
  webLink.target = "_blank";
  webLink.href = url;
  webLink.innerText = text;
  return document.body.appendChild(webLink);
};

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

const disableResetBtn = () => {
  document.querySelector(".reset").disabled = true;
};

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

const disableBtns = (classToDisable) => {
  const buttonsToDisable = document.querySelectorAll(`.${classToDisable}`);
  buttonsToDisable.forEach((button) => (button.disabled = true));
};

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

const addClassToLi = () => {
  const currentList = document.querySelectorAll(".list li");
  console.log(currentList);
  currentList.forEach((listItem, i) => {
    listItem.classList.add(`list_item_${i}`);
  });
};

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

const removeListItemClass = () => {
  const itemsToRemove = document.querySelectorAll("ul .list_item");
  itemsToRemove.forEach((item) => (item.className = null));
};

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

const addId = (id, selector) => {
  const foundElement = document.querySelector(selector);
  foundElement.id = id;
};

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */
const setStyles = (propertyName, propertyValue, cssSelector) => {
  const toStyle = document.querySelectorAll(cssSelector);
  toStyle.forEach((element) => (element.style[propertyName] = propertyValue));
};

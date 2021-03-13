// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

const createDOMElement = (tagName) => {
  const newElement = document.createElement(tagName);
  return newElement;
};

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

const addPTag = (textToP) => {
  const newP = document.createElement("p");
  newP.innerText = textToP;
  return document.body.appendChild(newP);
};

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

const addElementWithClass = (tagName, text, classNam) => {
  const newElemen = document.createElement(tagName);
  newElemen.innerText = text;
  newElemen.className = classNam;
  document.body.appendChild(newElemen);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
const addElementWithMultipleClasses = (tagName, text, arrayOfClasses) => {
  const elementWithClasses = document.createElement(tagName);
  elementWithClasses.innerText = text;
  arrayOfClasses.forEach((element) => {
    elementWithClasses.classList.add(element);
  });
  document.body.appendChild(elementWithClasses);
};

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType, className, noOfItems) => {
  const list = document.createElement(listType);
  list.classList.add(className);
  document.body.appendChild(list);
  for (let i = 0; i < noOfItems; i++) {
    let currentElement = document.createElement("li");
    currentElement.innerText = `Item ${1 + i}`;
    currentElement.classList.add(className);
    list.appendChild(currentElement);
  }
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

const prependLiToList = (prependText, prependclassName) => {
  const newLi = document.createElement("li");
  newLi.innerText = prependText;
  newLi.classList.add(prependclassName);
  document.querySelector("ul").prepend(newLi);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

const pushToSelectedPosition = (postText, className, position) => {
  const positionLi = document.createElement("li");
  positionLi.innerText = postText;
  positionLi.classList.add(className);
  const targetPosition = document.querySelector(
    `li:nth-child(${position + 1})`
  );
  const targParent = targetPosition.parentElement;
  return targParent.insertBefore(positionLi, targetPosition);
};

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */
const deleteSelectedElements = (parent, child) => {
  const kid = document.querySelector(child);
  const carer = document.querySelector(parent);
  if (kid.parentNode == carer) {
    const targetParent = kid.parentNode;
    console.log(targetParent);
    targetParent.textContent = "";
  }
};

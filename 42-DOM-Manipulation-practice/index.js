/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list" and add it to the DOM
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */
const createAList = () => {
  const list = document.createElement("ul");
  list.classList.add("list");
  document.body.appendChild(list);
  for (let index = 1; index <= 5; index++) {
    (function () {
      setTimeout(function () {
        let currentItem = document.createElement("li");
        currentItem.innerText = "Item " + index;
        list.appendChild(currentItem);
      }, 1000 * index);
    })(1000 * index);
  }
};

const createAList = () => {
  const ulEl = document.createElement("ul");
  ulEl.className = "list";
  document.body.appendChild(ulEl);

  for (let index = 1; index <= 5; index++) {
    const liEl = document.createElement("li");
    liEl.innerText = `Item ${index}`;

    setTimeout(() => {
      console.log("setTimeout");
      ulEl.appendChild(liEl);
    }, 1000 * index);
  }
};

/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
 * Requirements:
 * 1. select the third list item from "".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em
 */

const styleElement = () => {
  const elementTostyle = document.querySelector(".myList li:nth-child(3)");
  elementTostyle.style.color = "white";
  elementTostyle.style.backgroundColor = "green";
  elementTostyle.style.fontSize = "2em";
};

/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */

const removeLastChild = () => {
  const selectedParent = document.querySelector(".myList");
  (function () {
    setTimeout(function () {
      const lastChild = selectedParent.lastElementChild;
      lastChild.remove();
    }, 2000);
  })(2000);
};

/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */

createAMessage = (message) => {
  const newP = document.createElement("p");
  newP.className = "message";
  newP.innerText = message;
  document.body.appendChild(newP);
  (function () {
    setTimeout(function () {
      newP.classList.add("visible");
      console.log("class visible added after 2s");
      setTimeout(function () {
        newP.classList.add("hide");
        console.log("class hide added after 3s");
        setTimeout(function () {
          newP.remove();
          console.log("newP Removed");
        }, 2000);
      }, 3000);
    }, 3000);
  })(3000);
};

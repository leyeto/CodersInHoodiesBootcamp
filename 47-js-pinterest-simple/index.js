/**
 * Exercise #
 *
 */

let uploadPic = document.querySelector("form");
uploadPic.addEventListener("submit", (event) => {
  event.preventDefault();
  const fileAddress = document.querySelector(".fileName");
  console.log("file address is " + fileAddress.webkitMatchesSelector);
  const image = document.querySelector(".img_wrapper img");

  //   image.src=event.target;
});

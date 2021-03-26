/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */

const popUp = document.querySelector(".popup");
const trigger = document.querySelector(".trigger");
trigger.addEventListener("dblclick", (event) => {
  popUp.classList.add("open");
});

/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */

const image = document.querySelector(".img");
image.addEventListener("dblclick", (event) => {
  image.classList.toggle("zoom");
});

/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 *
 * NOTE: to test please interact with the page, and switch tabs
 */
const playMusic = () => {
  const player = document.querySelector(".player audio");
  window.addEventListener("focus", (event) => {
    player.play();
  });
  window.addEventListener("blur", (event) => {
    player.pause();
  });
};

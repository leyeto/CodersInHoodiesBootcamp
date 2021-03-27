const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

function resetCounter() {
  const resetButton = document.querySelector(`.timer_${timersCount} .reset`);
  resetButton.addEventListener("click", (event) => {
    console.log("Reset pressed for timer" + num);
    count = 0;
  });
}

function addTimer() {
  let timer = document.createElement("div");
  timer.classList.add("timer", `timer_${timersCount}`);

  timer.innerHTML = `<div class="remove"></div>
  <h3>${0}<span>${0}</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>`;
  timersContainerEl.appendChild(timer);
  // const resetButton = document.querySelector(".reset");
  // resetButton.addEventListener("click", (event) => {
  //   count = 0;
  //   console.log("Reset pressed. At event count is " + count);
  // });
}

const addButton = document.querySelector("#new_timer");

addButton.addEventListener("click", (event) => {
  const totalCounters = document.querySelectorAll(".timer").length;
  if (totalCounters > 4) {
    alert(
      "You have 5 timers already, this programme does \nallow anymore sorry :("
    );
  } else {
    timersCount++;
    let num = timersCount;
    addTimer();
    let count = 0;
    let secondsBox = document.querySelector(`.timer_${timersCount} h3`); //add .timer_${num}
    const interval = setInterval(function () {
      resetCounter();
      const seconds = Math.floor(count / 100);
      const milliseconds = count % 100;
      secondsBox.innerHTML = `${seconds}<span>${milliseconds}</span>`;
      console.log("addTimer() Count: " + count);
      count++;
    }, 10);
  }
});

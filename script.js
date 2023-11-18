const timerDisplay = document.querySelector(".time");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null; // track timer, its running or stop

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerHTML = h + ":" + m + ":" + s;
}

// funtion to start & pause
function started() {
  if (timer === null) {
    // If timer is not running
    timer = setInterval(stopwatch, 1000); // Timer is running
    startButton.innerHTML = "Pause";
  } else {
    clearInterval(timer); // stop calling stopwatch()
    timer = null; // To stop timer. Timer is not running
    startButton.innerHTML = "Start";
  }
}
startButton.addEventListener("click", started);

// Function for reset
function resetTimer() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  startButton.innerHTML = "Start";
  timerDisplay.innerHTML = "00:00:00";
}
resetButton.addEventListener("click", resetTimer);

// 3-hour countdown timer
let time = 3 * 60 * 60; // seconds

const timerDiv = document.getElementById("timer");

function updateTimer() {
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  let secs = time % 60;

  timerDiv.innerHTML =
    `FREE JOINING ENDS IN: ${hrs.toString().padStart(2, '0')}:` +
    `${mins.toString().padStart(2, '0')}:` +
    `${secs.toString().padStart(2, '0')}`;

  time--;

  if (time < 0) time = 3 * 3600;  // Restart automatically
}

setInterval(updateTimer, 1000);
updateTimer();

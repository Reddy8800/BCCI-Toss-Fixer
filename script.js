// Countdown Timer (60 seconds loop)
let time = 60;

function updateTimer() {
  document.getElementById("timer").textContent = time + "s";

  time--;
  if (time < 0) {
    time = 60;
  }
}

setInterval(updateTimer, 1000);
updateTimer();

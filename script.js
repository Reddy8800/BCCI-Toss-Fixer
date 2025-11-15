// Countdown Timer (45 seconds loop)
let time = 45;

function updateTimer() {
  document.getElementById("timer").textContent = time + "s";

  time--;
  if (time < 0) {
    time = 45;
  }
}

setInterval(updateTimer, 1000);
updateTimer();

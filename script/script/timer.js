async function reverseTimer(seconds) {
  const timerElement = document.getElementById("timer");

  for (let timeLeft = seconds; timeLeft >= 0; timeLeft--) {
    timerElement.textContent = timeLeft;
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
  }

  timerElement.textContent = "Time's up!";
}

// Call the async function with the desired starting time
reverseTimer(20);

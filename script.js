
const prompts = [...];  // trimmed for brevity
const secrets = [...];
const affirmations = [...];

function setMood(emoji) {
  document.getElementById('mood-result').textContent = `Your current mood: ${emoji}`;
}
function newPrompt() { ... }
function sendSecret() { ... }
function showAffirmation() { ... }
function saveJournal() { ... }

// Timer logic
let timerInterval;
let timeLeft = 0;
function startTimer() {
  const input = document.getElementById('timeInput').value;
  timeLeft = parseInt(input) * 60;
  updateCountdown();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateCountdown();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏳ Time's up! Breathe in peace.");
    }
  }, 1000);
}
function pauseTimer() {
  clearInterval(timerInterval);
}
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 0;
  updateCountdown();
}
function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('countdown').textContent = `${minutes}:${seconds}`;
}

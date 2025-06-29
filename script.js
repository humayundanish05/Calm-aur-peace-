const prompts = [
  "What are you truly feeling right now?",
  "What’s something you keep postponing?",
  "Who do you miss, but haven’t told?",
  "What makes you feel alive?",
  "What are you avoiding emotionally?",
  "When was the last time you felt deeply understood?",
  "What memory brings you peace?",
  "What part of yourself do you struggle to accept?",
  "When did you last feel truly at peace?",
  "What are you most afraid people will see in you?",
  "Who or what are you still holding onto?",
  "What do you need to forgive yourself for?",
  "What’s something you long to say but haven’t found the courage to?",
  "What version of yourself are you trying to grow into?",
  "When do you feel most disconnected from yourself?",
  "What emotion do you tend to hide the most?",
  "What do you crave more of in your life?",
  "What wound are you still healing from?",
  "What truth about yourself have you been avoiding?",
  "When did you last feel truly seen by someone?",
  "What does your inner child need right now?",
  "What would you do differently if you weren’t afraid?"
];

const secrets = [
"Sometimes I cry when no one is around.",
"I still think about someone from years ago.",
"I pretend to be strong but I feel lost.",
"I'm afraid of being forgotten.",
"I write messages I never send."
];

const affirmations = [
"You are more than enough.",
"This moment will pass.",
"You are stronger than you think.",
"It’s okay to feel lost sometimes.",
"You are loved, even when you don’t feel it."
];

function setMood(emoji) {
document.getElementById('mood-result').textContent = Your current mood: ${emoji};
}

function newPrompt() {
const random = prompts[Math.floor(Math.random() * prompts.length)];
document.getElementById('prompt').textContent = random;
}

function sendSecret() {
const userSecret = document.getElementById('userSecret').value.trim();
const random = secrets[Math.floor(Math.random() * secrets.length)];
document.getElementById('randomSecret').textContent = userSecret ? A secret from the void: “${random}” : '';
}

function showAffirmation() {
const random = affirmations[Math.floor(Math.random() * affirmations.length)];
document.getElementById('affirmation').textContent = random;
}

function saveJournal() {
const content = document.getElementById('journalBox').value;
localStorage.setItem('innerverseJournal', content);
document.getElementById('saveStatus').textContent = 'Journal saved locally.';
}

// 🧘 Timer Logic
let timerInterval;
let timeLeft = 0;

function startTimer() {
const input = parseInt(document.getElementById('timeInput').value);
if (isNaN(input) || input <= 0) return;

timeLeft = input * 60;
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
document.getElementById('countdown').textContent = ${minutes}:${seconds};
}

// 🎵 Music Selector Logic
function changeTrack(url) {
const player = document.getElementById("audioPlayer");
if (url) {
player.src = url;
player.play();
}
}

// 🎚 Volume control for direct audio player
window.addEventListener("DOMContentLoaded", function () {
const audio = document.getElementById("audioPlayer");
const slider = document.getElementById("volumeSlider");

// Set initial volume
if (audio && slider) {
audio.volume = parseFloat(slider.value);

// Update volume when slider changes  
slider.addEventListener("input", function () {  
  audio.volume = parseFloat(this.value);  
});

}
});


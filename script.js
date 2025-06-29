const prompts = [
  "اس لمحے تم حقیقتاً کیا محسوس کر رہے ہو؟",
  "کون سا کام ہے جو تم بار بار ٹالتے جا رہے ہو؟",
  "کون ہے جسے تم یاد کرتے ہو، مگر کبھی بتایا نہیں؟",
  "زندگی کا احساس تمہیں کب اور کیسے ہوتا ہے؟",
  "ایسا کیا ہے جس سے تم جذباتی طور پر نظریں چرا رہے ہو؟",
  "آخری بار کب کسی نے تمہیں دل سے سمجھا تھا؟",
  "کون سی یاد تمہیں سکون دیتی ہے؟",
  "اپنے اندر کے کس پہلو کو قبول کرنا تمہارے لیے مشکل ہے؟",
  "کب تم نے دل کی گہرائی سے سکون محسوس کیا؟",
  "تمہیں کس بات کا سب سے زیادہ خوف ہے کہ لوگ جان لیں گے؟",
  "ایسا کون ہے یا کیا ہے جسے تم اب تک تھامے ہوئے ہو؟",
  "خود کو کس بات پر معاف کرنا چاہتے ہو؟",
  "ایسا کیا ہے جو تم کہنا چاہتے ہو مگر ہمت نہیں ہو پاتی؟",
  "تم کس طرح کے انسان بننے کی کوشش کر رہے ہو؟",
  "کس لمحے تم اپنے آپ سے سب سے زیادہ دور محسوس کرتے ہو؟",
  "کون سا جذبہ ہے جو تم ہمیشہ چھپاتے ہو؟",
  "تمہیں اپنی زندگی میں کس چیز کی سب سے زیادہ طلب ہے؟",
  "کون سا زخم ہے جو اب تک نہیں بھرا؟",
  "اپنے بارے میں کون سی سچائی سے تم نظریں چرا رہے ہو؟",
  "آخری بار کب کسی نے تمہیں دل سے محسوس کیا؟",
  "تمہارا اندرونی بچہ اس وقت کیا چاہتا ہے؟",
  "اگر تمہیں خوف نہ ہوتا تو تم کیا مختلف کرتے؟"
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


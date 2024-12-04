// DOM Elements
const mainMenu = document.getElementById('main-menu');
const stopwatchView = document.getElementById('stopwatchView');
const countdownView = document.getElementById('countdownView');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const countdownDisplay = document.getElementById('countdownDisplay');

// Stopwatch Variables
let stopwatchInterval;
let stopwatchTime = 0; // in milliseconds

// Countdown Variables
let countdownInterval;
let countdownTime = 0; // in milliseconds
let countdownInput = '';

// Event Listeners
document.getElementById('stopwatchBtn').addEventListener('click', () => showView(stopwatchView));
document.getElementById('countdownBtn').addEventListener('click', () => showView(countdownView));
document.getElementById('backToMenuFromStopwatch').addEventListener('click', () => showView(mainMenu));
document.getElementById('backToMenuFromCountdown').addEventListener('click', () => showView(mainMenu));
document.getElementById('startStopwatchBtn').addEventListener('click', startStopwatch);
document.getElementById('clearStopwatchBtn').addEventListener('click', clearStopwatch);
document.getElementById('setCountdownBtn').addEventListener('click', setCountdown);
document.getElementById('clearCountdownBtn').addEventListener('click', clearCountdown);

// Show specific view
function showView(view) {
    mainMenu.classList.add('hidden');
    stopwatchView.classList.add('hidden');
    countdownView.classList.add('hidden');
    view.classList.remove('hidden');
}

// Stopwatch Logic
function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime += 10; // increment by 10 milliseconds
        stopwatchDisplay.innerText = formatTime(stopwatchTime);
    }, 10); // update every 10 milliseconds
}

function clearStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchDisplay.innerText = '00:00:00.000';
}

// Countdown Logic
function appendNumber(num) {
    countdownInput += num.toString();
    countdownDisplay.innerText = formatTime(parseInt(countdownInput) * 1000); // convert to milliseconds
}

function setCountdown() {
    if (countdownInput === '') return; // Prevent setting countdown without a number

    clearInterval(countdownInterval);
    countdownTime = parseInt(countdownInput) * 1000; // convert to milliseconds
    countdownInput = '';
    countdownInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
        } else {
            countdownTime -= 10; // decrement by 10 milliseconds
            countdownDisplay.innerText = formatTime(countdownTime);
        }
    }, 10); // update every 10 milliseconds
}

function clearCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    countdownInput = '';
    countdownDisplay.innerText = '00:00:00.000';
}

// Format time in HH:MM:SS.mmm
function formatTime(milliseconds) {
    let hrs = Math.floor(milliseconds / 3600000);
    let mins = Math.floor((milliseconds % 3600000) / 60000);
    let secs = Math.floor((milliseconds % 60000) / 1000);
    let millis = milliseconds % 1000;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
}

// Adding number buttons functionality
document.querySelectorAll('.number-btn').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

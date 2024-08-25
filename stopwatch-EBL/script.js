// Elementos DOM
const app = document.getElementById('app');
const selectionScreen = document.getElementById('selection-screen');
const chronometerScreen = document.getElementById('chronometer-screen');
const countdownScreen = document.getElementById('countdown-screen');
const chronometerDisplay = document.getElementById('chronometer-display');
const countdownDisplay = document.getElementById('countdown-display');
const chronometerStartBtn = document.getElementById('chronometer-start');
const chronometerClearBtn = document.getElementById('chronometer-clear');
const countdownStartBtn = document.getElementById('countdown-start');
const countdownClearBtn = document.getElementById('countdown-clear');
const countdownSetBtn = document.getElementById('countdown-set');
const numberButtons = document.querySelectorAll('.number-btn');
const backButtons = document.querySelectorAll('.back-btn');
const themeToggle = document.getElementById('theme-toggle');

// Variables globales
let chronometerInterval;
let countdownInterval;
let chronometerTime = 0;
let countdownTime = 0;
let isRunning = false;
let isCountdownSet = false;

// Funciones de navegación
document.getElementById('chronometer-btn').addEventListener('click', () => showScreen(chronometerScreen));
document.getElementById('countdown-btn').addEventListener('click', () => showScreen(countdownScreen));
backButtons.forEach(btn => btn.addEventListener('click', () => showScreen(selectionScreen)));

function showScreen(screen) {
    selectionScreen.classList.add('hidden');
    chronometerScreen.classList.add('hidden');
    countdownScreen.classList.add('hidden');
    screen.classList.remove('hidden');
}

// Función para formatear el tiempo
function formatTime(time) {
    const hours = Math.floor(time / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = (time % 1000).toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Lógica del cronómetro
chronometerStartBtn.addEventListener('click', toggleChronometer);
chronometerClearBtn.addEventListener('click', clearChronometer);

function toggleChronometer() {
    if (isRunning) {
        clearInterval(chronometerInterval);
        chronometerStartBtn.textContent = 'Start';
    } else {
        chronometerInterval = setInterval(() => {
            chronometerTime += 10;
            updateDisplay(chronometerDisplay, chronometerTime);
        }, 10);
        chronometerStartBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function clearChronometer() {
    clearInterval(chronometerInterval);
    chronometerTime = 0;
    updateDisplay(chronometerDisplay, chronometerTime);
    chronometerStartBtn.textContent = 'Start';
    isRunning = false;
}

// Lógica de la cuenta regresiva
numberButtons.forEach(btn => btn.addEventListener('click', () => addNumber(btn.textContent)));
countdownSetBtn.addEventListener('click', setCountdown);
countdownStartBtn.addEventListener('click', toggleCountdown);
countdownClearBtn.addEventListener('click', clearCountdown);

function addNumber(num) {
    if (countdownTime < 359999000) { // Límite de 99:59:59
        countdownTime = countdownTime * 10 + parseInt(num) * 1000;
        updateDisplay(countdownDisplay, countdownTime);
    }
}

function setCountdown() {
    if (countdownTime > 0) {
        isCountdownSet = true;
        countdownStartBtn.classList.remove('hidden');
        countdownSetBtn.classList.add('hidden');
        numberButtons.forEach(btn => btn.disabled = true);
    }
}

function toggleCountdown() {
    if (isRunning) {
        clearInterval(countdownInterval);
        countdownStartBtn.textContent = 'Start';
    } else {
        countdownInterval = setInterval(() => {
            if (countdownTime > 0) {
                countdownTime -= 10;
                updateDisplay(countdownDisplay, countdownTime);
            } else {
                clearInterval(countdownInterval);
                countdownFinished();
            }
        }, 10);
        countdownStartBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function clearCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    isCountdownSet = false;
    updateDisplay(countdownDisplay, countdownTime);
    countdownStartBtn.classList.add('hidden');
    countdownSetBtn.classList.remove('hidden');
    numberButtons.forEach(btn => btn.disabled = false);
    isRunning = false;
}

function countdownFinished() {
    alert('¡Tiempo terminado!');
    clearCountdown();
}

function updateDisplay(display, time) {
    display.textContent = formatTime(time);
}

// Cambio de tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
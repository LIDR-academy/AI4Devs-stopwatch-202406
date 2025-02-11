let time = 0;
let interval;
let isRunning = false;

const timeElement = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const clearBtn = document.getElementById('clearBtn');

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function updateTime() {
    time++;
    timeElement.textContent = formatTime(time);
}

function startStopwatch() {
    if (isRunning) {
        clearInterval(interval);
        startBtn.textContent = 'CONTINUE';
        startBtn.classList.remove('pause');
        startBtn.classList.add('continue');
    } else {
        interval = setInterval(updateTime, 1000);
        startBtn.textContent = 'PAUSE';
        startBtn.classList.remove('continue');
        startBtn.classList.add('pause');
    }
    isRunning = !isRunning;
}

function clearStopwatch() {
    clearInterval(interval);
    time = 0;
    timeElement.textContent = formatTime(time);
    startBtn.textContent = 'START';
    startBtn.classList.remove('pause', 'continue');
    startBtn.classList.add('btn-start');
    isRunning = false;
}

startBtn.addEventListener('click', startStopwatch);
clearBtn.addEventListener('click', clearStopwatch);

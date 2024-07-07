let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let isPaused = false;

const timeDisplay = document.getElementById('time-display');
const startPauseBtn = document.getElementById('start-pause-btn');
const clearBtn = document.getElementById('clear-btn');

startPauseBtn.addEventListener('click', startPause);
clearBtn.addEventListener('click', clear);

function startPause() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startPauseBtn.innerHTML = "Pause";
        running = true;
        isPaused = false;
    } else if (!isPaused) {
        clearInterval(tInterval);
        startPauseBtn.innerHTML = "Continue";
        isPaused = true;
    } else {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 1);
        startPauseBtn.innerHTML = "Pause";
        isPaused = false;
    }
}

function clear() {
    clearInterval(tInterval);
    running = false;
    isPaused = false;
    startPauseBtn.innerHTML = "Start";
    timeDisplay.innerHTML = "00:00:00.000";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
    milliseconds = (milliseconds < 10) ? "00" + milliseconds : milliseconds;

    timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

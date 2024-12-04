let stopwatchInterval;
let countdownInterval;
let swTime = 0; // in milliseconds
let cdTime = 0; // in milliseconds

// Stopwatch functions
function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        swTime += 10;
        updateStopwatchDisplay();
    }, 10);
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}

function clearStopwatch() {
    swTime = 0;
    clearInterval(stopwatchInterval);
    updateStopwatchDisplay();
}

// Update stopwatch display
function updateStopwatchDisplay() {
    const hours = Math.floor((swTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((swTime / (1000 * 60)) % 60);
    const seconds = Math.floor((swTime / 1000) % 60);
    const milliseconds = Math.floor((swTime % 1000) / 10);
    
    document.getElementById("sw-hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("sw-minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("sw-seconds").textContent = String(seconds).padStart(2, '0');
    document.getElementById("sw-milliseconds").textContent = String(milliseconds).padStart(3, '0');
}

// Countdown functions
function startCountdown() {
    const hours = parseInt(document.getElementById("cd-hours-input").value) || 0;
    const minutes = parseInt(document.getElementById("cd-minutes-input").value) || 0;
    const seconds = parseInt(document.getElementById("cd-seconds-input").value) || 0;
    
    cdTime = (hours * 3600 + minutes * 60 + seconds) * 1000; // Convert to milliseconds
    countdownInterval = setInterval(() => {
        if (cdTime <= 0) {
            clearInterval(countdownInterval);
        } else {
            cdTime -= 10;
            updateCountdownDisplay();
        }
    }, 10);
}

function pauseCountdown() {
    clearInterval(countdownInterval);
}

function clearCountdown() {
    cdTime = 0;
    clearInterval(countdownInterval);
    updateCountdownDisplay();
    resetCountdownInputs(); // Reset inputs after clearing
}

// Update countdown display
function updateCountdownDisplay() {
    const hours = Math.floor((cdTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((cdTime / (1000 * 60)) % 60);
    const seconds = Math.floor((cdTime / 1000) % 60);
    const milliseconds = Math.floor((cdTime % 1000) / 10);
    
    document.getElementById("cd-hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, '0');
    document.getElementById("cd-milliseconds").textContent = String(milliseconds).padStart(3, '0');
}

// Reset countdown input values
function resetCountdownInputs() {
    document.getElementById("cd-hours-input").value = '';
    document.getElementById("cd-minutes-input").value = '';
    document.getElementById("cd-seconds-input").value = '';
}

// Event listeners
document.getElementById("sw-start").addEventListener("click", startStopwatch);
document.getElementById("sw-pause").addEventListener("click", pauseStopwatch);
document.getElementById("sw-clear").addEventListener("click", clearStopwatch);

document.getElementById("cd-start").addEventListener("click", startCountdown);
document.getElementById("cd-pause").addEventListener("click", pauseCountdown);
document.getElementById("cd-clear").addEventListener("click", clearCountdown);

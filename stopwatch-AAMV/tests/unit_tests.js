// Unit tests for the stopwatch and countdown functionalities

function testStopwatch() {
    let startStopwatchBtn = document.getElementById('start-stopwatch');
    let clearStopwatchBtn = document.getElementById('clear-stopwatch');
    let stopwatchDisplay = document.getElementById('stopwatch-display');

    // Start the stopwatch
    startStopwatchBtn.click();
    setTimeout(() => {
        // Check if the stopwatch is running
        console.assert(stopwatchDisplay.textContent !== '00:00:00:000', 'Stopwatch should be running');
        
        // Clear the stopwatch
        clearStopwatchBtn.click();
        console.assert(stopwatchDisplay.textContent === '00:00:00:000', 'Stopwatch should be cleared');
    }, 1000);
}

function testCountdown() {
    let setCountdownBtn = document.getElementById('set-countdown');
    let startCountdownBtn = document.getElementById('start-countdown');
    let clearCountdownBtn = document.getElementById('clear-countdown');
    let countdownDisplay = document.getElementById('countdown-display');

    // Set the countdown
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 0;
    document.getElementById('seconds').value = 1;
    setCountdownBtn.click();
    console.assert(countdownDisplay.textContent === '0:0:1:000', 'Countdown should be set');

    // Start the countdown
    startCountdownBtn.click();
    setTimeout(() => {
        // Check if the countdown is running
        console.assert(countdownDisplay.textContent !== '0:0:1:000', 'Countdown should be running');
        
        // Clear the countdown
        clearCountdownBtn.click();
        console.assert(countdownDisplay.textContent === '00:00:00:000', 'Countdown should be cleared');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    testStopwatch();
    testCountdown();
});

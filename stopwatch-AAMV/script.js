document.addEventListener('DOMContentLoaded', function() {
    const stopwatchBtn = document.getElementById('stopwatch-btn');
    const countdownBtn = document.getElementById('countdown-btn');
    const homeScreen = document.getElementById('home-screen');
    const stopwatchScreen = document.getElementById('stopwatch-screen');
    const countdownScreen = document.getElementById('countdown-screen');
    const addToPageBtn = document.getElementById('add-to-page');
    const goFullscreenBtn = document.getElementById('go-fullscreen');

    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatchBtn = document.getElementById('start-stopwatch');
    const clearStopwatchBtn = document.getElementById('clear-stopwatch');
    const backStopwatchBtn = document.getElementById('back-stopwatch');

    const countdownDisplay = document.getElementById('countdown-display');
    const countdownSetup = document.getElementById('countdown-setup');
    const setCountdownBtn = document.getElementById('set-countdown');
    const startCountdownBtn = document.getElementById('start-countdown');
    const clearCountdownBtn = document.getElementById('clear-countdown');
    const backCountdownBtn = document.getElementById('back-countdown');

    let stopwatchInterval, countdownInterval;
    let stopwatchRunning = false, countdownRunning = false;
    let countdownTime;

    function showScreen(screen) {
        homeScreen.classList.add('hidden');
        stopwatchScreen.classList.add('hidden');
        countdownScreen.classList.add('hidden');
        screen.classList.remove('hidden');
    }

    stopwatchBtn.addEventListener('click', function() {
        showScreen(stopwatchScreen);
    });

    countdownBtn.addEventListener('click', function() {
        showScreen(countdownScreen);
        countdownSetup.classList.remove('hidden');
        startCountdownBtn.classList.add('hidden');
    });

    startStopwatchBtn.addEventListener('click', function() {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            startStopwatchBtn.textContent = 'Start';
        } else {
            let startTime = Date.now();
            stopwatchInterval = setInterval(() => {
                let elapsedTime = Date.now() - startTime;
                let hours = Math.floor(elapsedTime / 3600000);
                let minutes = Math.floor((elapsedTime % 3600000) / 60000);
                let seconds = Math.floor((elapsedTime % 60000) / 1000);
                let milliseconds = elapsedTime % 1000;
                stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
            }, 1);
            startStopwatchBtn.textContent = 'Pause';
        }
        stopwatchRunning = !stopwatchRunning;
    });

    clearStopwatchBtn.addEventListener('click', function() {
        clearInterval(stopwatchInterval);
        stopwatchDisplay.textContent = '00:00:00:000';
        startStopwatchBtn.textContent = 'Start';
        stopwatchRunning = false;
    });

    backStopwatchBtn.addEventListener('click', function() {
        showScreen(homeScreen);
    });

    setCountdownBtn.addEventListener('click', function() {
        let hours = parseInt(document.getElementById('hours').value) || 0;
        let minutes = parseInt(document.getElementById('minutes').value) || 0;
        let seconds = parseInt(document.getElementById('seconds').value) || 0;
        countdownTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
        countdownDisplay.textContent = `${hours}:${minutes}:${seconds}:000`;
        countdownSetup.classList.add('hidden');
        startCountdownBtn.classList.remove('hidden');
    });

    startCountdownBtn.addEventListener('click', function() {
        if (countdownRunning) {
            clearInterval(countdownInterval);
            startCountdownBtn.textContent = 'Start';
        } else {
            let endTime = Date.now() + countdownTime;
            countdownInterval = setInterval(() => {
                let remainingTime = endTime - Date.now();
                if (remainingTime <= 0) {
                    clearInterval(countdownInterval);
                    countdownDisplay.textContent = '00:00:00:000';
                    startCountdownBtn.textContent = 'Start';
                    countdownRunning = false;
                    return;
                }
                let hours = Math.floor(remainingTime / 3600000);
                let minutes = Math.floor((remainingTime % 3600000) / 60000);
                let seconds = Math.floor((remainingTime % 60000) / 1000);
                let milliseconds = remainingTime % 1000;
                countdownDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
            }, 1);
            startCountdownBtn.textContent = 'Pause';
        }
        countdownRunning = !countdownRunning;
    });

    clearCountdownBtn.addEventListener('click', function() {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = '00:00:00:000';
        countdownSetup.classList.remove('hidden');
        startCountdownBtn.classList.add('hidden');
        countdownRunning = false;
    });

    backCountdownBtn.addEventListener('click', function() {
        showScreen(homeScreen);
    });

    addToPageBtn.addEventListener('click', function() {
        const embedCode = `
            <iframe src="your-stopwatch-url" width="600" height="400"></iframe>
        `;
        prompt('Copy this code to embed the stopwatch on your page:', embedCode);
    });

    goFullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    });
});

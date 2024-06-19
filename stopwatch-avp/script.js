let stopwatchId = 0;

document.getElementById('addStopwatch').addEventListener('click', addStopwatch);

function addStopwatch() {
    const name = document.getElementById('stopwatchName').value.trim();
    const container = document.getElementById('stopwatchContainer');

    const stopwatch = document.createElement('div');
    stopwatch.classList.add('stopwatch');
    stopwatch.id = `stopwatch-${stopwatchId++}`;

    const nameElement = document.createElement('div');
    nameElement.classList.add('stopwatch-name');
    nameElement.textContent = name || `Stopwatch ${stopwatchId}`;

    const display = document.createElement('div');
    display.classList.add('display');
    display.innerHTML = '<span class="minutes">00</span>:<span class="seconds">00</span>:<span class="milliseconds">000</span>';

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('start');
    startButton.addEventListener('click', () => startStop(stopwatch.id, startButton, pauseButton, resumeButton));

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    pauseButton.classList.add('pause');
    pauseButton.addEventListener('click', () => pauseStopwatch(stopwatch.id, startButton, pauseButton, resumeButton));
    pauseButton.style.display = 'none';

    const resumeButton = document.createElement('button');
    resumeButton.textContent = 'Resume';
    resumeButton.classList.add('resume');
    resumeButton.addEventListener('click', () => resumeStopwatch(stopwatch.id, startButton, pauseButton, resumeButton));
    resumeButton.style.display = 'none';

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.classList.add('clear');
    clearButton.addEventListener('click', () => clearStopwatch(stopwatch.id, startButton, pauseButton, resumeButton));

    buttons.append(startButton, pauseButton, resumeButton, clearButton);
    stopwatch.append(nameElement, display, buttons);
    container.appendChild(stopwatch);
}

function startStop(id, startButton, pauseButton, resumeButton) {
    const stopwatch = document.getElementById(id);
    const startTime = new Date().getTime();
    let updatedTime, difference;
    const intervalId = setInterval(updateTime, 1);

    function updateTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const milliseconds = difference % 1000;

        stopwatch.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        stopwatch.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        stopwatch.querySelector('.milliseconds').textContent = milliseconds.toString().padStart(3, '0');
    }

    startButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
    clearButton.style.display = 'inline-block';

    pauseButton.onclick = () => pauseStopwatch(id, startButton, pauseButton, resumeButton, intervalId);
    resumeButton.onclick = () => resumeStopwatch(id, startButton, pauseButton, resumeButton, intervalId, difference);
}

function pauseStopwatch(id, startButton, pauseButton, resumeButton, intervalId) {
    clearInterval(intervalId);
    pauseButton.style.display = 'none';
    resumeButton.style.display = 'inline-block';
}

function resumeStopwatch(id, startButton, pauseButton, resumeButton, intervalId, difference) {
    const startTime = new Date().getTime() - difference;
    const newIntervalId = setInterval(updateTime, 1);

    function updateTime() {
        const updatedTime = new Date().getTime();
        const newDifference = updatedTime - startTime;

        const minutes = Math.floor((newDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((newDifference % (1000 * 60)) / 1000);
        const milliseconds = newDifference % 1000;

        const stopwatch = document.getElementById(id);
        stopwatch.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        stopwatch.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        stopwatch.querySelector('.milliseconds').textContent = milliseconds.toString().padStart(3, '0');
    }

    resumeButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';

    pauseButton.onclick = () => pauseStopwatch(id, startButton, pauseButton, resumeButton, newIntervalId);
}

function clearStopwatch(id, startButton, pauseButton, resumeButton) {
    const stopwatch = document.getElementById(id);
    clearInterval(intervalId);

    stopwatch.querySelector('.minutes').textContent = '00';
    stopwatch.querySelector('.seconds').textContent = '00';
    stopwatch.querySelector('.milliseconds').textContent = '000';

    startButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
    resumeButton.style.display = 'none';
}

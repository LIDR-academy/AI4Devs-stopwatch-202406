$(document).ready(function () {
    let stopwatchInterval;
    let timerInterval;
    let isStopwatchRunning = false;
    let isTimerRunning = false;
    let stopwatchTime = 0;
    let timerTime = 0;

    // Menu buttons
    $("#show-stopwatch").click(function () {
        $("#menu").addClass("d-none");
        $("#stopwatch").removeClass("d-none");
    });

    $("#show-timer").click(function () {
        $("#menu").addClass("d-none");
        $("#timer").removeClass("d-none");
    });

    $("#back-to-menu-stopwatch, #back-to-menu-timer").click(function () {
        $("#stopwatch, #timer").addClass("d-none");
        $("#menu").removeClass("d-none");
        resetStopwatch();
        resetTimer();
    });

    // Stopwatch functionality
    $("#start-stopwatch").click(function () {
        if (isStopwatchRunning) {
            clearInterval(stopwatchInterval);
            $("#start-stopwatch").text("Iniciar");
        } else {
            stopwatchInterval = setInterval(updateStopwatch, 10);
            $("#start-stopwatch").text("Detener");
        }
        isStopwatchRunning = !isStopwatchRunning;
    });

    $("#reset-stopwatch").click(function () {
        resetStopwatch();
    });

    function updateStopwatch() {
        stopwatchTime += 10;
        let milliseconds = parseInt((stopwatchTime % 1000) / 10);
        let seconds = Math.floor((stopwatchTime / 1000) % 60);
        let minutes = Math.floor((stopwatchTime / (1000 * 60)) % 60);
        let hours = Math.floor((stopwatchTime / (1000 * 60 * 60)) % 24);
        $("#stopwatch-display").html(
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)} <small>${pad(milliseconds, 3)}</small>`
        );
    }

    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        isStopwatchRunning = false;
        stopwatchTime = 0;
        $("#start-stopwatch").text("Iniciar");
        $("#stopwatch-display").html("00:00:00 <small>000</small>");
    }

    // Timer functionality
    $(".number-btn").click(function () {
        let number = $(this).text();
        let currentTime = getCurrentTime();
        let newTime = (currentTime * 10 + parseInt(number)) % 1000000;
        setTime(newTime);
    });

    $("#clear-inputs").click(function () {
        setTime(0);
    });

    $("#set-timer").click(function () {
        $("#timer-inputs, .btn-group, #clear-inputs, #set-timer").addClass("d-none");
        $("#timer-set, #back-to-inputs").removeClass("d-none");
        timerTime = getCurrentTime() * 1000;
        updateTimerDisplay();
    });

    $("#back-to-inputs").click(function () {
        $("#timer-set, #back-to-inputs").addClass("d-none");
        $("#timer-inputs, .btn-group, #clear-inputs, #set-timer").removeClass("d-none");
        clearInterval(timerInterval);
        isTimerRunning = false;
        $("#start-timer").text("Iniciar");
    });

    $("#start-timer").click(function () {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            $("#start-timer").text("Iniciar");
        } else {
            timerInterval = setInterval(updateTimer, 10);
            $("#start-timer").text("Detener");
        }
        isTimerRunning = !isTimerRunning;
    });

    $("#reset-timer").click(function () {
        setTime(0);
        $("#back-to-inputs").click();
    });

    function updateTimer() {
        timerTime -= 10;
        if (timerTime <= 0) {
            timerTime = 0;
            clearInterval(timerInterval);
            $("#start-timer").text("Iniciar");
            isTimerRunning = false;
            alert("¡Tiempo terminado!");
        }
        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        let milliseconds = parseInt((timerTime % 1000) / 10);
        let seconds = Math.floor((timerTime / 1000) % 60);
        let minutes = Math.floor((timerTime / (1000 * 60)) % 60);
        let hours = Math.floor((timerTime / (1000 * 60 * 60)) % 24);
        $("#timer-display").html(
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)} <small>${pad(milliseconds, 3)}</small>`
        );
    }

    function getCurrentTime() {
        let hours = parseInt($("#hours").val()) * 3600;
        let minutes = parseInt($("#minutes").val()) * 60;
        let seconds = parseInt($("#seconds").val());
        return hours + minutes + seconds;
    }

    function setTime(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;
        $("#hours").val(pad(hours));
        $("#minutes").val(pad(minutes));
        $("#seconds").val(pad(seconds));
    }

    function pad(num, size = 2) {
        let s = "000" + num;
        return s.substr(s.length - size);
    }
});

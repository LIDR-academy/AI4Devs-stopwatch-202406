$(document).ready(function() {
    let timerInterval;
    let startTime = Date.now();
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let isRunning = false;

    const updateTimer = () => {
        const elapsedTime = Date.now() - startTime;
        milliseconds = Math.floor(elapsedTime % 1000);
        seconds = Math.floor((elapsedTime / 1000) % 60);
        minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const formattedMilliseconds = milliseconds.toString().padStart(3, '0');

        $('.timer').text(formattedTime);
        $('.milliseconds').text(formattedMilliseconds);
    };

    $('#startButton').click(function() {
        if (!isRunning) {
            isRunning = true;
            $(this).text('Stop');
            $('#clearButton').prop('disabled', true); // Bloquea el botón "Clear"
            startTime = Date.now();
            timerInterval = setInterval(updateTimer, 10);
        } else {
            isRunning = false;
            $(this).text('Start');
            clearInterval(timerInterval);
            $('#clearButton').prop('disabled', false); // Desbloquea el botón "Clear"
        }
    });

    $('#clearButton').click(function() {
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;

        $('.timer').text('00:00:00');
        $('.milliseconds').text('000');
        startTime = Date.now(); // Reinicia el tiempo de inicio
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidades para cambiar entre menú, cronómetro y alarma
    const menuBtns = document.querySelectorAll('#cronometroBtn, #alarmaBtn');
    const menu = document.getElementById('menu');
    const cronometro = document.getElementById('cronometro');
    const alarma = document.getElementById('alarma');

    menuBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            menu.classList.add('hidden');
            cronometro.classList.add('hidden');
            alarma.classList.add('hidden');

            if (this.id === 'cronometroBtn') {
                cronometro.classList.remove('hidden');
            } else if (this.id === 'alarmaBtn') {
                alarma.classList.remove('hidden');
            }
        });
    });

    // Variables globales para el cronómetro
    let stopwatchInterval = null;
    let stopwatchRunning = false;
    let startTime = 0;
    let elapsedTime = 0;

    // Variables globales para la alarma
    let alarmInterval = null;
    let alarmRunning = false;
    let alarmStartTime = 0;
    let alarmTime = 0;

    // Función para formatear el tiempo en formato HH:mm:ss.SSS
    function formatTime(milliseconds) {
        let hours = Math.floor(milliseconds / (1000 * 60 * 60));
        let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        let millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        millisecondsFormatted = millisecondsFormatted.toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}.${millisecondsFormatted}`;
    }

    // Función para iniciar o detener el cronómetro
    function startStopwatch() {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            stopwatchRunning = false;
            document.getElementById('startStopBtn').textContent = 'Iniciar';
        } else {
            startTime = Date.now() - elapsedTime;
            stopwatchInterval = setInterval(function () {
                elapsedTime = Date.now() - startTime;
                document.getElementById('cronometroDisplay').textContent = formatTime(elapsedTime);
            }, 10);
            stopwatchRunning = true;
            document.getElementById('startStopBtn').textContent = 'Parar';
        }
    }

    // Función para reiniciar el cronómetro
    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        elapsedTime = 0;
        document.getElementById('cronometroDisplay').textContent = '00:00:00.000';
        document.getElementById('startStopBtn').textContent = 'Iniciar';
    }

    // Función para formatear el tiempo en formato HH:mm:ss.SSS para la alarma
    function formatAlarmTime(milliseconds) {
        let hours = Math.floor(milliseconds / (1000 * 60 * 60));
        let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        let millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        millisecondsFormatted = millisecondsFormatted.toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}.${millisecondsFormatted}`;
    }

    // Función para establecer la alarma con el tiempo introducido
    function setAlarm() {
        let hours = parseInt(document.getElementById('hoursInput').value) || 0;
        let minutes = parseInt(document.getElementById('minutesInput').value) || 0;
        let seconds = parseInt(document.getElementById('secondsInput').value) || 0;

        alarmTime = hours * 3600000 + minutes * 60000 + seconds * 1000;
        alarmStartTime = Date.now();
        document.getElementById('timeInput').classList.add('hidden');
        document.getElementById('alarmControls').classList.remove('hidden');
    }

    // Función para iniciar o pausar la cuenta regresiva de la alarma
    function startPauseAlarm() {
        if (alarmRunning) {
            clearInterval(alarmInterval);
            alarmRunning = false;
            document.getElementById('startPauseAlarm').textContent = 'Continuar';
        } else {
            alarmStartTime = Date.now() - (alarmTime - elapsedTime);
            alarmInterval = setInterval(function () {
                elapsedTime = Date.now() - alarmStartTime;
                let remainingTime = alarmTime - elapsedTime;
                if (remainingTime <= 0) {
                    clearInterval(alarmInterval);
                    alarmRunning = false;
                    document.getElementById('alarmaDisplay').textContent = '00:00:00.000';
                    document.getElementById('startPauseAlarm').textContent = 'Iniciar';
                    alert('¡Alarma completada!');
                } else {
                    document.getElementById('alarmaDisplay').textContent = formatAlarmTime(remainingTime);
                }
            }, 10);
            alarmRunning = true;
            document.getElementById('startPauseAlarm').textContent = 'Pausa';
        }
    }

    // Función para reiniciar la alarma
    function resetAlarm() {
        clearInterval(alarmInterval);
        alarmRunning = false;
        alarmTime = 0;
        elapsedTime = 0;
        document.getElementById('alarmaDisplay').textContent = '00:00:00.000';
        document.getElementById('startPauseAlarm').textContent = 'Iniciar';
        document.getElementById('timeInput').classList.remove('hidden');
        document.getElementById('alarmControls').classList.add('hidden');
    }

    // Event listeners para los botones del cronómetro
    document.getElementById('startStopBtn').addEventListener('click', startStopwatch);
    document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
    document.getElementById('backToMenu').addEventListener('click', function () {
        resetStopwatch();
        document.getElementById('cronometro').classList.add('hidden');
        document.getElementById('menu').classList.remove('hidden');
    });

    // Event listeners para los botones de la alarma
    document.getElementById('setAlarmBtn').addEventListener('click', setAlarm);
    document.getElementById('startPauseAlarm').addEventListener('click', startPauseAlarm);
    document.getElementById('resetAlarmBtn').addEventListener('click', resetAlarm);
    document.getElementById('backToMenuAlarm').addEventListener('click', function () {
        resetAlarm();
        document.getElementById('alarma').classList.add('hidden');
        document.getElementById('menu').classList.remove('hidden');
    });
});

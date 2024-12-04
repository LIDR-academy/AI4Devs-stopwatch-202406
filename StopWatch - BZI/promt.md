Crea un stopwatch en html con funcionalidad en JS y bootstrap, como ejempo el siguiente enlace https://www.online-stopwatch.com/#google_vignette

ChatGPT
Para crear un stopwatch utilizando HTML, JavaScript y Bootstrap, vamos a crear tres archivos: index.html, styles.css y script.js. A continuación, te proporciono el código necesario para cada archivo.

index.html
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container text-center">
        <h1>Stopwatch</h1>
        <div id="display" class="display-4">00:00:00</div>
        <div class="btn-group mt-3" role="group">
            <button id="startBtn" class="btn btn-success">Start</button>
            <button id="stopBtn" class="btn btn-danger">Stop</button>
            <button id="resetBtn" class="btn btn-warning">Reset</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
styles.css
css
Copy code
body {
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#display {
    font-size: 4rem;
    margin-top: 20px;
}

.btn-group {
    margin-top: 20px;
}
script.js
javascript
Copy code
let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTimer, 1000);
        running = true;
    }
});

stopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timerInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    display.innerHTML = '00:00:00';
    difference = 0;
    running = false;
});

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
}
Instrucciones para Implementar:
Crea un archivo llamado index.html y copia el código proporcionado para index.html.
Crea un archivo llamado styles.css en el mismo directorio y copia el código proporcionado para styles.css.
Crea un archivo llamado script.js en el mismo directorio y copia el código proporcionado para script.js.
Abre index.html en tu navegador para ver el stopwatch en acción.
Este stopwatch incluye la funcionalidad básica de iniciar, detener y reiniciar el cronómetro utilizando Bootstrap para el estilo de los botones y la disposición general.


6/6






// Pantallas
const pantallaprincipal = document.getElementById('pantallaprincipal');
const cronometroScreen = document.getElementById('cronometro');
const temporizadorScreen = document.getElementById('temporizador');
const alertaCronometro = document.getElementById('alerta-cronometro');
const alertaTemporizador = document.getElementById('alerta-temporizador');
const beepSound = document.getElementById('beep-sound');

// Botones de navegación
document.getElementById('btn-cronometro').addEventListener('click', () => {
    pantallaprincipal.classList.remove('active');
    cronometroScreen.classList.add('active');
});

document.getElementById('btn-temporizador').addEventListener('click', () => {
    pantallaprincipal.classList.remove('active');
    temporizadorScreen.classList.add('active');
});

document.getElementById('back-cronometro').addEventListener('click', () => {
    cronometroScreen.classList.remove('active');
    pantallaprincipal.classList.add('active');
});

document.getElementById('back-temporizador').addEventListener('click', () => {
    temporizadorScreen.classList.remove('active');
    pantallaprincipal.classList.add('active');
});

// Cronómetro
let cronometroInterval;
let cronometroTime = 0;
let cronometroRunning = false;

document.getElementById('start-cronometro').addEventListener('click', function() {
    if (!cronometroRunning) {
        this.innerHTML = '<i class="fas fa-pause"></i> Stop';
        cronometroRunning = true;
        cronometroInterval = setInterval(() => {
            cronometroTime += 10; // Incremento de 10 milisegundos
            let hours = Math.floor(cronometroTime / 3600000);
            let minutes = Math.floor((cronometroTime % 3600000) / 60000);
            let seconds = Math.floor((cronometroTime % 60000) / 1000);
            let milliseconds = cronometroTime % 1000;
            document.querySelector('#display-cronometro .time').textContent =
                String(hours).padStart(2, '0') + ':' +
                String(minutes).padStart(2, '0') + ':' +
                String(seconds).padStart(2, '0');
            document.querySelector('#display-cronometro .milliseconds').textContent =
                '.' + String(milliseconds).padStart(3, '0');
        }, 10);
    } else {
        this.innerHTML = '<i class="fas fa-play"></i> Start';
        cronometroRunning = false;
        clearInterval(cronometroInterval);
    }
});

document.getElementById('reset-cronometro').addEventListener('click', () => {
    if (!cronometroRunning) {
        alertaCronometro.classList.remove('hidden');
    } else {
        clearInterval(cronometroInterval);
        cronometroTime = 0;
        cronometroRunning = false;
        document.querySelector('#display-cronometro .time').textContent = '00:00:00';
        document.querySelector('#display-cronometro .milliseconds').textContent = '.000';
        document.getElementById('start-cronometro').innerHTML = '<i class="fas fa-play"></i> Start';
    }
});

document.getElementById('cerrar-alerta-cronometro').addEventListener('click', () => {
    alertaCronometro.classList.add('hidden');
});

// Temporizador
let temporizadorTime = "";

document.querySelectorAll('.num-btn').forEach(button => {
    button.addEventListener('click', () => {
        temporizadorTime += button.textContent;
        temporizadorTime = temporizadorTime.slice(-4); // Limitar a 4 dígitos
        document.getElementById('display-temporizador').textContent = temporizadorTime.padStart(4, '0').replace(/(\d{2})(\d{2})/, '$1:$2');
    });
});

let temporizadorInterval;

document.getElementById('start-temporizador').addEventListener('click', function() {
    let timeArray = document.getElementById('display-temporizador').textContent.split(':').map(Number);
    temporizadorTime = timeArray[0] * 60 + timeArray[1];
    
    if (temporizadorTime > 0) {
        this.innerHTML = '<i class="fas fa-pause"></i> Stop';
        temporizadorInterval = setInterval(() => {
            if (temporizadorTime > 0) {
                temporizadorTime--;
                let minutes = Math.floor(temporizadorTime / 60);
                let seconds = temporizadorTime % 60;
                document.getElementById('display-temporizador').textContent =
                    String(minutes).padStart(2, '0') + ':' +
                    String(seconds).padStart(2, '0');
            } else {
                clearInterval(temporizadorInterval);
                beepSound.play();
                alert('¡Tiempo terminado!');
            }
        }, 1000);
    } else {
        alertaTemporizador.classList.remove('hidden');
    }
});

document.getElementById('reset-temporizador').addEventListener('click', () => {
    if (temporizadorTime === "") {
        alertaTemporizador.classList.remove('hidden');
    } else {
        clearInterval(temporizadorInterval);
        temporizadorTime = 0;
        document.getElementById('display-temporizador').textContent = '00:00';
        document.getElementById('start-temporizador').innerHTML = '<i class="fas fa-play"></i> Start';
    }
});

document.getElementById('cerrar-alerta-temporizador').addEventListener('click', () => {
    alertaTemporizador.classList.add('hidden');
});

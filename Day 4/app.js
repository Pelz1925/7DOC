// Variables
let numeroRandom = Math.floor(Math.random() * 10) + 1;
let numeroIntentos = 0;
let message = document.getElementById('message');


// Functions

function verificar() {

    let numero = document.getElementById('numero').value;
    let clear = document.getElementById('numero').value = '';

    numeroIntentos++;

    clear;

    if (numero == numeroRandom) {
        message.innerHTML = `¡Felicidades! Has adivinado, el número era ${numeroRandom} en ${numeroIntentos} intentos`;
        document.getElementById('numero').disabled = true;
        document.getElementById('again').disabled = false;
        document.getElementById('check').disabled = true;  
    } else if (numero < numeroRandom) {
        message.innerHTML = `El número es mayor`;
    } else {
        message.innerHTML = `El número es menor`;
    };

    if (numeroIntentos == 3 && numero != numeroRandom) {
        message.innerHTML = `¡Lo siento! Has perdido, el número era ${numeroRandom}`;
        document.getElementById('numero').disabled = true;
        document.getElementById('again').disabled = false;
        document.getElementById('check').disabled = true;
    }
}

function reiniciar() {
    numeroRandom = Math.floor(Math.random() * 10) + 1;
    numeroIntentos = 0;
    message.innerHTML = '';
    document.getElementById('numero').disabled = false;
    document.getElementById('again').disabled = true;
    document.getElementById('check').disabled = false;
}
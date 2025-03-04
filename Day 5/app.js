// Functions

function addlacteos() {
    let lacteos = document.getElementById('lacteos').value;
    let lacteosList = document.getElementById('tablelacteos');
    let insertRow = document.createElement('tr');
    let insertCell = document.createElement('td');
    insertCell.innerHTML = lacteos;
    let lacteosCell = insertRow.appendChild(insertCell);
    let lacteosRow = lacteosList.appendChild(insertRow);
    let lacteosData = lacteosRow.appendChild(lacteosCell);
    lacteosList.appendChild(lacteosData);
    document.getElementById('lacteos').value = '';
}

function addfrutas() {
    let frutas = document.getElementById('frutas').value;
    let frutasList = document.getElementById('tablefrutas');
    let insertRow = document.createElement('tr');
    let insertCell = document.createElement('td');
    insertCell.innerHTML = frutas;
    let frutasCell = insertRow.appendChild(insertCell);
    let frutasRow = frutasList.appendChild(insertRow);
    let frutasData = frutasRow.appendChild(frutasCell);
    frutasList.appendChild(frutasData);
    document.getElementById('frutas').value = '';
}

function addcongelados(){
    let congelados = document.getElementById('congelados').value;
    let congeladosList = document.getElementById('tablecongelados');
    let insertRow = document.createElement('tr');
    let insertCell = document.createElement('td');
    insertCell.innerHTML = congelados;
    let congeladosCell = insertRow.appendChild(insertCell);
    let congeladosRow = congeladosList.appendChild(insertRow);
    let congeladosData = congeladosRow.appendChild(congeladosCell);
    congeladosList.appendChild(congeladosData);
    document.getElementById('congelados').value = '';
}

function addverduras(){
    let verduras = document.getElementById('verduras').value;
    let verdurasList = document.getElementById('tableverduras');
    let insertRow = document.createElement('tr');
    let insertCell = document.createElement('td');
    insertCell.innerHTML = verduras;
    let verdurasCell = insertRow.appendChild(insertCell);
    let verdurasRow = verdurasList.appendChild(insertRow);
    let verdurasData = verdurasRow.appendChild(verdurasCell);
    verdurasList.appendChild(verdurasData);
    document.getElementById('verduras').value = '';
}

function addgolosinas(){
    let golosinas = document.getElementById('golosinas').value;
    let golosinasList = document.getElementById('tablegolosinas');
    let insertRow = document.createElement('tr');
    let insertCell = document.createElement('td');
    insertCell.innerHTML = golosinas;
    let golosinasCell = insertRow.appendChild(insertCell);
    let golosinasRow = golosinasList.appendChild(insertRow);
    let golosinasData = golosinasRow.appendChild(golosinasCell);
    golosinasList.appendChild(golosinasData);
    document.getElementById('golosinas').value = '';
}
// Variables
let listadatos = [];

// Funciones

function savename() {
    if (document.getElementById("name").value == "") {
        alert("Por favor ingrese un nombre");
        return;
    }else{
        let name = document.getElementById("name").value;
        listadatos.push(name);
        console.log(listadatos);
        document.getElementById("name").value = "";
    }
};
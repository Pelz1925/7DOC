// Definiendo funcion

function savename() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let language = document.getElementById('language').value;

    let clearname = document.getElementById('name').value="";
    let clearlastname = document.getElementById('lastname').value="";
    let clearage = document.getElementById('age').value="";
    let clearlanguage = document.getElementById('language').value="";

    let message = ('Hola '+name+' '+lastname+', tienes '+age+' años y estas aprendiendo '+language);

    let create_parragraph = document.createElement('p');
    let insert_parragraph = document.getElementById('form');

    //     create_parragraph.innerHTML = message;

    //     insert_parragraph.appendChild(create_parragraph);

    //     document.getElementById('name').disabled=true;
    //     document.getElementById('lastname').disabled=true;
    //     document.getElementById('age').disabled=true;
    //     document.getElementById('language').disabled=true;

    alert(message);
}

// function reset() {
//     document.getElementById('name').disabled=false;
//     document.getElementById('lastname').disabled=false;
//     document.getElementById('age').disabled=false;
//     document.getElementById('language').disabled=false;
// }
// Varibles
let listafront = [];
let listaback = [];

// Funciones

function save() {
    let name = document.getElementById('name').value;
    document.getElementById('name').value = '';

    alert('Hola ' + name + ' bienvenido!');
    alert('Queremos hacerte unas preguntas para conocerte mejor');

    let stack = prompt('¿Quieres aprender Frontend o Backend? Ingresa el numero de la opción que deseas:\n1. Frontend\n2. Backend');

    if (stack == 1) {

        alert('Excelente elección Frontend');

        let tecnofront = prompt('¿Qué tecnología de Frontend te gustaría aprender?\n1. React\n2. Vue');
        let contfront = prompt('¿Te gustaria aprender otra tecnología de Frontend?\n1. Si\n2. No');

        if (contfront == 1) {

            let tecnofront2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n1. Angular\n2. Svelte\n3. Next\n4. Gatsby\n5. Nuxt\n6. Ninguna');

            while (tecnofront2 != 6) {
                listafront.push(tecnofront2);
                tecnofront2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n1. Angular\n2. Svelte\n3. Next\n4. Gatsby\n5. Nuxt\n6. Ninguna\nHasta ahora has elegido: ' + listafront + '\nSi deseas terminar de elegir presiona 6');
            }

        };

    } else if (stack == 2) {

        alert('Excelente elección Backend');

        let tecnoback = prompt('¿Qué tecnología de Backend te gustaría aprender?\n1. C#\n2. Java');
        let contback = prompt('¿Te gustaria aprender otra tecnología de Backend?\n1. Si\n2. No');

        if (contback == 1) {

            let tecnoback2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n1. Node\n2. Python\n3. Ruby\n4. PHP\n5. Ninguna');

            while (tecnoback2 != 5) {
                listaback.push(tecnoback2);
                tecnoback2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n1. Node\n2. Python\n3. Ruby\n4. PHP\n5. Ninguna\nHasta ahora has elegido: ' + listaback + '\nSi deseas terminar de elegir presiona 5');
            }

        };

    };
    
    alert('Gracias por responder las preguntas');
};
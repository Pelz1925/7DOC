function save() {
    let name = document.getElementById('name').value;
    document.getElementById('name').value = '';

    alert('Hola ' + name + ' bienvenido!');
    alert('Queremos hacerte unas preguntas para conocerte mejor');

    let stack = prompt('¿Quieres aprender Frontend o Backend? Ingresa el numero de la opción que deseas:\n(1) Frontend\n(2) Backend');

    if (stack === '1') {
        alert('Excelente elección Frontend');
        let listafront = [];//variables locales
        let tecnofront = prompt('¿Qué tecnología de Frontend te gustaría aprender?\n(1) React\n(2) Vue');

        if (tecnofront === '1') {
          listafront.push('React');
        }else if(tecnofront === '2'){
          listafront.push('Vue');
        }

        let contfront = prompt('¿Te gustaria aprender otra tecnología de Frontend?\n(1) Si\n(2) No');

        if (contfront === '1') {
            let tecnofront2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n(1) Angular\n(2) Svelte\n(3) Next\n(4) Gatsby\n(5) Nuxt\n(6) Ninguna');

            while (tecnofront2 !== '6') {
                switch (tecnofront2) {
                    case '1':
                        listafront.push('Angular');
                        break;
                    case '2':
                        listafront.push('Svelte');
                        break;
                    case '3':
                        listafront.push('Next');
                        break;
                    case '4':
                        listafront.push('Gatsby');
                        break;
                    case '5':
                        listafront.push('Nuxt');
                        break;
                    default:
                        alert('Opción inválida');
                }
                tecnofront2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n(1) Angular\n(2) Svelte\n(3) Next\n(4) Gatsby\n(5) Nuxt\n(6) Ninguna\nHasta ahora has elegido: ' + listafront.join(', ') + '\nSi deseas terminar de elegir presiona 6');
            }
        }
    } else if (stack === '2') {
        alert('Excelente elección Backend');
        let listaback = [];//variables locales
        let tecnoback = prompt('¿Qué tecnología de Backend te gustaría aprender?\n(1) C#\n(2) Java');

        if (tecnoback === '1') {
          listaback.push('C#');
        }else if(tecnoback === '2'){
          listaback.push('Java');
        }

        let contback = prompt('¿Te gustaria aprender otra tecnología de Backend?\n(1) Si\n(2) No');

        if (contback === '1') {
            let tecnoback2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n(1) Node\n(2) Python\n(3) Ruby\n(4) PHP\n(5) Ninguna');

            while (tecnoback2 !== '5') {
                switch (tecnoback2) {
                    case '1':
                        listaback.push('Node');
                        break;
                    case '2':
                        listaback.push('Python');
                        break;
                    case '3':
                        listaback.push('Ruby');
                        break;
                    case '4':
                        listaback.push('PHP');
                        break;
                    default:
                        alert('Opción inválida');
                }
                tecnoback2 = prompt('¿Cual de las siguientes tecnologias te gustaria aprender?\n(1) Node\n(2) Python\n(3) Ruby\n(4) PHP\n(5) Ninguna\nHasta ahora has elegido: ' + listaback.join(', ') + '\nSi deseas terminar de elegir presiona 5');
            }
        }
    }
    alert('Gracias por responder las preguntas');
}
// SIMULACRO de ayuda al RETO 1

function calificar() {
    // Solicitud de información por pantalla con PROMPT
    var notaNumerica = prompt('Introduce la nota numérica:');

    // El comando SWITCH permite múltiples comparaciones en función de un valor/variable determinado
    switch (true) {
        // Primero controlamos los márgenes del tramo (menor que 0 y mayor que 10)
        case notaNumerica<0 || notaNumerica>10 :
            alert('Nota errónea. Vuelva a intentarlo');
            break;
        case notaNumerica >= 0 && notaNumerica < 5:
            alert('Suspendido');
            break;
        case notaNumerica >= 5 && notaNumerica < 7:
            alert('Aprobado');
            break;
        case notaNumerica >= 7 && notaNumerica < 9:
            alert('Notable');
            break;
        case notaNumerica >= 9:
            alert('Excelente');
            break;
    }
}
// SIMULACRO de ayuda al RETO 1

function calificar() {
    // Solicitud de información por pantalla con PROMPT
    var notaNumerica = prompt('Introduce la nota numérica:');

    // El comando SWITCH permite múltiples comparaciones en función de un valor/variable determinado
    switch (true) {
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
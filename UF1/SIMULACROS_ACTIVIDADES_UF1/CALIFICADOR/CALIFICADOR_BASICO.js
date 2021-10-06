// Solicitud de información por pantalla con PROMPT

var notaNumerica = prompt('Introduce la nota numérica:');

// Primero controlamos los márgenes del tramo (menor que 0 y mayor que 10)
if (notaNumerica<0 || notaNumerica>10) {
    alert('Nota errónea. Vuelva a intentarlo');
} else if (notaNumerica >= 0 && notaNumerica < 5) {
    alert('Suspendido');
} else if (notaNumerica >= 5 && notaNumerica < 7) {
    alert('Aprobado');
} else if (notaNumerica >= 7 && notaNumerica < 9) {
    alert('Notable');
} else {
    alert('Excelente');
}

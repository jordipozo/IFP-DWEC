//Ejercicio cadenas
var cadena1 ="Jordi";
var cadena2 = "Pozo Catà";
var numero1 = 50;
var numero2 = 1900;

alert('Esta frase contiene \'comillas\' simples');
alert(cadena1+'\n'+cadena2);
alert(numero1+numero2);
alert(cadena1+cadena2+numero1+numero2);
//------
// Ejercicio Edades

var edad = prompt ('Introduce tu edad: ');
if (edad > 0 && edad<= 12) alert('Eres un niño');
if (edad > 12 && edad<= 26) alert('Eres un joven');
if (edad > 26 && edad<= 60) alert('Eres un adulto');
if (edad > 60) alert('Estás jubilado');


//Control Parental 1
respuesta =true;
while (respuesta === true) {
    var superman = prompt('¿Cuál es el apellido del actor protagonista de "Superman"(1978)?');
    if (superman === 'Reeve') {
            alert('Correcto');
            respuesta = false;
        } else {
            alert('Error. Inténtelo de nuevo');
            respuesta = true;
            }
}
// -------------

//Control Parental 2
respuesta =true;
while (respuesta === true) {
    var superman = prompt('¿Cuál es el nombre del actor protagonista de "Superman"(1978)?');
    var actor = superman.split(' ');
    if (actor.length > 1) {
        if (actor[0] === 'Christopher' && actor[1] === 'Reeve') {
            alert('Correcto');
            respuesta = false;
        } else {
            if (actor[0] != 'Christopher' || actor[1] != 'Reeve') {
                alert('Error. Inténtelo de nuevo');
                respuesta = true;
            }
        }
    }
    else if (actor.length == 1){
        if (actor[0]=='Christopher'){
            alert('Te falta el apellido');
            respuesta=true;
        } else if (actor[0]=='Reeve'){
            alert('Te falta el nombre.');
            respuesta=true;
        }
    }
}
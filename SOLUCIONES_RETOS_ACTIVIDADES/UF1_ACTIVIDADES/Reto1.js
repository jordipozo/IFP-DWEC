//Calculadora IMC
var peso = prompt('Introduce tu peso en Kgs.:');
var altura = prompt('Introduce tu altura en cm.: ');
altura = (altura/100);
var imc = peso/(altura*altura);

if (imc < 16) alert('Infrapeso (delgadez severa)');
if (imc>= 16 && imc < 17) alert('Infrapeso (delgadez moderada)');
if (imc>= 17 && imc < 18.5) alert('Infrapeso (delgadez aceptable)');
if (imc>= 18.5 && imc < 25) alert('Peso normal');
if (imc>= 25 && imc < 30) alert('Sobrepeso');
if (imc>= 30 && imc < 35) alert('Obeso (Tipo I)');
if (imc>= 35 && imc < 40) alert('Obeso (Tipo II)');
if (imc >= 40) alert('Obeso (Tipo III)');
//----

//Calculadora FCM

var edad = prompt('Introduce tu edad: ');
var sexo = prompt('Introduce tu sexo (M o H): ');

if (sexo === 'H') {
    fcm = 220 - edad;
}else{
    fcm = 225 -edad;
}
// Calculamos los intervalos
alert('Tu FCM es de: '+fcm+'\n'+'Zona de recuperación: de '+ Math.trunc(fcm*0.6)+' a ' + Math.trunc(fcm*0.7) + '\n'
    +'Zona de aeróbica: de '+ Math.trunc(fcm*0.7)+' a ' + Math.trunc(fcm*0.8) + '\n'
    +'Zona de anaeróbica: de '+ Math.trunc(fcm*0.8)+' a ' + Math.trunc(fcm*0.9) + '\n'
    +'Línea roja: de '+ Math.trunc(fcm*0.9)+' a ' + fcm );
// No es necesario usar Math.trunc pero es una función que permite quitar los decimales y, dado
// que estamos hablando de frecuencia cardíaca podemos prescindir de ellos.




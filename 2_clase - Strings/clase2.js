var nombre = 'Anderson', apellido = 'Rodriguez';
// Convirtiendo texto a MAYÚSCULAS
var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas);

// Convirtiendo texto a MINÚSCULAS
var nombreEnMinusculas = nombre.toLowerCase();
console.log(nombreEnMinusculas);

// Obteniendo primera letra de un texto
var primeraLetraDelNombre = nombre.charAt(0); // Donde el cero es la posición 1 del arreglo
console.log(primeraLetraDelNombre);

// Obteniendo la cantidad de letras de un texto
var cantidadDeLetrasDelNombre = nombre.length
console.log(cantidadDeLetrasDelNombre); // 8

// Interpolando variables ES6
// Permite insertar el valor de la variable interpolada, como parte del string.
// Solo funciona usando comillas invertidas ``
var nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto); // Anderson Rodriguez

// Dentro de las llaves {} en la interpolación, se puede ejecutar código JS sin problemas.
console.log(`${ nombre.toUpperCase() }`); //ANDERSON


// Obteniendo subStrings o pedazos de un texto
// La función substr() recibe dos parámetros, el primero define desde que caracter tomar el substring
// y el segundo parámetro define la cantidad de caracteres a tomar.
var primerasTresLetrasDelNombre = nombre.substr(0, 3);
console.log(primerasTresLetrasDelNombre); // And

// Última letra de un texto
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);
console.log(ultimaLetraDelNombre); // n
var x = 4, y = '4';

// Compara solo los valores de las variables.
console.log( x == y ); // True

// Compara no solo los valores si no también compara los tipos de variables.
console.log( x === y ); // False

var persona = {
    nombre: 'Anderson'
}

var otraPersona = {
    nombre: 'Anderson'
}

// Al comparar objetos, JS compara el apuntador de cada objeto, si son el mismo genera true o false 
// en el otro caso.
console.log( persona == otraPersona ); // False

// Con esto hago que las dos variables, apunten al mismo objeto "persona".
var otraPersona = persona; // True

// Siempre usar === para compara en JS.

// Al modificar alguno de los atributos de dos variables que apuntan al mismo objeto en memoria.
// las dos variables se verán modificadas.
otraPersona.nombre = 'Pepe';
console.log(persona.nombre); // Pepe
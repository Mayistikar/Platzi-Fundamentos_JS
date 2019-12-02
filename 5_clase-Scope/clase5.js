// Esta variable está definida a nivel global, por ende se puede usar desde cualquier función
// en este Script.
var nombre = 'Anderson';

// Dado que la lógica de esta función llama una variable de tipo global y edita su valor
// se dice que la variable tiene un side effect.
// en la mayoría de los casos es preferible no modificar variables globales.
function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase(nombre);
    console.log(nombre);
}
imprimirNombreEnMayusculas();

// Para evitar el side effect una buena forma es creando un parámetro para ello.
function imprimirNombreEnMayusculasN(n){
    n = n.toUpperCase(); // Esta variable usada como parámetro, solo está definida dentro de la función
    console.log(n);
}
// Al pasar la variable global "nombre" se está creando una copia del valor de la variable nombre
// sobre la variable interna "n" de la función, evitando de ese modo el side effect.
imprimirNombreEnMayusculasN(nombre);
console.log(n); // Imprime undefined por que "n" no existe fuera de la función imprimirNombreEnMayusculasN

// Toda variable que no esté definida dentro de un objeto local en otras palabras se encuentre por fuera
// de cualquier SCOPE, estará definida en el objeto global, que para el caso del navegador es el
// objeto global WINDOW
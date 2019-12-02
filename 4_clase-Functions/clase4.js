var nombre = 'Anderson', edad = 30;

// Permite crear una función que encapsula una lógica o funcionalidad dentro de si misma
// En este caso imprime el nombre y la edad.
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`);
}

// De esta forma ejecutamos la función y de paso toda la lógica contenida en si misma.
imprimirEdad();

// Definiendo parámetros para las funciones.
function imprimirEdad2(n, e) {
    console.log(`${n} tiene ${e} años`);
}

// Pasándo parámetros a las funciones.
imprimirEdad2(nombre, edad);
imprimirEdad2('Andrés', 28);

// Javascript es un lenguaje interpretado al que no le importa si las variables están definidas
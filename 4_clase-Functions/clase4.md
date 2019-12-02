# Functions
Trabajando con funciones.

## Definiendo funciones
Permite crear una función que encapsula una lógica o funcionalidad dentro de si misma
En este ejemplo imprime el nombre y la edad.
```Javascript
var nombre = 'Anderson', edad = 30;

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`);
}
```

## Ejecutando funciones definidas
De esta forma ejecutamos la función y de paso toda la lógica contenida en si misma.
```Javascript
imprimirEdad();
```

## Definiendo funciones con parámetros
De esta forma se incluyen parámetros para las funciones.
```Javascript
function imprimirEdad2(n, e) {
    console.log(`${n} tiene ${e} años`);
}
```

## LLamando funciones definidas con parámetros
Pasándo parámetros a las funciones, en el momento de ejecución.
```Javascript
imprimirEdad2(nombre, edad);
imprimirEdad2('Andrés', 28);
```

### Notas:
- Javascript es un lenguaje interpretado al que no le importa si las variables están definidas.
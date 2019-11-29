# STRINGS
Trabajando con cadenas de texto "Strings"

## Convirtiendo texto a mayúsculas / minúsculas
```Javascript
var nombre = 'Anderson', apellido = 'Rodriguez';

// Convirtiendo texto a MAYÚSCULAS
var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas); // ANDERSON

// Convirtiendo texto a MINÚSCULAS
var nombreEnMinusculas = nombre.toLowerCase();
console.log(nombreEnMinusculas); // anderson
```

## Obteniendo letras del texto
```Javascript
// Obteniendo primera letra del nombre
var primeraLetraDelNombre = nombre.charAt(0); // Donde el cero es la posición 1 del arreglo
console.log(primeraLetraDelNombre); //A
```

## Obteniendo la cantidad de letras de un texto
```Javascript
var cantidadDeLetrasDelNombre = nombre.length
console.log(cantidadDeLetrasDelNombre); // 8
```

## Interpolando variables y código JS
Interpolar variables viene del ES6- Permite insertar el valor de la variable o las variables interpoladas, como parte del string. Solo funciona usando comillas invertidas **``**.

Dentro de las llaves {} en la interpolación, se puede ejecutar código JS sin problemas.
```Javascript
var nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto); // Anderson Rodriguez
console.log(`${ nombre.toUpperCase() }`);
```

## Obteniendo subStrings o pedazos de un texto
La función substr(a, b) recibe dos parámetros **a** y b, el primer parámetro **a** define desde que caracter tomar el substring y el segundo parámetro **b** define la cantidad de caracteres a tomar.
**Ejm:**
```Javascript
var primerasTresLetrasDelNombre = nombre.substr(0, 3);
console.log(primerasTresLetrasDelNombre); // And
```

## Obteniendo la última letra de un texto
```Javascript
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);
console.log(ultimaLetraDelNombre); // n
```
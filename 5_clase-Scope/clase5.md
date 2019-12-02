# Scope
Determina el alcance de las variables y sus valores.

## Variables globales
Esta variable está definida a nivel global, por ende se puede usar desde cualquier función en este Script.
```Javascript
var nombre = 'Anderson';
```

## Funciones con side effect
Dado que la lógica de la siguiente función llama una variable de tipo global y edita su valor se dice que la variable tiene un **side effect**. En la mayoría de los casos es preferible no modificar variables globales.
```Javascript
function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase(nombre);
    console.log(nombre);
}
imprimirNombreEnMayusculas();
```
Para evitar el side effect una buena forma es creando un parámetro para ello.
```Javascript
function imprimirNombreEnMayusculasN(n){
    n = n.toUpperCase(); // Esta variable usada como parámetro, solo está definida dentro de la función
    console.log(n);
}
```
Al pasar la variable global **"nombre"** se está creando una copia del valor de la variable **"nombre"** sobre la variable interna **"n"** de la función, evitando de ese modo el side effect.
```Javascript
imprimirNombreEnMayusculasN(nombre);
console.log(n); // Imprime undefined por que "n" no existe fuera de la función imprimirNombreEnMayusculasN
```

### Notas:
- Toda variable que no esté definida dentro de un objeto local en otras palabras se encuentre por fuera de cualquier SCOPE, estará definida en el objeto global, que para el caso del navegador es el **objeto global WINDOW.**
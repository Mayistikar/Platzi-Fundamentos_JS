# Objects
Definiendo un objeto en JS. Cada objeto cuenta con atributos de modo que cada atributo se describe como clave y valor.
```Javascript
var anderson = {
    nombre: 'Anderson', // "nombre" sería la clave y "Anderson" el valor.
    apellido: 'Rodriguez',
    edad: 30
}

function imprimirNombreEnMayusculas(nombre) {
    console.log(nombre.toUpperCase());
}
```
Para acceder a los valores de cada objeto, se debe llamar al objeto así: objeto.clave en este caso anderson.nombre
```Javascript
imprimirNombreEnMayusculas(anderson.nombre); // Imprime ANDERSON
```

## Enviando objetos como argumentos.
Una función tambien puede recibir un objeto como parámetro.
```Javascript
function imprimirNombreEnMayusculasObj(objeto){
    console.log(objeto.nombre.toUpperCase());
}
imprimirNombreEnMayusculasObj(anderson); // Imprime el valor de la clave nombre del objeto anderson

// Se puede crear un objeto al mismo tiempo que se pasa como argumento en una función
imprimirNombreEnMayusculasObj({ nombre: 'Anderson' }); // Imprime el valor "ANDERSON" de la clave nombre del nuevo objeto
```
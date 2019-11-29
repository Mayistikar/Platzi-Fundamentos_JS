# VARIABLES
Definiendo y usando variables.

## Imprimiendo mensajes
```Javascript
console.log('Hola Mundo JS');
```

## Definiendo variables
```Javascript
var nombre;
nombre = 'Anderson';

// Otra forma de definir variables
var apellido = 'Rodriguez';

// Otra forma de definir variables
var nombre2 = 'Carlos', apellido2 = 'Cerón';
```

## Imprimiendo variables
```Javascript
console.log('Hola ' + nombre);
// Concatenando texto
console.log('Hola ' + nombre + ' ' + apellido);
console.log('Hola ' + nombre2 + ' ' + apellido2);
```

## Lenguaje débilmente tipado
```Javascript
// Una variable puede recibir valores de distinto tipo.
var edad = 22;
console.log('Edad: ', edad);
edad = 'gato';
console.log('Edad con un valor de otro tipo: ', edad);
```
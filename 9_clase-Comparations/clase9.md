# Comparations
Comparar variables en JS tiene detalles particulares.

## Comparando Variables.

```Javascript
var x = 4, y = '4';

// Compara solo los valores de las variables.
console.log( x == y ); // True

// Compara no solo los valores si no también compara los tipos de variables.
console.log( x === y ); // False
```

## Comparando Objetos.
Al comparar objetos, JS compara el apuntador de cada objeto, si son el mismo genera true o false en el otro caso.
```Javascript
var persona = {
    nombre: 'Anderson'
}

var otraPersona = {
    nombre: 'Anderson'
}

console.log( persona == otraPersona ); // False
console.log( persona === otraPersona ); // False
```

Con esto hago que las dos variables, apunten al mismo objeto "persona".
```Javascript
var otraPersona = persona; // True
```

Al modificar alguno de los atributos de dos variables que apuntan al mismo objeto en memoria. las dos variables se verán modificadas.
```Javascript
otraPersona.nombre = 'Pepe';
console.log(persona.nombre); // Pepe
```

### Notas:
- Siempre usar **===** para compara en JS.
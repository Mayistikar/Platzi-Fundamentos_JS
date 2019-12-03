# Parameters by Reference or by Value

Los objetos pasados como parámetros, se pasan por referencia, lo que significa que los valores del objeto modificados, permanecen modificados aún por fuera de la función.

```Javascript
let anderson = {
    nombre: "Anderson",
    apellido: "Rodriguez",
    edad: 30
}

function cumpleanosPorReferencia(persona) {
    persona.edad += 1; // Esto modifica el valor original del objeto persona.
}

cumpleanosPorReferencia(anderson); // El objeto original anderson modificaría su edad en 1.
```

Para evitar que el objeto pasado por referencia se modifique, podemos hacer que la función cree un nuevo objeto, con los mismo valores del objeto original.

```Javascript
function cumpleanosClonandoObjeto(persona){
    return {
        ...persona,
        edad: persona.edad += 1
    }
}
```

En cambio los parámetros pasados por valor, no generan una modificación exterior, por lo que no son objetos.
```Javascript
function cumpleanosPorValor(edad) {
    edad += 1;
}
cumpleanosPorValor(anderson.edad); // No modifica el valor original del objeto, si no que genera otro valor.
```
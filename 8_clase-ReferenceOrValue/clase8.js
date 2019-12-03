let anderson = {
    nombre: "Anderson",
    apellido: "Rodriguez",
    edad: 30
}

// Los objetos pasados como parámetros, se pasan por referencia, lo que significa que los valores
// del objeto modificados, permanecen modificados aún por fuera de la función.
function cumpleanosPorReferencia(persona) {
    persona.edad += 1;
}

// Para evitar que el objeto pasado por referencia, se modifique, podemos hacer que la funcion, cree
// un nuevo objeto, con los mismo valores del objeto original.
function cumpleanosClonandoObjeto(persona){
    return {
        ...persona,
        edad: persona.edad += 1
    }
}

// En cambio los parámetros pasados por valor, no generan una modificación exterior, por lo que no son
// objetos.
function cumpleanosPorValor(edad) {
    edad += 1;
}
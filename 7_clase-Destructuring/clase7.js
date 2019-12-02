// Destructuring es una forma de obtener los atributos de un
// objeto y crear una variable con la misma clave asignada del
// atributo todo al mismo tiempo.

// Si el objeto anderson tiene un atributo con clave nombre
// al hacer un destructuring, se puede crear una variable
// con la clave nombre del objeto anderson y el mismo valor.

var anderson = {
    nombre: 'Anderson',
    apellido: 'Rodriguez',
    edad: 30
}

var dario = {
    nombre: 'Dario',
    apellido: 'Arteaga',
    edad: 28
}

function imprimirNombreEdad(persona){
    var { nombre, apellido, edad } = persona; // Con esto creo tres variables con cada uno de las claves de los tres atributos del objeto persona.
    console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
}

imprimirNombreEdad(anderson);
imprimirNombreEdad(dario);

// Solo se puede hacer destructuring si el objeto tratado tiene si o si los atributos con las claves definidas en medio de los "{}";
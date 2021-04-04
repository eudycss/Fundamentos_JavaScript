
/* var nombre = 'Sebas' // Variable global */
// Objeto
/* var sacha = {
    nombre: 'Sebas',  // Clave : Valor
    apellido:' Cabascango',
    edad: 26
}

var fredy={
    nombre: 'Fredy',  // Clave : Valor
    apellido:' Salazar',
    edad: 29
}
function imprimirNombreEnMayuscula(persona){
    // var nombre = persona.nombre
    var {nombre}=persona
    console.log(nombre.toLocaleUpperCase())
}

imprimirNombreEnMayuscula(sacha)
imprimirNombreEnMayuscula(fredy) */
/* imprimirNombreEnMayuscula({nombre: 'Pepito'})
imprimirNombreEnMayuscula({apellido: 'Salazar'})  */// Esto debe dar error

/* function imprimirNombreYEdad(persona){
var {nombre, edad}=persona
console.log('Hola me llamo '+nombre.toUpperCase()+' y tengo '+edad)
}

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(fredy) */

/* function cumpleanos(persona){
    return {
        //... es para desglozar  a la persona
        ...persona ,
        edad: persona.edad + 1
    }
    
} */

var x = 4 , y ='4'

var edwin = {
    nombre: 'Edwin'
}

var otraPersona={
    ...edwin // obejto literal , Nuevo objeto , es otro lugar de memoria ram
} 
var otraP= edwin
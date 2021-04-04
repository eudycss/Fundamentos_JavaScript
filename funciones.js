
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

/* var x = 4 , y ='4'

var edwin = {
    nombre: 'Edwin'
}

var otraPersona={
    ...edwin // obejto literal , Nuevo objeto , es otro lugar de memoria ram
} 
var otraP= edwin */

var edwin= {
    nombre: 'Sebas',
    apellido: 'Cabascango',
    edad: 18,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}
 function imprimirProfesiones(persona){
     console.log(`${persona.nombre} es: `)
     if(persona.ingeniero){
        console.log('Ingeniero')
     } else {
         console.log('No es ingeniero')
     }

     if(persona.cocinero){
         console.log('Cocinero')
     }

     if(persona.dj){
        console.log('DJ')
    }

    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Piloto Drone')
    }
 }

 function imprimirSiEsMayorEdad(persona){
    if(persona.edad>=18){
        console.log('Edwin es mayor de edad')
    } else 
    {
        console.log('Edwin es menor de edad')    
    }
    
 }
 imprimirSiEsMayorEdad(edwin)

/*  imprimirProfesiones(edwin)
 */
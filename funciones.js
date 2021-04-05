var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}
/* const esAlta =persona=> persona.altura> 1.8 */
const esAlta =({altura})=> altura> 1.8
const esBaja =({altura})=> altura <1.8
var personas =[sacha, alan, martin, dario,vicky,paula]
// vamos a filtrar a las personas altas

var personasAltas = personas.filter(esAlta)
var personasBajas=personas.filter(esBaja)
// Esta funcion si modifica al array original
//const pasarAltutaACms=(persona)=>{
    /* persona.altura= persona.altura*100 */
/*     persona.altura *=100
    return persona
} */

// Esta funcion no modifica el array original
/* const pasarAltutaACms = persona=>{
    return{
        ...persona,
        altura: persona.altura*100
    }
} */

// The same funtion above but without return, use parentesis
const pasarAltutaACms = persona=> ({
    ...persona,
    altura: persona.altura*100
})
var personasCms=personas.map(pasarAltutaACms)

/* var acum=0
for (var i=0; i <personas.length; i++){
    acum=acum+personas[i].cantidadDeLibros

} */

// Una forma mas prolija de hacer the above
/* const reducer =(acum,persona)=>{
    return acum+persona.cantidadDeLibros
} */
const reducer =(acum,{cantidadDeLibros})=>
acum+cantidadDeLibros

// reduce (funtion, valorInicial)
let totalLibros = personas.reduce(reducer, 0)
console.table(`En total todos tienen ${totalLibros} libros`)

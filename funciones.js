let edwin = {
    nombre:'Edwin',
    apellido:'Cabascango',
    edad :28,
    peso: 75
}

console.log(`Al inicio del año ${edwin.nombre} pesa ${edwin.peso}kg`)
/* function aumentarDePeso(persona) {
    persona.peso+= 200
} */

const INCREMENTO_PESO=0.2
const DIAS_ANIO=365
const aumentarDePeso= persona =>persona.peso+=INCREMENTO_PESO
 const adelgazar = persona => persona.peso -=INCREMENTO_PESO
for(let i=1; i<=DIAS_ANIO ; i++){
    let random = Math.random()

    if( random <0.25){
        //Aumenta de peso
        aumentarDePeso(edwin)
    } else if (random<0.5){
        //adelgazar
        adelgazar(edwin)
    }
}
console.log(`Al final del año ${edwin.nombre} pesa ${edwin.peso.toFixed(1)}kg`)
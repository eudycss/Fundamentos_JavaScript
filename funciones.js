var edwin = {
    nombre:'Edwin',
    apellido:'Cabascango',
    edad :28,
    peso: 75
}

console.log(`Al inicio del año ${edwin.nombre} pesa ${edwin.peso}kg`)
/* function aumentarDePeso(persona) {
    persona.peso+= 200
} */

const INCREMENTO_PESO=0.3
const DIAS_ANIO=365
const aumentarDePeso= persona =>persona.peso+=INCREMENTO_PESO
 const adelgazar = persona => persona.peso -=INCREMENTO_PESO
const comeMucho=()=>Math.random() <0.3
const realizaDeporte = ()=> Math.random()<0.4
 const META = edwin.peso -3 //72
 var dias =0

while(edwin.peso>META){
if(comeMucho()){
    //aumentar peso
    aumentarDePeso(edwin)
}
if(realizaDeporte()){
    //adelgazar
    adelgazar(edwin)
}
dias +=1
}
console.log(`Pasaron ${dias} dias hasat que ${edwin.nombre} adelgazó 3kg `)
/* console.log(`Al final del año ${edwin.nombre} pesa ${edwin.peso.toFixed(1)}kg`) */
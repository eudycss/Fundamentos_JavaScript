var contandor =0
// llueve le 25% de las veces
/* var ran= Math.random()
 */const llueve=()=>Math.random() <0.25
do {
 contandor++
} while(!llueve())
console.log("LLueve = "+llueve())
if (contandor===1)
{
    console.log(`Fui a ver si llovía ${contandor} vez`)
} else {
    console.log(`Fui a ver si llovía ${contandor} veces`)
}

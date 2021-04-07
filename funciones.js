const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'
/* const lukeUrl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
 */
const opts ={crossDomain:true}


function obtenerPersonaje(id,callback){
    
    return new Promise((resolve, reject)=>{
        const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
        
    $
    .get(url, opts,function(data){
        resolve(data)
    })
    .fail(()=>reject(id))
})
}
function onError(id){
    console.log(`Sucedio un error al obtener persona ${id}`)
}
var ids =[1,2,3,4,5,6,7]
// cada elemento sea una promesa
// map toma un array y modifca sus elementos
/* var promesas=id.map(function(id){
    return obtenerPersonaje(id)
}) otra forma de escribir lo anterior*/
var promesas=ids.map(id=> obtenerPersonaje(id))
Promise
.all(promesas)
.then(personajes=>console.log(personajes))
.catch(onError)
/* obtenerPersonaje(1)
.then((personaje1)=>{
    console.log(`El personaje 1 es ${personaje1.name}`)
    return obtenerPersonaje(2)
})
.then(personaje2=>{
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
})
.then(personaje3=>{
    console.log(`El personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
})
.then(personaje4=>{
    console.log(`El personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
})
.then(personaje5=>{
    console.log(`El personaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(6)
})
.then(personaje6=>{
    console.log(`El personaje 6 es ${personaje6.name}`)
    return obtenerPersonaje(7)
})
.then(personaje7=>{
    console.log(`El personaje 7 es ${personaje7.name}`)
    
}) */

/* .catch(onError)  */
 /// el catch es el mismo para todos
//callback hell


/* obtenerPersonaje(3)
 */ // primer parametro
// segundo parametro
//callback es una funcion que se va a ejecutar en algun futuro, cuando termine el request se va alllmar, puede o no llamarse

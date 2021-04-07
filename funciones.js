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
obtenerPersonaje(1)
.then(function(personaje){
    console.log(`El personaje 1 es ${personaje.name}`)

})

.catch(onError)
//callback hell


/* obtenerPersonaje(3)
 */ // primer parametro
// segundo parametro
//callback es una funcion que se va a ejecutar en algun futuro, cuando termine el request se va alllmar, puede o no llamarse

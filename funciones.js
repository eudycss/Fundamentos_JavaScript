const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'
/* const lukeUrl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
 */
const opts ={crossDomain:true}
const onPeopleResponse=function(persona){
    console.log(`Hola yo soy, ${persona.name}`)
}

function obtenerPersonaje(id){
    const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts,onPeopleResponse)
}
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
 // primer parametro
// segundo parametro
//callback es una funcion que se va a ejecutar en algun futuro, cuando termine el request se va alllmar, puede o no llamarse

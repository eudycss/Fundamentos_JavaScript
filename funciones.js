const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'
/* const lukeUrl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
 */
const opts ={crossDomain:true}


function obtenerPersonaje(id,callback){
    console.log(id)
    const url =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(url, opts,callback)
    .fail(()=>{
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    })
}
//callback hell
obtenerPersonaje(1, function(personaje){
    console.log(`Hola yo soy, ${personaje.name}`)
    obtenerPersonaje(2,function(personaje){
        console.log(`Hola yo soy, ${personaje.name}`)
        obtenerPersonaje(3,function(personaje){
            console.log(`Hola yo soy, ${personaje.name}`)
            obtenerPersonaje(4,function(personaje){
                console.log(`Hola yo soy, ${personaje.name}`)
                obtenerPersonaje(5,function(personaje){
                    console.log(`Hola yo soy, ${personaje.name}`)
                    obtenerPersonaje(6,function(personaje){
                        console.log(`Hola yo soy, ${personaje.name}`)
                        obtenerPersonaje(7,function(personaje){
                            console.log(`Hola yo soy, ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})

obtenerPersonaje(3)
 // primer parametro
// segundo parametro
//callback es una funcion que se va a ejecutar en algun futuro, cuando termine el request se va alllmar, puede o no llamarse

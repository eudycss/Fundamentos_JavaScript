// aunque es una clase por debajo es un prototipo
class Persona{
constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido=apellido
    this.altura=altura
}
saludar(fn){
    /* let nombre=this.nombre
    let apellido=this.apellido */
    /*  otra forma de lo anterior*/
    let {nombre, apellido}=this
    console.table(`Hola me llamo ${nombre} ${apellido}`)
    if(fn){
        fn(nombre,apellido)
    }
}
esAlto(){
    return this.altura >1.8

}
}

class Desarrollador extends Persona{
    
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)  
    }

 saludar(fn){
    let {nombre, apellido}=this
    console.table(`Hola, me llamo ${nombre} ${apellido} Soy un Desarrollador`)
    if(fn){
        fn(nombre,apellido,true)
    }
 }
}

function responderSaludo(nombre, apellido, esDev){
    console.table(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.table(`Ah mira, no sabia que eres desarrollor/a`)
    }
}


var sacha = new Persona('Edwin', 'Cabascango',1.92)
var fredy= new Persona('Fredy', 'Salazar',1.6)
var cury= new Desarrollador('Cury','Cushcagua', 1,3)
sacha.saludar() 
fredy.saludar(responderSaludo)
cury.saludar(responderSaludo)
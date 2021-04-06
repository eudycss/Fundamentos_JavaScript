// aunque es una clase por debajo es un prototipo
class Persona{
constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido=apellido
    this.altura=altura
}
saludar(){
    console.table(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
esAlto(){
    return this.altura >1.8

}
}

class Desarrollador extends Persona{
    
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)  
    }

}

Desarrollador.prototype.saludar=function(){
    console.table(`Hola, me llamo ${this.nombre} ${this.apellido} Soy un Desarrollador`)
}


var sacha = new Persona('Edwin', 'Cabascango',1.92)
var fredy= new Persona('Fredy', 'Salazar',1.6)
var cury= new Persona('Cury','Cushcagua', 1,3)
sacha.saludar()
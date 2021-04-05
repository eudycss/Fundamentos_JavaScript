// Prototipo
// Es como clase, No existe la herencia, pero esto es algo similar

function Persona(nombre, apellido, alt){
    this.nombre = nombre
    this.apellido=apellido
    this.altura=alt
    //return this esto lo hace implicitamente
}

Persona.prototype.saludar= function(){
    console.table(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
/* let alt1= Persona.this.altura
console.table("Altura:"+alt1) */
Persona.prototype.esAlto=function () {
    
    return this.altura >1.8
    
}

var sacha = new Persona('Edwin', 'Cabascango',1.92)
var fredy= new Persona('Fredy', 'Salazar',1.6)
var cury= new Persona('Cury','Cushcagua', 1,3)
sacha.saludar()
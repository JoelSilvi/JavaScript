const c = console.log

let a = new String("Hola")
console.log(a)


const b = {}
console.log(b)

const d = new Object()
c(d)



// Los objetos dentro de un objeto, a las variables se le
// van a llamar atributos o propiedades y a las 
// funciones se les llama métodos
const f ={
    nombre: "joel",
    apellido: "Aguilar",
    edad: 32,
    pasatiempo:["Estudiar","Hacer deporte"],
    soltero:false,
    contacto:{
        email:"analistasilvi@gmail.com",
        face:"joel",
        videos:["youtube","vimeo"]
    },
    saludar:function(){
        c(`Hola Mundo`)
    },
    decirNombre:function(){
        c(`Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido} y tengo ${this.edad} años`)
    }
}
c(f)
c(f["nombre"])
c(f["apellido"])
c(f.nombre)
c(f.apellido)
c(f.edad)
c(f.pasatiempo)
c(f.pasatiempo[0])
c(f.contacto.email)

f.saludar()
f.decirNombre()
c(Object.keys(f))
c(Object.values(f))
c(f.hasOwnProperty("nombre"))
c(f.hasOwnProperty("nacimiento"))
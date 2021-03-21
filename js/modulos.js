import saludar, {Saludar, PI, usuario,pass} from "./constantes.js"
import {aritmetica as calculos} from "./aritmetica.js"



console.log("Archivo Módulos.js")

console.log(PI, usuario, pass)

// console.log(aritmetica.sumar(5,5))
// console.log(aritmetica.restar(5,2))
console.log(calculos.sumar(5,5))
console.log(calculos.restar(5,2))

saludar();

let saludo = new Saludar();

saludo;
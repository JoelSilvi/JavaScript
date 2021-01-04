let nombre = "joel"
let apellido = "aguilar"

// Concatenación
let saludo = "Hola mi nombre es: " + nombre + " " + apellido


// Interpolacion de variables
// Template String

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`

console.log(saludo2)


console.log(saludo)


let ul = "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>"

console.log(ul)

let ul2 = ` <ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>`

console.log(ul2)


let ul3 = "<ul>";
ul3 += "<li>Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>";

console.log(ul3)
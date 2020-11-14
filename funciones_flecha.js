// const saludar = function(nombre){
//     let frase = `Hola ${nombre} cómo estás`;
//     document.write(frase);
// }


// Se reemplaza el function por una flecha, frente del o los parámetros declarados en la funcion
// Si hay un parametro se puede usar sin paréntesis
// Si no hay parametros se deja vacío

// const saludar = (nombre)=>{
// const saludar = nombre=>{
//     let saludo = `Hola ${nombre} cómo estás`;
//     document.write(saludo + "<br><br>");
// }



const saludar = nombre =>{
    document.write("Hola como estás " + nombre + "<br><br>");
}


saludar("joel");
saludar("misael");
saludar("jorge");
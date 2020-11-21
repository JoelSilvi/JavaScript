let names = ["joel","juan<br>","misael<br>"];

// document.write(names[0]);
// document.write(names);
// document.write(names.length);


// for(let indice = 0; indice< names.length; indice++){
//     document.write(names[indice]);
// }

// for(let indice = names.length -1; indice >= 0; indice--){
//     document.write(names[indice]);
// }

// for infinito
// for(let indice = names.length -1; indice > 0; indice++){
//     console.log(names[indice]);
// }


function saludar(nombre){
    document.write(`Hello  ${nombre}`);
}


saludar("joel<br>");

let nombre_funcion = prompt("escribe tu nombre");

saludar(nombre_funcion);
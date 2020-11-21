let correoDB = "joel@gmail.com";

let passDB = "joel1234";

let correoUser = prompt ("Ingresa tu correo");

let passUser = prompt ("Ingresa tu contraseña");



// primera condición, evalua usuario y contraseña a la vez

// if (correoDB===correoUser && passDB===passUser){
//     document.write("Felicidades has sido validado correctamente");
// }else{
//     document.write("cometiste un error al escribir tu correo o contraseña, intenta otra vez");
// }

// segunda condición evalua usuario y contraseña por separado

if(correoDB===correoUser){
    if(passDB===passUser){
        document.write("Felicidades has sido validado correctamente");
    }

    else if(passDB!==passUser){
        document.write("tu contraseña es incorrecta");
    }

}

else if(correoDB!==correoUser && passDB!==passUser){
    document.write("ambos campos son incorrectos");
}

else if(correoDB!==correoUser){
    document.write("el correo es incorrecto");
}
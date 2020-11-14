// let num1 = 32;

// let num2 = 12;

// let res = num1 + num2;

// document.write(res);

// function suma(){
//     let res = num1 + num2;
//     document.write(res);
// }

// suma();


// num1 y num2 se declararon en la función y sirve solo para esa función
// function suma(num1,num2){
//     let res = num1 + num2;
//     document.write(res);
//     document.write("<br>");
// }

// suma(12,32)

// suma(1,2)


// function sumar(num1,num2){
//     let res = num1 + num2;
//     return res
// }

// let resultado = sumar(20,50);

// document.write(resultado)

function saludar(nombre){
    let saludo = `Hola ${nombre} cómo estás`;
    document.write(saludo + "<br><br>");

    // saludo = `Hola ${nombre} cómo estás`; "la variable sin let se puede usar fuera de la funcion" + no recomendado
}

      // document.write(saludo);

saludar("joel");
saludar("jorge");
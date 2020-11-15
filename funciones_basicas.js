// Uno de los parametros de esta función tiene un valor asignado, cuando se ejecuta no es necesario pasarle 2 valores.


function multiplicar(a,b=1){
    return a * b;
}

document.write(multiplicar(8,5) + "<br><br>");
document.write(multiplicar(8));
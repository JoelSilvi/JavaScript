let score = prompt("cuál es tu score");


if (score < 30){
    document.write("debes mejorar <br><br><br><br>");
    if (score < 15){
        document.write("segunda respuesta");
    
        if (score > 40){
            document.write("acá no se cumple la primera condición, no entra el siguiente if aunque el valor sea mayor a 40");
        }
    }
}

if (score > 40){
    document.write("esto no sale");
}


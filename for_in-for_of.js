let animales = ["gato","perro","conejo"];
animales.edad = 20;


for (animal in animales){
    document.write(animal + "<br><br>");
}

document.write("<br><br><br>");


for (animal of animales){
    document.write(animal + "<br><br>");
}

document.write("<br><br><br>");

document.write(animales.edad);

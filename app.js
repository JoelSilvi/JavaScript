let points = parseInt(prompt("escriba puntuación"));
// let points = 6;

switch(points){
    case 1:
        document.write('este es el peor nivel');
        break;
    case 2: 
        document.write('debes mejorar');
        break;
    case 3:
        document.write('lo haces bien');
        break;
    case 4:
        document.write('te falta poco');
        break;
    case 5:
        document.write('estás por lograrlo');
        break;
    default:
        document.write('lo conseguiste');
}
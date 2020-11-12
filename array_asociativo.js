let pc = {
    nombre: "note joel",
    procesador: "core I3",
    ram: "6gb",
    espacio: "240gb"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc ["ram"];
let espacio = pc ["espacio"];

let frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
        el procesador es: <b>${procesador}</b> <br>
        la ram es: <b>${ram}</b> <br>
        tiene un espacio de: <b>${espacio}</b>`;

document.write(frase)
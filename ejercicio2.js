let presentes = 0;
let ausentes = 0;


const asistencia = (nombre)=>{
    let alumnos = prompt ("Ingrese una 'p' si el alumno está presente y una 'a' si está ausente")
    if (alumnos=="p"){
        presentes++;
        alert (`${nombre} esta presente`);
    }

    else{
        ausentes++;
        alert(`${nombre} está ausente`);
    }
}

asistencia("joel");
asistencia("juan");
asistencia("felipe");
asistencia("rodrigo");

document.write(`la cantidad de alumnos presentes es ${presentes}` + "<br><br>");
document.write(`la cantidad de alumnos ausentes es ${ausentes}`);
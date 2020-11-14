
// Evaluando edad, hora y si es la primera persona que pasa gratis

let persona_gratis = 0;

const validarCliente = (time,nombre)=>{

    let edad = prompt ("Cuál es tu edad");

    if (edad>=18){
        if(time>=2 && time<=7){
            if(persona_gratis==0){
                persona_gratis++;
                alert (`Eres la primera persona mayor de edad, desde las 2, puedes pasar gratis ${nombre}`);
            }else{
                alert(`Bienvenido ${nombre} ya pasó la primera persona mayor de 18 gratis, el valor de la entrada es $2000`)
            }
        }else{
            alert(`Bienvenido ${nombre} a esta hora se paga 2000`);
        }

    }else{
        alert(`${nombre} eres menor de edad no puedes pasar`);
    }

}

validarCliente(2,"misael");
validarCliente(5,"fernando");
validarCliente(10,"joel");
validarCliente(9,"camilo");
validarCliente(11,"juan");
validarCliente(3,"cristian");
validarCliente(4,"jostario");

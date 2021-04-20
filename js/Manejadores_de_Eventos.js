function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
    alert("Hola mundo, manejador de eventos semánticos");
    console.log(e);
    // console.log(event);
};

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e) =>{
    alert("Hola Mundo Manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});
function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event)
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

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


$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Joel")
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);
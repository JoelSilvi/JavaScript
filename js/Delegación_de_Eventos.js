
function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click", (e) =>{
    console.log("Clcik en", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert(`Hola soy Joel`);
        e.preventDefault();
    }
});


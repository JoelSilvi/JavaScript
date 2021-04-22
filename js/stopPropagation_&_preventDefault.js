const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}


$divsEventos.forEach(div =>{
    // Fase de burbuja
    div.addEventListener("click",flujoEventos);
    // div.addEventListener("click",flujoEventos, false);
    // Fase de captura
    // div.addEventListener("click",flujoEventos, true);
    // div.addEventListener("click",flujoEventos,{
    //     capture:false,
    //     once: true
    // });
});

$linkEventos.addEventListener("click", (e) =>{
    alert(`Hola soy Joel`);
    e.preventDefault();
    e.stopPropagation();
});
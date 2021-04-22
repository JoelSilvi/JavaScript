const $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}


$divsEventos.forEach(div =>{
    // Fase de burbuja
    // div.addEventListener("click",flujoEventos, false);
    // Fase de captura
    // div.addEventListener("click",flujoEventos, true);
    div.addEventListener("click",flujoEventos,{
        capture:false,
        once: true
    });
});
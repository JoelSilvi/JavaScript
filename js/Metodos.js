// window.alert("Alert");
// window.confirm("Confirm");
// window.prompt("Aviso");



let ventana;

const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

    $btnAbrir.addEventListener("click", e =>{
        // window.open("https://google.cl")
        ventana = open("https://google.cl")
    });

    $btnCerrar.addEventListener("click", e =>{
        // window.close();
        ventana.close();
    });

    $btnImprimir.addEventListener("click", e =>{
        // window.print()
        print();
    });
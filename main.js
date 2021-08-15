const actualizador = setInterval(() => {
  // Definiendo el tiempo de inicio en milisegundos

  const inicioClase = new Date("March 1, 2022 10:00:00").getTime();
  console.log(inicioClase);

  // definimos el tiempo actual en milisegundos
  const tiempoActual = new Date().getTime();
  console.log(tiempoActual);

  // Calcular la diferencia entre el inicio y la fecha actual
  let tiempoRestante = inicioClase - tiempoActual;
  console.log(tiempoRestante);

  tiempoRestante /= 1000;
  console.log(tiempoRestante);

  // calcular los dias restantes
  const dias = Math.floor(tiempoRestante / (60 * 60 * 24));
  console.log(dias);

  // calculamos las horas restantes
  const horas = Math.floor((tiempoRestante % (60 * 60 * 24)) / (60 * 60));
  console.log(horas);

  // calculamos los minutos restantes
  const minutos = Math.floor((tiempoRestante % (60 * 60)) / 60);
  console.log(minutos);

  // calculamos los segundos

  const segundos = Math.floor(tiempoRestante % 60);
  console.log(segundos);

  const contador = document.getElementById("contador");
  contador.innerHTML = `
  <div>
    <span>${dias}</span>
    <span class="texto">Días</span>
  </div>
  <div>
    <span>${horas}</span>
    <span class="texto">Horas</span>
  </div>
  <div>
    <span>${minutos}</span>
    <span class="texto">Minutos</span>
  </div>
  <div>
    <span>${segundos}</span>
    <span class="texto">Segundos</span>
  </div>
  `;
}, 1000);

let boton = document.querySelector(".btn");
boton.addEventListener("click", () => {
  if (boton.textContent === "REGÍSTRATE") {
    boton.textContent = "REGISTRADO!!!";
  } else {
    boton.textContent = "REGÍSTRATE";
  }
});

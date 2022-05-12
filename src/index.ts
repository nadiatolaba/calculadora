let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let operacion = document.getElementById("operacion");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let calculo: number = Number(operacion.value);
  let suma: number = Number(valor1.value) + Number(valor2.value);
  let resta: number = Number(valor1.value) - Number(valor2.value);

  function dibujarGuiones() {
    let guion: string = "-";
    for (let i = 0; i <= 40; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  }

  switch (calculo) {
    case 1:
      dibujarGuiones();
      console.log("  El resultado de la operación es: " + suma);
      dibujarGuiones();
      break;

    case 2:
      dibujarGuiones();
      console.log(" El resultado de la operación es: " + resta);
      dibujarGuiones();
      break;

    default:
      dibujarGuiones();
      console.log("        *  El programa finalizó  *");
      dibujarGuiones();
  }
});

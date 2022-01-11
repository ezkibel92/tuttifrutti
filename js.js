
const spanResultado = document.getElementById("letra");
const btn = document.getElementById("btn");
var letras = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Ñ",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

//Se usará para controlar cantidad de generados
let contador = 0;
btn.addEventListener("click", function () {
  //Esta funcion me entrega una letra al azar
  var pasar = Math.round(Math.random() * (letras.length - 1));
  var azar = letras[pasar];
  //Muestro el valor en un Span.
  spanResultado.innerText = azar;

  //Para control de Letra, largo de array y cantidad generados
  contador++;
  console.log(
    "Letra " + azar,
    "Largo Array: " + letras.length,
    "Cant. Generadas " + contador
  );

  //Busco el índice que le corresponde a la letra mostrada en array letras
  const indiceLetra = letras.indexOf(azar);
  //Elimino esa letra del array
  letras.splice(indiceLetra, 1);

//Si se eliminaron todas las letras es decir ya se mostraron todas, devuelvo alerta.
  if (letras.length === 0) {
    alert("TUTTI-FRUTTI!!!! Todas las letras han sido usadas.");
    location.reload();
  }
});

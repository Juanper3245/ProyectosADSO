//interacion para escribir uno en el input resultado
let resultado = document.getElementById("resultado");
function escribirUno() {
  resultado.value += "1";
}
function escribirDos() {
  resultado.value += "2";
}
function escribirTres() {
  resultado.value += "3";
}
function escribirCuatro() {
  resultado.value += "4";
}
function escribirCinco() {
  resultado.value += "5";
}
function escribirSeis() {
  resultado.value += "6";
}
function escribirSiete() {
  resultado.value += "7";
}
function escribirOcho() {
  resultado.value += "8";
}
function escribirNueve() {
  resultado.value += "9";
}
function punto() {
  resultado.value += ".";
}
function limpiar() {
  resultado.value = "  ";
}
function sumar() {
  resultado.value += "+";
}
function restar() {
  resultado.value += "-";
}
function division() {
  resultado.value += "/";
}
function multiplicacion() {
  resultado.value += "*";
}
function log() {
  let grados = resultado.value;
  let total = Math.log10(grados);
  resultado.value = total;
}
function ln() {
  let grados = resultado.value;
  let total = Math.log(grados);
  resultado.value = total;
}
function coseno() {
  let grados = resultado.value;
  let total = Math.cos(grados);
  resultado.value = total;
}
function seno() {
  let grados = resultado.value;
  let total = Math.sin(grados);
  resultado.value = total;
}
function tangente() {
  let grados = resultado.value;
  let total = Math.tan(grados);
  resultado.value = total;
}
function cosecante() {
  let grados = resultado.value;
  let total = 1 / Math.sin(grados);
  resultado.value = total;
}
function secante() {
  let grados = resultado.value;
  let total = 1 / Math.cos(grados);
  resultado.value = total;
}
function cotangente() {
  let grados = resultado.value;
  let total = 1 / Math.tan(grados);
  resultado.value = total;
}
function redondear() {
  let redondear = resultado.value;
  let total = Math.round(redondear);
  resultado.value = total;
}
function potenciaCuadrada() {
  let total = Math.pow(resultado.value, 2);
  resultado.value = total;
}
function potenciaCubica() {
  let total = Math.pow(resultado.value, 3);
  resultado.value = total;
}

function raizcuadrada() {
  let total = Math.sqrt(resultado.value);
  resultado.value = total;
}
function raizcubica() {
  let total = Math.cbrt(resultado.value);
  resultado.value = total;
}
function ramdon() {
  let total = Math.random(resultado.value);
  resultado.value = total;
}
function calcular() {
  //Hacemos el calculo de la expresion que esta en el input
  let total = eval(resultado.value); // funcion de js que evalua expresiones
  console.log(total);
  resultado.value = total;
}
const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");
const resultadoIMC = document.getElementById("resultadoIMC");

function calcularIMC() {
  let altura = eval(inputAltura.value);
  let peso = eval(inputPeso.value);
  let imc = peso / Math.pow(altura, 2);
  resultadoIMC.value = imc.toFixed(2);
}

function limpiarIMC() {
  altura.value = "  ";
  peso.value = "  ";
  resultadoIMC.value = "  ";
}
const inC = document.getElementById("celsius1");
const resF = document.getElementById("resultado1");
const inF = document.getElementById("celsius2");
const resC = document.getElementById("resultado2");
function calcular1() {
  let resultado = (Number(inC.value) * 9) / 5 + 32;
  resF.value = resultado.toFixed(2);
}

function borrar1() {
  inC.value = "";
  resF.value = "";
}

function calcular2() {
  let resultado = ((Number(inF.value) - 32) * 5) / 9;
  resC.value = resultado.toFixed(2);
}

function borrar2() {
  inF.value = "";
  resC.value = "";
}

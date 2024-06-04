const vermelho = document.querySelector(".vermelho");
const verde = document.querySelector(".verde");
const azul = document.querySelector(".azul");
const corpo = document.querySelector("body");

const COR_VERMELHA = "#733";
const COR_VERDE = "#373";
const COR_AZUL = "#337";

vermelho.addEventListener("click", function () {
  corpo.style.backgroundColor = COR_VERMELHA;
});

verde.addEventListener("click", function () {
  corpo.style.backgroundColor = COR_VERDE;
});

azul.addEventListener("click", function () {
  corpo.style.backgroundColor = COR_AZUL;
});

window.addEventListener("DOMContentLoaded", function () {
  corpo.style.backgroundColor = COR_AZUL;
});

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
//1° mettere i numeri come li items, prendendo dal DOM l'ul
//2° quindi generare dinamicamente il list items orizzontale con la variabile currentRandomNumber
//3°prendere i valori degli input quando clicchi il bottone
//4° pusharli in un array nuovo
//5° comparare i numeri dell array iniziale con il nuovo, come? boh
//6° aggiungere la frase "hai azzeccato i numeri ${} e bla"
const listEl = document.getElementById("numbers-list");
const formEl = document.getElementById("answers-form");
const instructionEl = document.getElementById("instructions");
const instruction2El = document.getElementById("instructions2");
const inputEl = document.querySelectorAll("input"); // questa ti da una NodeList, una specie di array
const responseEl = document.getElementById("response");

let list = "";
let response = "";
const numbers = [];
const userRightNumbers = [];
/**
 *
 * @param {number} max numero massimo del range
 * @param {number} min numero minimo del range
 * @returns {Array} array di 5 numeri casuali
 */
function fiveRandomNumbers(max, min = 1) {
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const currentRandomNumber = randomNumber;
    numbers.push(currentRandomNumber);
  }
  return numbers;
}
console.log(fiveRandomNumbers(50));
for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  list += `<li>${currentNumber}</li>`;
}
listEl.innerHTML = list;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < inputEl.length; i++) {
    const currentInput = inputEl[i];
    const currentValue = parseInt(currentInput.value);
    if (numbers.includes(currentValue)) {
      userRightNumbers.push(currentValue);
    }
  }
  for (let i = 0; i < userRightNumbers.length; i++) {
    const currentNumber2 = userRightNumbers[i];
    response += `${currentNumber2} -`;
  }
  responseEl.innerText = `Complimenti hai azzeccato i numeri: ` + response;
});

// Mi fa scomparire i numeri, mettere dopo i 30 secondi(?)
// listEl.classList.add("d-none");
// Mettere dentro la funzione dei 30 secondi(?), mi fa apparire gli input del form
formEl.classList.remove("d-none");
// Scompare la prima serie di istruzioni
// instructionEl.classList.add("d-none");
// Appare la seconda serie di istruzioni
// instruction2El.classList.remove("d-none");

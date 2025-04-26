// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
//1° mettere i numeri come li items, prendendo dal DOM l'ul
//2° quindi generare dinamicamente il list items orizzontale con la variabile currentRandomNumber
//
//
//
//
const listEl = document.getElementById("numbers-list");
let list = "";
const numbers = [];
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

// /**
//  *
//  * @param {Function} fiveRandom funzione che mi genera 5 numeri casuali
//  * @returns {number} numero corrente
//  */

// function numberOfList(fiveRandom) {
//   for (let i = 0; i < fiveRandom.length; i++) {
//     const currentNumber = fiveRandom[i];
//     return currentNumber;
//   }
// }

// console.log(numberOfList(fiveRandomNumbers(50)));

/**
//  *
//  * @param {Array} listNames funzione che mi restituisce le iniziali di ogni parola
//  * @param {string} letter lettera
//  * @returns {Array} nuovo array con parole che iniziano con quella lettera
//  */
// function ListNames2(listNames, letter) {
//     for (let i = 0; i < listNames.length; i++) {
// const letterName = [];
//       const currentName = listNames[i];
//       if (currentName === letter) {
//         letterName.push(currentName);
//       }
//     }
//     return letterName;
//   }

//   // Invoca la funzione qui e stampa il risultato in console
//   console.log(ListNames2(ListNames(names), "A"));

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  let area = l1 * l2;
  console.log(area);
}
area(2, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  let somma = n1 + n2;
  if (n1 === n2) {
    somma = somma * 3;
  }
  return somma;
}
console.log(crazySum(2, 2));

console.log(crazySum(2, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  let differenza = n1 - 19;
  if (differenza < 0) {
    differenza = -differenza;
  }
  if (n1 > 19) {
    differenza = differenza * 3;
  }
  return differenza;
}
console.log(crazyDiff(8));
console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n1) {
  if (n1 >= 20 && n1 <= 100) {
    return true;
  }
  if (n1 === 400) {
    return true;
  }
  return false;
}

console.log(boundary(50));
console.log(boundary(400));
console.log(boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num <= 0) {
    return false;
  }
  if (num % 3 === 0) {
    return true;
  }

  if (num % 7 === 0) {
    return true;
  }
}

console.log(check3and7(9));
console.log(check3and7(49));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  let arrayStr = str.split(" ");
  for (let i = 0; i < arrayStr.length; i++) {
    arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1).toLowerCase();
  }
  return arrayStr.join(" ");
}
console.log(upperFirst("mela banana kiwi"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  return str.slice(1, str.length - 1);
}
console.log(cutString("Ciao"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  let arrayRandom = [];
  for (let i = 0; i < n; i++) {
    arrayRandom.push(Math.floor(Math.random() * 10) + 1);
  }
  return arrayRandom;
}
console.log(giveMeRandom(5));

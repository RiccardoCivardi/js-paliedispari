/* 
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. 
*/


//PALINDROMA

//prendo l'imput dell'utente
const input = document.querySelector('#word');
//prendo il bottone Verifica
const button = document.querySelector('#palindroma button');
//prendo il bottone reset
const button2 = document.querySelector('#palindroma #reset');
// prendo l'output h3
const output = document.querySelector('#palindroma h3');

// al click sul bottone Verifica parte la funzione palindoma 
button.addEventListener('click', function(){
  palindroma(input.value);
})

// al click sul bottone reset cancello in campo di input
button2.addEventListener('click', function(){
  resetInput(input);
  resetOutput(output);
});

// funzione palindroma
function palindroma(parola) {

  // elimino eventuali spazi messi dall'utente all'inizio o alla fine dell'input
  parola = parola.trimEnd();
  parola = parola.trimStart();

  // rendo la parola in maiuscolo così escludo lettere o maiuscole o minuscole
  parola = parola.toUpperCase();

  // se campo vuoto scrivo di inserire una parola
  if(parola === '') {
    output.innerText = 'Devi scrivere una parola';
    // resetto l'input
    resetInput(input);
    // esco
    return;
  }

  // se parola è di un carattere scrivi una parola
  if(parola.length == 1) {
    output.innerText = 'Devi scrivere una parola con più di una lettera';
    // resetto l'input
    resetInput(input);
    // esco
    return;
  }

  // se la parola inserita è un numero chiedo di inserire una parola
  if(!isNaN(parola)) {
    output.innerText = 'Devi inserire una parola non un numero';
    // resetto l'input
    resetInput(input);
    // esco
    return;
  } 
  
  // dichiaro la parolaInversa che è il risultato della funzione invertiParole
  const parolaInversa = invertiParola(parola);

  // se il risultato della funzione stessaParola è true la parola è palindroma
  if(stessaParola(parola, parolaInversa)) output.innerHTML = `La parola "${parola}" è palindroma`;
  // se è false la parola non è palindroma
  else output.innerHTML = `La parola "${parola}" NON è palindroma`;
}

// funzione invertiParola a cui passo una parola e me la restituisce invertita
function invertiParola (parola) {
  // dichiaro la variabile in cui creerò la parola invertita
  let parolaInversa = '';
  //ciclo al contrario la parola.lenght-1 per costruire la parola invertita  
  for(let i = (parola.length-1) ; i >= 0; i--) {
    // pesco le lettere trattando la parola come un array
    parolaInversa += parola[i];
  }
  // ritorno la parola invertita
  return parolaInversa;
}

// funzione stessaParola che date due parole mi confronta se sono uguali
function stessaParola (parola1, parola2) {
  // ritorna il risultato del confronto
  return parola1 === parola2; 
}

// funzione resetInput che cancella il value dell'elemento e lo ritorna
function resetInput(element){
  element.value = '';
  return element;
}

//funzione resetOutput che cancella l'output
function resetOutput(el) {
  el.innerText = '';
  return el;
}

/* ------------------------------------ */

// PARI E DISPARI

// prendo la select di pari o dispari
const pariDispariUser = document.querySelector('[name="par-dispari"]');
// prendo il numero inserito
const numberUser = document.querySelector('#pari-dispari input');
// prendo il bottone via 
const button3 = document.querySelector('#pari-dispari button');
//prendo il bottone reset
const button4 = document.querySelector('#pari-dispari #reset');
// prendo l'output h3
const output2 = document.querySelector('#pari-dispari h3');


// al click sul bottone parte la funzione
button3.addEventListener('click', giocoPariDispari)

// al click sul bottone reset cancello i campi di input
button4.addEventListener('click', function(){
  resetInput(pariDispariUser);
  resetInput(numberUser);
  resetOutput(output2);
});

function giocoPariDispari (){
  //numero giocatore
  const numUser = parseInt(numberUser.value);
  
  // controllo se il numero non è compreso tra 1 e 5
  if(numUser < 1 || numUser > 5) {
    // scrivo il messaggio di errore in output2
    output2.innerText = 'Devi inserire un numero compreso tra 1 e 5';
    // resetto l'input
    resetInput(numberUser);
    // esco
    return;
  }
 
   // genero il numero casuale del computer
   const numComputer = random(1, 5);
   // genero la somma
   const sumNumbers = sum(numUser, numComputer);
   // controllo se la somma è pari o dispari e stampo output
   if (pariDispariUser.value === PariDispari(sumNumbers)) output2.innerText = 'Vince l\'utente';
   else output2.innerText = 'Vince il computer';
}

// estrattore casuale
function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione somma
function sum (num1, num2) {
  // ritorna la somma dei due numeri
  return somma = num1 + num2;
}

//funzione pari o dispari
function PariDispari (num) {
  if(num % 2) return "dispari";
  else return "pari";
}



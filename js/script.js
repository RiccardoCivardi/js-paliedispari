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
//prendo il bottone Verifica
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
});

// funzione palindroma
function palindroma(parola) {

  // elimino eventuali spazi messi dall'utente all'inizio o alla fine dell'input
  parola = parola.trimEnd();
  parola = parola.trimStart();

  // se la parola inserita è un numero chiedo di inserire una parola
  if(!isNaN(parola)) {
    output.innerText = 'Devi inserire una parola non un numero';
    // quindi esco
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
function invertiParola(parola) {
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
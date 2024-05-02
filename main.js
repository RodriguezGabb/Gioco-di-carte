import Deck from "./deck.js";
import Hand from "./hand.js";

const manaCattivo = (function () {//cosi dovrebbe essere globale ma modificabile solo dalle mie funzioni
  let value = 5;
  function getManaCattivo() {
    return value;
  }
  function updManaCattivo(i) {
    if (!isNaN(i)) {//se i è un numero
      manaCattivo += i;
    }
    else throw new exception("updManaCattivo ha ricevuto NaN")
  }
  function resetManaCattivo() {//funzione per il fine turno 
    manaCattivo = 5;
  }
  return {//cosi si possono accedere da altre funzioni
    getManaCattivo: getManaCattivo,
    updManaCattivo: updManaCattivo,
    resetManaCattivo: resetManaCattivo
  }
})();

const manaBuono = (function () {//cosi dovrebbe essere globale ma modificabile solo dalle mie funzioni
  let value = 5;
  function getValue() {
    return value;
  }
  function updManaBuono(i) {
    if (!isNaN(i)) {//se i è un numero
      manaBuono += i;
      updManaBar(i);
    }
    else throw new exception("updManaBuono ha ricevuto NaN")
  }
  function resetManaBuono() {//funzione per il fine turno 
    manaBuono = 5;
    resetManaBar();
  }
})();

const mazzoGiocatore = new Deck();//creazione mazzo

mazzoGiocatore.mescola();
console.log("questa è mazzo prima di pescare")//se li metto nella stessa riga non mi fa vedere specifiche di carte ma li vede solo come object
console.log(mazzoGiocatore.carte);
const manoGiocatore = new Hand(mazzoGiocatore);//creazione mano
console.log("questa è la mano")
console.log(manoGiocatore.carte);
console.log("questa è mazzo dopo")
console.log(mazzoGiocatore.carte);

//Rivedere i vari getelementbyid perché si possono fare delle variabbili globali

document.getElementById("mazzoGiocatore").addEventListener("click", giocatorePesca);

//potremmo sistemare questo codice spostando tutte le funzioni con carte nel file giusto(hand o deck)!!!!!!!!!!!!!!!!!!!!!


// Funzione che fa comparire il pulsante dentro le carte
function carteOnClick(id1) {
  console.log("si? dica")
  var button = document.getElementById(id1);
  if (button.style.display === "none") {//Se il bottone è non è visibile lo rende visibile altrimenti il contrario 
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
// Funzione che fa giocare la carta
function giocaCarta(id1) {
  var div1 = document.getElementById(id1);//prende la carta con l'id e lo mette sulla board
  var div2 = document.getElementById("boardGiocatore");//Vorrei aggiungere un limite sulla board ma ne dobbiamo parlare  
  div2.appendChild(div1);
}
//funzione per far pescare il giocatore
function giocatorePesca() {
  var manoGiocatore = document.getElementById("manoGiocatore");
  var nCarteInManoGiocatore = manoGiocatore.querySelectorAll("div").length;
  var nCarteGiocatore = document.getElementsByClassName("carteManoGiocatore").length
  if (nCarteInManoGiocatore < 5) {//5 num max di carte in mano
    var nuovaCarta = creaCarta(nCarteGiocatore + 1);
    manoGiocatore.appendChild(nuovaCarta);
  }//else
}

//Funzione di creazione della prima carta del mazzo
//Questa funzione deve ancora essere realizata (vedi con andre come e cosa vogliamo fa)
//i è il numero della carta (alla fine servirà solo per l'id)
function creaCarta(i) {
  var carta = document.createElement("div");
  carta.className = "carteManoGiocatore";
  carta.setAttribute("id", "carteManoGiocatore" + i);
  carta.innerHTML = "Card " + i//cosa per debug
  var bottone = document.createElement("button");
  bottone.className = "bottoneGioca";
  bottone.setAttribute("id", "bottoneGioca" + i); console.log("bottoneGioca" + i);
  bottone.innerHTML = "Gioca";
  carta.appendChild(bottone);
  bottone.style.display = "none";
  carta.addEventListener("click", function () {
    carteOnClick(bottone.id);
  });

  bottone.addEventListener("click", function () {
    giocaCarta(carta.id);
  });
  return carta;
}

function avversarioPesca() {
  var manoAvversario = document.getElementById("manoAvversario");
  var nCarteInManoAvversario = manoAvversario.querySelectorAll("div").length;
  var nCarteAvversario = document.getElementsByClassName("manoAvversario").length
  if (nCarteInManoAvversario < 5) {//5 num max di carte in mano
    var nuovaCarta = creaCartaAvv(nCarteAvversario + 1);
    manoAvversario.appendChild(nuovaCarta);
  }
}

/*test per vedere se ho capito il tuo codice*/
function creaCartaAvv(i) {
  var carta = document.createElement("div");
  carta.className = "carteManoAvv";
  carta.setAttribute("id", "carteManoAvv" + i);
  carta.innerHTML = "Card " + i//cosa per debug
  return carta;
}
function giocaCartaAvv(carta) {
  giocaCarta(carta.id);
}


//numero di carte rimanenti in cimitero prendi elem
const nCimA = document.getElementById('nCardCimitero');


function updateNumberCimi(number) {
  nCimA.textContent = number;
}


updateNumberCimi(5); // se esce 68 non è partita

//ia section
function mydumbPlay(hand) {
  var costi = [];
  for (let i = 0; i < hand.length; i++) {//creo lista di costi
    costi[i] = hand[i].costo;
  }
  const nCarte = costi.length;
  var arrayFinale = [nCarte + 1];//se carta usata ha nel suo slot true senno false
  arrayFinale[0] = 999;//in primo slot metto spesa massima della combinazione
  var arrayTemp = [nCarte];//ci salvo bool delle varie carte in combinazione
  var costoMax = manaCattivo.getManaCattivo();//costo della combinazione attuale
  for (let cartaIni = 0; cartaIni <= nCarte - 1; cartaIni++) {
    for (let pos = 0; pos <= nCarte - 1; pos++) {
      var ciclo = (pos + cartaIni) % nCarte;//ti cicla per tutte le carte ma inizi da un altro punto es 2,3,0,1
      if (costi[ciclo] <= costoMax) {//se costa più di quanto hai non la puoi lanciare
        costoMax = costoMax - costi[ciclo];
        arrayTemp[ciclo] = true;//aggiorni l array e il costo rimanente
      }
    }
    if (costoMax < arrayFinale[0]) {//se ne trovo una migliore aggiorno l arrayFinale
      arrayFinale[0] = costoMax;
      for (let i = 0; i < nCarte; i++) {
        arrayFinale[i + 1] = arrayTemp[i];
      }
    }
    costoMax = manaCattivo.getManaCattivo()//quando vado a carta dopo resetto tutto
    for (let i = 0; i < nCarte; i++) {//resetto anche l array
      arrayTemp[i] = false;
    }
  }
  return arrayFinale;
}
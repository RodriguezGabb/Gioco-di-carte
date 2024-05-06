import Deck from "./deck.js";
import Hand from "./hand.js";
import carta from "./carta.js";
import shop from "./shop.js";
//buono/cattivo parte logica
//Giocatore/avversario parte grafica

//zona debug
//document.getElementById(manoAvversario);
document.getElementById("BottonePesca").addEventListener("click", avversarioPesca);
//document.getElementById(AvvGioca).addEventListener("click", mydumbPlay);
document.getElementById("Rimuovi").addEventListener("click", cancellamiplz);
//da qui **
function cancellamiplz() {//sta funzione non serve a nulla era per capire getId se funziona, spoiler no
  aggiornaShop();

}

function aggiornaShop() {

  const shopx = new shop();//loggetto ba spostato e non lo posso chiamare shop :'(



  var cartaShop1 = document.getElementById("cartaShop1");

  var cartaShop2 = document.getElementById("cartaShop2");

  var cartaShop3 = document.getElementById("cartaShop3");

  var cartaShop4 = document.getElementById("cartaShop4");

  var cartaShop5 = document.getElementById("cartaShop5");



  var nomeCarta1 = shopx.cartaPerShop("str");

  var nomeCarta2 = shopx.cartaPerShop("agi");

  var nomeCarta3 = shopx.cartaPerShop("int");

  var nomeCarta4 = shopx.cartaPerShop("random");

  var nomeCarta5 = shopx.cartaPerShop("random");

  //questo sara cambiato quandonabbiamo le immaggini

  var c1 = creaCartaDaNome(nomeCarta1);

  var c2 = creaCartaDaNome(nomeCarta2);

  var c3 = creaCartaDaNome(nomeCarta3);

  var c4 = creaCartaDaNome(nomeCarta4);

  var c5 = creaCartaDaNome(nomeCarta5);



  creaCartaPerShop(c1, "cartaShop1");

  creaCartaPerShop(c2, "cartaShop2");

  creaCartaPerShop(c3, "cartaShop3");

  creaCartaPerShop(c4, "cartaShop4");

  creaCartaPerShop(c5, "cartaShop5");

}
function creaCartaPerShop(card, id) {
  var carta = document.getElementById(id);
  carta.className = card.tipo + "Shop";//Class serve per lo stile
  carta.innerHTML = card.nome;//cosa per debug
  //dimensioni carta

}
function creaCartaDaNome(nomeCarta) {//possiamo aggiungere dove va messo graficamente forse
  var c = new carta();
  if (nomeCarta == "taglio") {
    c.CreaTaglio();
  }
  else if (nomeCarta == "toccata") {
    c.CreaToccata();
  }
  else if (nomeCarta == "battuta") {
    c.CreaBattuta();
  }
  else if (nomeCarta == "parata di picco") {
    c.CreaParataDiPicco();
  }
  else if (nomeCarta == "disarmo") {
    c.CreaDisarmo();
  }
  else if (nomeCarta == "cavazione") {
    c.CreaCavazione();
  }
  else if (nomeCarta == "parata di contro") {

    c.Crea
  }
  else if (nomeCarta == "filo") {

    c.CreaFilo();
  }
  else if (nomeCarta == "ricavazione") {

    c.CreaRicavazione();
  }
  else if (nomeCarta == "inquartata") {

    c.CreaInquartata();
  }
  else if (nomeCarta == "affondo") {

    c.CreaAffondo();
  }
  else if (nomeCarta == "parata di tasto") {

    c.CreaParataDiTasto();
  }
  else if (nomeCarta == "finta") {

    c.CreaFinta();
  }
  else if (nomeCarta == "stoccata in tempo") {

    c.CreaStoccataInTempo();
  }
  else if (nomeCarta == "parata di ceduta") {

    c.CreaParataDiCeduta();
  }
  return c;
}



//fino a qui ignora tutto **

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
  return {//cosi si possono accedere da altre funzioni
    getValue: getValue,
    updManaBuono: updManaBuono,
    resetManaBuono: resetManaBuono
  }
})();

const mazzoBuono = new Deck();//creazione mazzo
const mazzoCattivo = new Deck();
mazzoBuono.mescola();
mazzoCattivo.mescola();

console.log("mazzo buono:")
console.log(mazzoBuono.carte);
const manoBuono = new Hand();//creazione mano
const manoCattivo = new Hand();
console.log("questa è la mano")
console.log(manoBuono.carte);
console.log("questa è mazzo dopo")
console.log(mazzoBuono.carte);




//Rivedere i vari getelementbyid perché si possono fare delle variabbili globali

document.getElementById("mazzoGiocatore").addEventListener("click", giocatorePesca);

//potremmo sistemare questo codice spostando tutte le funzioni con carte nel file giusto(hand o deck)!!!!!!!!!!!!!!!!!!!!!


// Funzione che fa comparire il pulsante dentro le carte
function carteOnClick(idBottone) {
  var button = document.getElementById(idBottone);
  if (button.style.display === "none" && button.className == "bottoneGioca") {//Se il bottone è non è visibile lo rende visibile altrimenti il contrario 
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
// Funzione che fa giocare la carta
function bottoneOnClick(Carta, idBottone) {
  var carta = document.getElementById(Carta.id);//prende la carta con l'id e lo mette sulla board
  var board = document.getElementById("boardGiocatore");
  var bottone = document.getElementById(idBottone);
  board.appendChild(carta);
  bottone.className = "bottoneInvisibile";
  bottone.display = "none";
  if (carta.elemento == "agi") {
    updAgiValue(carta.livello);
  }
  else if (carta.elemento = "str") {
    updStrValue(carta.livello);
  }
  else if (carta.elemento = "int") {
    updIntValue(carta.livello);
  }
}
//funzione per far pescare il giocatore
function giocatorePesca() {
  /*-----------parte grafica-----------*/
  var manoGiocatore = document.getElementById("manoGiocatore");
  var nCarteInManoGiocatore = manoGiocatore.querySelectorAll("div").length;
  if (nCarteInManoGiocatore < 5) {//5 num max di carte in mano
    /*-----------parte logica-----------*/
    var card = manoBuono.pesca(mazzoBuono, 1);//uno perchè pesca solo una carta possiamo mettere una variabbile per decidere quante carte pesca direttamente quando usaimo la funzione
    /*-----------parte grafica-----------*/
    if (card != -1) {
      var nuovaCarta = creaCartaGiocatore(card);
      manoGiocatore.appendChild(nuovaCarta);
    }
  }
  else {
    window.alert("Hai gia 5 carte in mano");
  }
}

//Funzione di creazione della prima carta del mazzo
function creaCartaGiocatore(card) {//card è un instanza della classe carta(è la carta logica da creare grafficamente)
  var carta = document.createElement("div");
  carta.className = card.tipo;//Class serve per lo stile
  carta.setAttribute("id", card.id);
  carta.innerHTML = card.nome;//cosa per debug
  var bottone = document.createElement("button");
  bottone.className = "bottoneGioca";
  bottone.setAttribute("id", "bottoneGiocaDi" + card.id);
  bottone.innerHTML = "Gioca";
  carta.appendChild(bottone);
  bottone.style.display = "none";
  //event listener dei componenti
  carta.addEventListener("click", function () {
    carteOnClick(bottone.id);
  });

  bottone.addEventListener("click", function () {
    bottoneOnClick(carta, bottone.id);
  });
  return carta;
}
//Funzioni avversario
function avversarioPesca() {
  /*-----------parte grafica-----------*/
  var manoAvversario = document.getElementById("manoAvversario");
  var nCarteInManoAvversario = manoAvversario.querySelectorAll("div").length;
  if (nCarteInManoAvversario < 5) {//5 num max di carte in mano
    /*-----------parte logica-----------*/
    var card = manoCattivo.pesca(mazzoCattivo, 1)//Il mazzo da cui pescare + quante carte pescare // opzione 2
    /*-----------parte grafica-----------*/
    var nuovaCarta = creaCartaAvversario(card);
    manoAvversario.appendChild(nuovaCarta);
  }
}
/*test per vedere se ho capito il tuo codice*/
function creaCartaAvversario(card) { //card è un instanza della classe carta(è la carta logica da creare grafficamente)
  var carta = document.createElement("div");
  carta.className = "carteManoAvversario";//te posso di che tanto le carte del avv sono di dorso quindi va bene cosi
  carta.setAttribute("id", card.id);
  carta.innerHTML = card.nome;//mette il nome della carta come testo
  return carta;
}
function giocaCartaAvversario(idCarta) {
  var carta = document.getElementById(idCarta);
  var boardAvversario = document.getElementById(boardAvversario);
  boardAvversario.appendChild(carta);
}


//numero di carte rimanenti in cimitero
// prendi elem
const nCimA = document.getElementById('nCardCimitero');

function updateCarteInCimi(numeroCarteInCimitero) {
  nCimA.textContent = numeroCarteInCimitero;
}

updateCarteInCimi(5);

//palle shop
const strValue = document.getElementById('tokenStr');

function updStrValue(str) {
  const valOra = parseInt(strValue.textContent);
  const newValue = valOra + str;
  strValue.textContent = newValue;
}
const intValue = document.getElementById('tokenInt');

function updIntValue(int) {
  const valOra = parseInt(intValue.textContent);
  const newValue = valOra + int;
  intValue.textContent = newValue;
}
const agiValue = document.getElementById('tokenAgi');

function updAgiValue(agi) {
  const valOra = parseInt(agiValue.textContent);
  const newValue = valOra + agi;
  agiValue.textContent = newValue;
}




//ia section
function mydumbPlay(hand) {
  var costi = [];
  for (let i = 0; i < hand.carte.length; i++) {//creo lista di costi
    costi[i] = hand.carte[i].costo;
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
  var IDDaGiocare = [];
  var posiz = 0;
  for (let i = 1; i < arrayFinale.length; i++) {//ignora elem 1
    if (arrayFinale[i] == true) {
      IDDaGiocare.push(hand.carte[i - 1].id);
    }
  }
  return IDDaGiocare;
}


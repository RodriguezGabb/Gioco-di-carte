import Deck from "./deck.js";
import Hand from "./hand.js";
import carta from "./carta.js";
import shop from "./shop.js";
//buono/cattivo parte logica
//Giocatore/avversario parte grafica

//zona debug
//document.getElementById(manoAvversario);
document.getElementById("BottonePesca").addEventListener("click", avversarioPesca);
document.getElementById("debug").addEventListener("click", debug);
document.getElementById("Rimuovi").addEventListener("click", cancellamiplz);
//da qui **
function cancellamiplz() {//sta funzione non serve a nulla era per capire getId se funziona, spoiler no
  for (let i = 0; i < 5; i++) {
    giocatorePesca(mazzoBuono);
  }
}
function debug() {
  console.log(manoBuono);
  console.log(manoBuono.carte.length);
}
var nturni = 0;
//Fine turno
const pulsFine = document.getElementById("pulsanteFineTurno");
pulsFine.addEventListener("click", fineTurno);

function fineTurno() {
  //rimposta a 5 il mana del giocatore e del avversario
  manaCattivo = 5;
  manaBuono = 5;
  //rimuove le carte dalla board
  while (boardBuono.length != 0) {
    let c = boardBuono.pop();
    document.getElementById(c.id).remove();
    cimiteroBuono.carte.push(c);

  }
  while (boardCattivo.length != 0) {
    let c = boardCattivo.pop();
    document.getElementById(c.id).remove();
    cimiteroCattivo.carte.push(c);

  }
  //rimupve le carte dalle mani
  while (manoBuono.carte.length != 0) {
    let c = manoBuono.rimuoviCarta(cimiteroBuono);
    document.getElementById(c.id).remove();
  }
  while (manoCattivo.carte.length != 0) {
    let c = manoCattivo.rimuoviCarta(cimiteroCattivo);
    document.getElementById(c.id).remove();
  }

  //pesca una nuova mano e in caso rimescola il mazzo
  for (let i = 0; i < 5; i++) {
    if (mazzoBuono.carte.length != 0) {
      giocatorePesca(mazzoBuono);
    }
    else {
      mazzoBuono.controllo(cimiteroBuono);
      giocatorePesca(mazzoBuono);
    }
    if (mazzoCattivo.carte.length != 0) {
      avversarioPesca(mazzoCattivo);
    }
    else {
      mazzoCattivo.controllo(cimiteroCattivo);
      avversarioPesca(mazzoCattivo);
    }
  }

  updateCarteInCimi();
  aggiornaShop();//resetShop
  nturni++;//counter di turni
  resetEvilArmour();//reset armatura avversario quando è il suo turno;
  var carteDaGiocare = mydumbPlay(manoCattivo);
  carteDaGiocare.forEach(avversarioGioca);
  resetGoodManaBar();
  resetGoodArmour();//resetto armatura quando riè turno giocatore
}

//shop
//palle shop
const strValue = document.getElementById('tokenStr');

function updStrValue(str) {
  const valOra = parseInt(strValue.textContent);
  const newValue = valOra + str;
  strValue.textContent = newValue;
}
function resetStrValue() {
  //strValue = 0;
  strValue.textContent = 0;
}
const intValue = document.getElementById('tokenInt');

function updIntValue(int) {
  const valOra = parseInt(intValue.textContent);
  const newValue = valOra + int;
  intValue.textContent = newValue;
}
function resetIntValue() {
  //intValue = 0;
  intValue.textContent = 0;
}
const agiValue = document.getElementById('tokenAgi');

function updAgiValue(agi) {
  const valOra = parseInt(agiValue.textContent);
  const newValue = valOra + agi;
  agiValue.textContent = newValue;
}
function resetAgiValue() {
  //agiValue = 0;
  agiValue.textContent = 0;
}
function aggiornaShop() {
  //Creazione della carta nello shop;
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

  creaCartaShop(c1, "cartaShop1");
  creaCartaShop(c2, "cartaShop2");
  creaCartaShop(c3, "cartaShop3");
  creaCartaShop(c4, "cartaShop4");
  creaCartaShop(c5, "cartaShop5");

  //reset valuePalle 
  resetStrValue();
  resetAgiValue();
  resetIntValue();
}
function creaCartaShop(card, id) {
  var carta = document.getElementById(id);
  carta.className = card.elemento + "Shop";//Class serve per lo stile
  carta.innerHTML = card.nome;//cosa per debug
  card.id = id;
  //bottone compra
  var bottoneCompra = document.createElement("button");
  bottoneCompra.className = "bottoneCompra";
  bottoneCompra.setAttribute("id", "bottone" + id);
  bottoneCompra.innerHTML = "Compra";
  bottoneCompra.style.display = "block";
  carta.appendChild(bottoneCompra);
  //dobbiamo fare l'event listener
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
    c.CreaParataDiContro();
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

//mana
var manaCattivo = 5;
var manaBuono = 5;

const mazzoBuono = new Deck();//creazione mazzo
const mazzoCattivo = new Deck();
const cimiteroBuono = new Deck();
const cimiteroCattivo = new Deck();
mazzoBuono.CreaDeckBuono();
mazzoCattivo.CreaDeckCattivo();
mazzoBuono.mescola();
mazzoCattivo.mescola();
const shopx = new shop();
console.log("mazzo Cattivo:")
console.log(mazzoCattivo.carte);

console.log("mazzo buono:")
console.log(mazzoBuono.carte);
const manoBuono = new Hand();//creazione mano
const manoCattivo = new Hand();
const boardBuono = [];//servono per tenere gli oggetti carta da qualche parte quando sono in gioco.
const boardCattivo = [];





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
function bottoneOnClick(card, idBottone) {//Giocatore gioca
  if (card.costo > window.GoodManafullness) {
    alert("non hai abbastanza energia");
    return;
  }
  updGoodManaBar(-card.costo);
  var carta = document.getElementById(card.id);//prende la carta con l'id e lo mette sulla board
  var board = document.getElementById("boardGiocatore");
  var bottone = document.getElementById(idBottone);
  board.appendChild(carta);
  manoBuono.togliCartaSpecifica(card);
  boardBuono.push(card);
  bottone.className = "bottoneInvisibile";
  bottone.display = "none";
  carta.style.cursor = "default";
  //shop
  if (card.elemento == "agi") {
    updAgiValue(card.livello);
  }
  else if (card.elemento == "str") {
    updStrValue(card.livello);
  }
  else if (card.elemento == "int") {
    updIntValue(card.livello);
  }
  //effetti standard carte
  if (card.tipo == "penetrante") {
    updEvilLifeBar(-card.value);
  }
  else if (card.tipo == "attacco") {
    let danno = updEvilArmour(-card.value);
    updEvilLifeBar(-danno);
  }
  else if (card.tipo == "difesa") {
    let danno = updGoodArmour(card.value);
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
  carta.className = card.elemento;//Class serve per lo stile
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
    bottoneOnClick(card, bottone.id);
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
function avversarioGioca(card) {
  var carta = document.getElementById(card.id);
  var boardAvversario = document.getElementById("boardAvversario");
  manaCattivo -= card.costo;
  carta.className = card.elemento;

  //effetti standard carte
  if (card.tipo == "penetrante") {
    updGoodLifeBar(-card.value);
  }
  else if (card.tipo == "attacco") {
    let danno = updGoodArmour(-card.value);
    updGoodLifeBar(-danno);
  }
  else if (card.tipo == "difesa") {
    let danno = updEvilArmour(card.value);
  }

  manoCattivo.togliCartaSpecifica(card);
  boardAvversario.appendChild(carta);
  boardCattivo.push(card);
}


//numero di carte rimanenti in cimitero
// prendi elem
const nCimA = document.getElementById('nCardCimitero');

function updateCarteInCimi() {
  nCimA.textContent = cimiteroBuono.carte.length;
}

updateCarteInCimi(5);






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
  var costoMax = manaCattivo;//costo della combinazione attuale
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
    costoMax = manaCattivo//quando vado a carta dopo resetto tutto
    for (let i = 0; i < nCarte; i++) {//resetto anche l array
      arrayTemp[i] = false;
    }
  }
  var carteDaGiocare = [];
  for (let i = 1; i < arrayFinale.length; i++) {//ignora elem 1
    if (arrayFinale[i] == true) {
      carteDaGiocare.push(hand.carte[i - 1]);
    }
  }
  return carteDaGiocare;
}


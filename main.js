import Deck from "./deck.js";
import Hand from "./hand.js";


const mazzoGiocatore = new Deck();//creazione mazzo

mazzoGiocatore.mescola();
console.log("questa è mazzo prima di pescare")//se li metto nella stessa riga non mi fa vedere specifiche di carte ma li vede solo come object
console.log(mazzoGiocatore.carte);
const manoGiocatore = new Hand(mazzoGiocatore);//creazione mano
console.log("questa è la mano")
console.log(manoGiocatore.carte);
console.log("questa è mazzo dopo")
console.log(mazzoGiocatore.carte);
var a=-1
var b=3
b+=a
console.log(b);


//Rivedere i vari getelementbyid perché si possono fare delle variabbili globali

document.getElementById("mazzoGiocatore").addEventListener("click",giocatorePesca);
//Da risolvere
//document.getElementsByClassName("carteManoGiocatore").addEventListener("click",carteOnClick);//https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur
// Funzione che fa comparire il pulsante dentro le carte
function carteOnClick(){
        console.log("si? dica")
        var button = document.getElementById("bottoneGiocca1");
        var boardGiocatore = document.getElementById("boardGiocatore")
        if (button.style.display === "none" && !boardGiocatore.contains(document.getElementsByClassName("carteManoGiocatore"))){
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
}
// Funzione che fa giocare la carta
function giocaCarta(id1) {
    var div1 = document.getElementById(id1);
    var div2 = document.getElementById("boardGiocatore");
    div2.appendChild(div1);
}
//funzione per far pescare il giocatore
function giocatorePesca(){
    var manoGiocatore = document.getElementById("manoGiocatore");
    var nCarteGiocatore=manoGiocatore.querySelectorAll("div").length;
    if(nCarteGiocatore<5){//5 num max di carte in mano
      var nuovaCarta=creaCarta(nCarteGiocatore+1);
      manoGiocatore.appendChild(nuovaCarta);
    }//else
}
//Funzione di creazione della prima carta del mazzo
//Questa funzione deve ancora essere realizata (vedi con andre come e cosa vogliamo fa)
function creaCarta(i){
  var carta=document.createElement("div");
  carta.className="carteManoGiocatore";
  carta.setAttribute("id", "carteManoGiocatore"+i);
  carta.innerHTML="Card "+i//cosa per debug
  var bottone=document.createElement("button");
  bottone.className="bottoneGiocca";
  bottone.setAttribute("id","bottoneGiocca"+i);
  bottone.innerHTML="Gioca";
  carta.appendChild(bottone);
  return carta;
}

//numero di carte rimanenti in cimitero
// prendi elem
const nCimA = document.getElementById('nCardCimitero');


function updateNumber(number) {
    nCimA.textContent = number;
}


updateNumber(5); // se esce 68 non è partita
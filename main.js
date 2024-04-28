import Deck from "./deck.js";
import Hand from "./hand.js";

const manaCattivo=(function(){//cosi dovrebbe essere globale ma modificabile solo dalle mie funzioni
  let value=5;
  function getValue(){
      return value;
    }
  function updManaCattivo(i){
    if(!isNaN(i)){//se i è un numero
      manaCattivo+=i;
    }
    else throw new exception("updManaCattivo ha ricevuto NaN")
  }
  function resetManaCattivo(){//funzione per il fine turno 
   manaCattivo=5;
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



//Rivedere i vari getelementbyid perché si possono fare delle variabili globali

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
//Questa funzione deve ancora essere realizata (vedi con andre come e cosa vogliamo fa[io voglio piagne]) 
function creaCarta(i){//bisogna cambiare nome di funzione se è specifica per la mano gioc
  var carta=document.createElement("div");
  carta.className="carteManoGiocatore";
  carta.setAttribute("id", "carteManoGiocatore"+i);
  carta.innerHTML="Card "+i//cosa per debug
  var bottone=document.createElement("button");
  bottone.className="bottoneGioca";
  bottone.setAttribute("id","bottoneGioca"+i);
  bottone.innerHTML="Gioca";
  carta.appendChild(bottone);
  return carta;
}

//numero di carte rimanenti in cimitero
// prendi elem
const numCim = document.getElementById('nCardCimitero');


function updCimitero(number) {
  numCim.textContent = number;
}


updCimitero(5); // se esce 68 non funziona


//ia section
function DumbPlay(hand){//aggiungere  caso in cui l avversario guadagni mana da una carta al momento non viene speso
    var costi=[];
    for(let i=0;i<hand.length();i++){//creo lista di costi
      costi[i]=hand[i].costo;
    }

    //Dynamic Programming Approach
      const nCarte = costi.length;//numero carte in mano
      const matrice = Array.from({ length: nCarte + 1 }, () => Array(manaCattivo.getValue() + 1).fill(false));//matrice x:costi,y:numeri da 0 a target
  
      // casella del mana speso=0 è vera perche io posso non lanciare carte per spendere 0 mana
      for (let i = 0; i <= nCarte; i++) {
        matrice[i][0] = true;
      }
  
      // loops principali
      for (let i = 1; i <= nCarte; i++) {//iterazione sugli stessi elementi della x della matrice
          for (let j = 1; j <= manaCattivo.getValue(); j++) {//iterazione sugli stessi elementi della y della matrice
              if (j < costi[i - 1]) {
                  // se numero>target ignoralo
                  matrice[i][j] = matrice[i - 1][j];
              } else {
                  //  escludi o includi il numero in base a quale ha valore maggiore
                  //non sommi per raggiungere il manaCattivo ma sottrai  da lui
                  matrice[i][j] = matrice[i - 1][j] || matrice[i - 1][j - costi[i - 1]];
              }
          }
      }
  
      // trovi sum che piu avvicina a target
      let sum = manaCattivo.getValue();
      for (let i = manaCattivo.getValue(); i >= 0; i--) {
          if (matrice[nCarte][i]) {//si ferma al primo true nella matrice
              sum = i;
              break;
          }
      }

      for(let i=0;i<=nCarte;i++){
        if(matrice[i][sum]){//se casella è vera il costo migliore ha giocato quella carta penso? se piu soluzioni per costo diventa non optimale
          //enemygiocacarta(i)da controllare se giocare la carta dalla mano cambia la matrice o no ma non dovrebbe
        }
      }
  
      return sum;
  //!??!?!?!?!?!?!?
    
}
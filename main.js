import Deck from "./deck.js";
import Hand from "./hand.js";


const mazzoGiocatore = new Deck();
mazzoGiocatore.mescola();
const manoGiocatore = new Hand(mazzoGiocatore);


console.log("questa è mazzo prima di pescare")//se li metto nella stessa riga non mi fa vedere specifiche di carte ma li vede solo come object
console.log(mazzoGiocatore.carte);
console.log("questa è la mano")
console.log(manoGiocatore.carte);
console.log("questa è mazzo dopo")
console.log(mazzoGiocatore.carte);

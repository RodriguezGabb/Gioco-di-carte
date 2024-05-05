//import Deck from "./deck";
export default class Hand {
    constructor() {
        this.carte = [];
    }
    pesca(mazzo) {//pesca una carta dal mazzo passato la mette nella mano e restituisce la carta.
        let card = mazzo.carte.pop();
        this.carte.push(card);
        return card;
    }
    rimuoviCarta(idCarta) {//non funge per ora dammi un attimo
        for (let i = 0; i < this.carte.length; i++) {
            if (carte[i].id == idCarta) {
                this.carte.splice(x, 1);
            }
        }
    }
}
//import Deck from "./deck";
export default class Hand {
    constructor() {
        this.carte = [];
    }
    pesca(mazzo) {//pesca una carta dal mazzo passato la mette nella mano e restituisce la carta.
        if (mazzo.carte.length != 0) {
            let card = mazzo.carte.pop();
            this.carte.push(card);
            return card;
        }
        else {
            console.log("hai finito le carte nel mazzo brotha");//debug
            return -1;
        }
    }
    rimuoviCarta(idCarta) {//non funge per ora dammi un attimo
        for (let i = 0; i < this.carte.length; i++) {
            if (carte[i].id == idCarta) {
                this.carte.splice(x, 1);
            }
        }
    }
}
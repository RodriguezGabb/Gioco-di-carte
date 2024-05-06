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
    pesca5(mazzo) {//pesca una carta dal mazzo passato la mette nella mano e restituisce la carta.

    }
    svuota(cimitero) {
        for (let i = 0; i < this.carte.length() - 1; i++) {
            cimitero.carte.push(this.carte.pop());
        }
    }
    rimuoviCarta(idCarta) {//non funge per ora dammi un attimo
        while (this.carte.length() != 0) {
            if (carte[i].id == idCarta) {
                this.carte.splice(x, 1);
            }
        }
    }
}
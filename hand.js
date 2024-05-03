//import Deck from "./deck";
export default class Hand {
    constructor() {
        this.carte = [];
    }
    pesca(mazzo, n) {
        for (let i = 0; i < n; i++) {
            this.carte.shift(mazzo.carte.pop());//shift = pop solo che lo mette al inizio
        }
    }
    rimuoviCarta(idCarta) {//non funge
        var x = this.carte.indexOf(idCarta);
        if (x === -1) {//controllo se la ricerca del index va a vuon fine
            console.log("Errore in rimuoviCarta");
            return;
        }
        else {
            this.carte.splice(x, 1);
        }
    }
}

function auxRimuoviCarta() {//Gli passi l'id e ti ritorna lindice nel array di quella carta (simile a idenxOf ma usando getId)

}
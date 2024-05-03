//import Deck from "./deck";
export default class Hand {
    constructor() {
        this.carte = [];
    }
    pesca(mazzo) {
        let card = mazzo.carte.pop();
        let id = card.id;
        this.carte.shift(card);//shift = pop solo che lo mette al inizio
        return id;
    }
    rimuoviCarta(idCarta) {//non funge
        for (let i = 0; i < this.carte.length; i++) {
            if (carte[i].id == idCarta) {
                this.carte.splice(x, 1);
            }
        }
    }
}
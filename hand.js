//import Deck from "./deck";
class Hand {
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
    rimuoviCarta(cimitero) {
        let c = this.carte.pop();
        cimitero.carte.push(c);
        return c;
    }
    togliCartaSpecifica(card) {
        let x = this.carte.indexOf(card);
        this.carte.splice(x, 1);
    }
}
export default Hand;
//import Deck from "./deck";
export default class Hand {
    constructor(deck) {
        this.carte = [];
        this.mazzo = deck;
    }
    /*pesca(n) {// n numero di carte da pescare
        //console.log("ciao" + carte + " sesso " + mazzo)
        for (let i = 0; i < n; i++) {
            this.carte.push(this.mazzo.carte.pop());
        }
    }*/
    pesca(mazzo2, n) {//il 2serve solo per differenziare dal mazzo del costruttore, andra tolto il 2 in caso
        for (let i = 0; i < n; i++) {
            this.carte.shift(mazzo2.carte.pop());//shift = pop solo che lo mette al inizio
        }
    }
    rimuoviCarta(idCarta) {
        var x = this.carte.indexOf(idCarta);
        if (x === -1) {//controllo se la ricerca del index va a vuon fine
            console.log("Errore in rimuoviCarta");
            return;
        }
        else {
            this.carte.splice(x, 1);
        }
    }
    /*
const bimbo = ["palle", "sesso", "medusa", "cazzo", "gruppo", "vafanculpo"];
const ciuccio = bimbo.findIndex(bob);
function bob(x) {
  return x === "cazzo";
}
bimbo.splice(ciuccio, 1);
    */
}

function auxRimuoviCarta() {//Gli passi l'id e ti ritorna lindice nel array di quella carta (simile a idenxOf ma usando getId)

}
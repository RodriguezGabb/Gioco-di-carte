//import Deck from "./deck";
export default class Hand {
    constructor(deck) {
        this.carte = manoIniziale(deck);
    }
}

function manoIniziale(deck) {//questa è per la logica, crea array e ci mette carte prese da deck
    var ret = new Array();
    for (let i = 0; i < 3; i++) {
        ret.push(deck.carte.pop());
    }
    return ret;
}

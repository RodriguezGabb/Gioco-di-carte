import carta from "./carta.js";
class Deck {
    constructor(carte = CreaDeck()) {
        this.carte = carte;
    }
    get retDeck() {
        return this;
    }
    get contaCarte() {//torna NaN è da sostituire poi in manoiniziale 
        try {
            return this.carte.length;

        } catch (error) {
            console.log("contacarte esplode");
        }

    }
    get retCarte() {//non funziona torna undefined
        return this.carte;
    }
    mescola() {//cambia posizione carte in deck
        for (let i = this.contaCarte - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.carte[newIndex];
            this.carte[newIndex] = this.carte[i];
            this.carte[i] = oldValue;
        }
    }
}

// creazione mazzo
function CreaDeck() {
    var ret = [];
    let idNum = 1;
    for (var i = 0; i < 5; i++) {
        var parata = new carta();
        parata.CreaParataDiTasto(idNum);
        var cavazione = new carta();
        cavazione.CreaCavazione(idNum)
        var taglio = new carta();
        taglio.CreaTaglio(idNum);
        ret.push(parata);
        ret.push(cavazione);
        ret.push(taglio);
        idNum += 1;
    }
    return ret;
}

export default Deck;

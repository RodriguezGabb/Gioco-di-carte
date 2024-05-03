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
        ret.push(CreaAffondo(idNum));
        ret.push(CreaParata(idNum));
        ret.push(CreaFinta(idNum));
        idNum += 1;
    }
    return ret;
}
// creazioni carte sono funzioni di mazzo non di carte non confondere
function CreaAffondo(idNum) {
    return new carta("affondo", "attacco", 0, 3, idNum);
}
function CreaParata(idNum) {
    return new carta("parata", "difesa", 0, 2, idNum);
}
function CreaFinta(idNum) {
    return new carta("finta", "finta", 0, 1, idNum);
}

export default Deck;

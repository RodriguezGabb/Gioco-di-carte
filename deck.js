import carta from "./carta.js";
class Deck {
    constructor() {
        this.carte = [];
    }
    contaCarte() {
        try {
            return this.carte.length;

        } catch (error) {
            console.log("contacarte esplode");
        }
    }
    mescola() {//cambia posizione carte in deck
        for (let i = this.contaCarte - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.carte[newIndex];
            this.carte[newIndex] = this.carte[i];
            this.carte[i] = oldValue;
        }
    }
    controllo(cimitero) {
        if (this.carte.length == 0) {
            while (cimitero.carte.length != 0) {
                let card = cimitero.carte.pop();
                this.carte.push(card);
            }
            this.mescola();
        }
    }
    svuota() {
        this.carte = [];
    }
    aggiungiCarta(card) {
        this.carte.push(card);
    }
    //Creazione mazzi
    CreaDeckBuono() {//non deve fare return ma aggire sul mazzo che chiama la funzione coglione di merda
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
        this.carte = ret;
    }
    CreaDeckCattivo() {
        var ret = [];
        let idNum = 1;
        for (var i = 0; i < 5; i++) {
            var parata = new carta();
            parata.CreaParataDiTasto("cattivo" + idNum);
            var cavazione = new carta();
            cavazione.CreaCavazione("cattivo" + idNum)
            var taglio = new carta();
            taglio.CreaTaglio("cattivo" + idNum);
            ret.push(parata);
            ret.push(cavazione);
            ret.push(taglio);
            idNum += 1;
        }
        this.carte = ret;
    }
}



export default Deck;

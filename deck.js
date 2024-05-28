import carta from "./carta.js";
class Deck {
    constructor() {
        this.carte = [];
    }
    contaCarte() {
        return this.carte.length;
    }
    mescola() {//cambia posizioni carte in deck
        for (let i = this.contaCarte - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.carte[newIndex];
            this.carte[newIndex] = this.carte[i];
            this.carte[i] = oldValue;
        }
    }
    controllo(cimitero) {//sposta carte da cimitero al mazzo e mescola
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
    CreaDeckBuono() {
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
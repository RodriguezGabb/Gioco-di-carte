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
        ret.push(CreaParataDiPicco(idNum));
        ret.push(CreaFinta(idNum));
        idNum += 1;
    }
    return ret;
}
// creazioni carte sono funzioni di mazzo non di carte non confondere
//nome,tipo,costo,valore,id gli effetti extra li possiamo mettere nella funzione che gioca le carte con un if sul nome?

//offensive
//parabili
function CreaAffondo(idNum) {
    return new carta("affondo", "attacco", 0, 2, 5, idNum);//danno medio parabile
}
function CreaTaglio(idNum) {//valore off piu alto ma parata del avversario vale di piu?
    return new carta("taglio", "attacco", 0, 1, 3, idNum);
}
//lv2
function CreaBattuta(idNum) {
    return new carta("battuta", "attacco", 0, 2, 7, idNum);//+3 armatura
}
function CreaFilo(idNum) {
    return new carta("filo", "attacco", 0, 2, 7, idNum);//no idea/peschi?
}
//lv3
function CreaDisarmo(idNum) {
    return new carta("disarmo", "attacco", 0, 5, 20, idNum);
}

//penetranti
function CreaCavazione(idNum) {
    return new carta("cavazione", "penetrante", 0, 2, 3, idNum);//danno basso non parabile
}
//lv2
function CreaFinta(idNum) {
    return new carta("finta", "penetrante", 0, 2, 5, idNum);//+2 al danno successivo?
}
function CreaRicavazione(idNum) {
    return new carta("ricavazione", "penetrante", 0, 3, 8, idNum);//+2 al danno successivo?
}
//lv 3
function CreaInquartata(idNum) {
    return new carta("inquartata", "penetrante", 0, 4, 12, idNum);//+4 armatura
}

//difensive
function CreaParataDiTasto(idNum) {
    return new carta("parata di tasto", "difesa", 0, 1, 5, idNum);//meno en meno dif
}
function CreaParataDiPicco(idNum) {
    return new carta("parata di picco", "difesa", 0, 2, 7, idNum);//parata standard
}
//lv2
function CreaParataDicontro(idNum) {
    return new carta("parata di contro", "difesa", 0, 0, 3, idNum);// e peschi?
}
//lv3
function CreaCeduta(idNum) {
    return new carta("parata di ceduta", "difesa", 0, 3, 15, idNum);//+5 danni al taglio successivo?
}

export default Deck;

class carta {//id num serve per differenziare le carte dello stesso tipo con un numero che aumenta di uno, es: affondo1 affondo2 affondo3
    constructor() {
        this.nome = "nome carta";
        this.tipo = "tipo carta";//attacco,penetrazione,difesa
        this.elemento = "elem carta";//str,agi,int
        this.livello = "livello";//1,2,3
        this.immagine = "immagine";
        this.costo = "costo carta";//costo per giocare la carta
        this.value = "value carta";//quanto danno/armatura da
        this.id = "id carta";
        this.costoShop = "costo per comprare";//costo per comprare da shop
    }

    //forza
    //lv1
    CreaTaglio(idNum) {//valore off piu alto ma parata del avversario vale di piu?
        this.generaCarta("taglio", "attacco", "str", 1, "taglio.png", 1, 3, idNum, 2);
    }
    CreaToccata(idNum) {
        this.generaCarta("Toccata", "penetrazione", "str", 1, "toccata.png", 1, 3, idNum, 2);//no idea
    }
    //lv2
    CreaBattuta(idNum) {
        this.generaCarta("battuta", "attacco", "str", 2, "battuta.png", 2, 7, idNum, 4);//+3 armatura
    }
    CreaParataDiPicco(idNum) {
        this.generaCarta("parata di picco", "difesa", "str", 2, "parata di picco.png", 2, 7, idNum, 4);//parata standard
    }
    //lv3
    CreaDisarmo(idNum) {
        this.generaCarta("disarmo", "attacco", "str", 3, "disarmo.png", 5, 20, idNum, 6);
    }

    //agi
    //lv1
    CreaCavazione(idNum) {
        this.generaCarta("cavazione", "penetrante", "agi", 1, "cavazione.png", 2, 3, idNum, 2);//danno basso non parabile
    }
    CreaParataDiContro(idNum) {
        this.generaCarta("parata di contro", "difesa", "agi", 1, "parata di contro.png", 0, 3, idNum, 2);// e peschi?
    }
    //lv2
    CreaFilo(idNum) {
        this.generaCarta("filo", "attacco", "agi", 2, "filo.png", 2, 7, idNum, 4);//no idea/peschi?
    }
    CreaRicavazione(idNum) {
        this.generaCarta("ricavazione", "penetrante", "agi", 2, "ricavazione.png", 3, 8, idNum, 4);//+2 al danno successivo?
    }
    //lv3
    CreaInquartata(idNum) {
        this.generaCarta("inquartata", "penetrante", "agi", 3, "inquartata.png", 4, 12, idNum, 6);//+4 armatura
    }

    //int
    //lv1
    CreaAffondo(idNum) {
        this.generaCarta("affondo", "attacco", "int", 1, "affondo.png", 2, 5, idNum, 2);//danno medio parabile
    }
    CreaParataDiTasto(idNum) {
        this.generaCarta("parata di tasto", "difesa", "int", 1, "parata di tasto.png", 1, 5, idNum, 2);//meno en meno dif
    }
    //lv2
    CreaFinta(idNum) {
        this.generaCarta("finta", "penetrante", "int", 2, "finta.png", 2, 5, idNum, 4);//+2 al danno successivo?
    }
    CreaStoccataInTempo(idNum) {
        this.generaCarta("stoccata in tempo", "difesa", "int", 2, "stoccata in tempo.png", 1, 3, idNum, 4);//fa anche danno
    }
    //lv3
    CreaParataDiCeduta(idNum) {
        this.generaCarta("parata di ceduta", "difesa", "int", 3, "parata di ceduta.png", 3, 15, idNum, 6);//+5 danni al taglio successivo?
    }

    generaCarta(nome, tipo, elemento, livello, immagine, costo, value, idNum, costoShop) {//da fare immagine
        this.nome = nome;
        this.tipo = tipo;
        this.elemento = elemento;
        this.livello = livello;
        this.immagine = immagine;
        this.costo = costo;
        this.value = value;
        this.id = nome + idNum;
        this.costoShop = costoShop;
    }
}
export default carta;
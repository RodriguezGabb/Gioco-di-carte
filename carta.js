class carta {//id num serve per differenziare le carte dello stesso tipo con un numero che aumenta di uno, es: affondo1 affondo2 affondo3
    constructor() {//da fare imagine, aggiungere costo
        this.nome = "nome carta";
        this.tipo = "tipo carta";
        this.elemento = "elem carta";
        this.livello = "livello";
        this.immagine = 0;
        this.costo = "costo carta";
        this.value = "value carta";
        this.id = "id carta";
    }
    //nome,tipo,costo,valore,id gli effetti extra li possiamo mettere nella funzione che gioca le carte con un if sul nome?
    //forza
    //lv1
    CreaTaglio(idNum) {//valore off piu alto ma parata del avversario vale di piu?
        this.generaCarta("taglio", "attacco", "str", 1, 0, 1, 3, idNum);
    }
    CreaToccata(idNum) {
        this.generaCarta("Toccata", "penetrazione", "str", 1, 0, 1, 3, idNum);//no idea
    }
    //lv2
    CreaBattuta(idNum) {
        this.generaCarta("battuta", "attacco", "str", 2, 0, 2, 7, idNum);//+3 armatura
    }
    CreaParataDiPicco(idNum) {
        this.generaCarta("parata di picco", "difesa", "str", 2, 0, 2, 7, idNum);//parata standard
    }
    //lv3
    CreaDisarmo(idNum) {
        this.generaCarta("disarmo", "attacco", "str", 3, 0, 5, 20, idNum);
    }
    //agi
    //lv1
    CreaCavazione(idNum) {
        this.generaCarta("cavazione", "penetrante", "agi", 1, 0, 2, 3, idNum);//danno basso non parabile
    }
    CreaParataDiContro(idNum) {
        this.generaCarta("parata di contro", "difesa", "agi", 1, 0, 0, 3, idNum);// e peschi?
    }
    //lv2
    CreaFilo(idNum) {
        this.generaCarta("filo", "attacco", "agi", 2, 0, 2, 7, idNum);//no idea/peschi?
    }
    CreaRicavazione(idNum) {
        this.generaCarta("ricavazione", "penetrante", "agi", 2, 0, 3, 8, idNum);//+2 al danno successivo?
    }
    //lv3
    CreaInquartata(idNum) {
        this.generaCarta("inquartata", "penetrante", "agi", 3, 0, 4, 12, idNum);//+4 armatura
    }
    //int
    //lv1
    CreaAffondo(idNum) {
        this.generaCarta("affondo", "attacco", "int", 1, 0, 2, 5, idNum);//danno medio parabile
    }
    CreaParataDiTasto(idNum) {
        this.generaCarta("parata di tasto", "difesa", "int", 1, 0, 1, 5, idNum);//meno en meno dif
    }
    //lv2
    CreaFinta(idNum) {
        this.generaCarta("finta", "penetrante", "int", 2, 0, 2, 5, idNum);//+2 al danno successivo?
    }
    CreaStoccataInTempo(idNum) {
        this.generaCarta("stoccata in tempo", "difesa", "int", 2, 0, 1, 3, idNum);//fa anche danno
    }
    //lv3
    CreaParataDiCeduta(idNum) {
        this.generaCarta("parata di ceduta", "difesa", "int", 3, 0, 3, 15, idNum);//+5 danni al taglio successivo?
    }
    generaCarta(nome, tipo, elemento, livello, immagine, costo, value, idNum) {//da fare immagine
        this.nome = nome;
        this.tipo = tipo;
        this.elemento = elemento;
        this.livello = livello;
        this.immagine = 0;
        this.costo = costo;
        this.value = value;
        this.id = nome + idNum;
    }
}
export default carta;
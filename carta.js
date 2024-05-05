class carta {//id num serve per differenziare le carte dello stesso tipo con un numero che aumenta di uno, es: affondo1 affondo2 affondo3
    constructor() {//da fare imagine, aggiungere costo
        this.nome = "nome carta";
        this.tipo = "tipo carta";
        this.immagine = 0;
        this.costo = "costo carta";
        this.value = "value carta";
        this.id = "id carta";
    }
    //nome,tipo,costo,valore,id gli effetti extra li possiamo mettere nella funzione che gioca le carte con un if sul nome?
    //forza
    //lv1
    CreaTaglio(idNum) {//valore off piu alto ma parata del avversario vale di piu?
        this.generaCarta("taglio", "attacco", 0, 1, 3, idNum);
    }
    CreaToccata(idNum) {
        this.generaCarta("Toccata", "penetrazione", 0, 1, 3, idNum);//no idea
    }
    //lv2
    CreaBattuta(idNum) {
        this.generaCarta("battuta", "attacco", 0, 2, 7, idNum);//+3 armatura
    }
    CreaParataDiPicco(idNum) {
        this.generaCarta("parata di picco", "difesa", 0, 2, 7, idNum);//parata standard
    }
    //lv3
    CreaDisarmo(idNum) {
        this.generaCarta("disarmo", "attacco", 0, 5, 20, idNum);
    }
    //agi
    //lv1
    CreaCavazione(idNum) {
        this.generaCarta("cavazione", "penetrante", 0, 2, 3, idNum);//danno basso non parabile
    }
    CreaParataDicontro(idNum) {
        this.generaCarta("parata di contro", "difesa", 0, 0, 3, idNum);// e peschi?
    }
    //lv2
    CreaFilo(idNum) {
        this.generaCarta("filo", "attacco", 0, 2, 7, idNum);//no idea/peschi?
    }
    CreaRicavazione(idNum) {
        this.generaCarta("ricavazione", "penetrante", 0, 3, 8, idNum);//+2 al danno successivo?
    }
    //lv3
    CreaInquartata(idNum) {
        this.generaCarta("inquartata", "penetrante", 0, 4, 12, idNum);//+4 armatura
    }
    //int
    //lv1
    CreaAffondo(idNum) {
        this.generaCarta("affondo", "attacco", 0, 2, 5, idNum);//danno medio parabile
    }
    CreaParataDiTasto(idNum) {
        this.generaCarta("parata di tasto", "difesa", 0, 1, 5, idNum);//meno en meno dif
    }
    //lv2
    CreaFinta(idNum) {
        this.generaCarta("finta", "penetrante", 0, 2, 5, idNum);//+2 al danno successivo?
    }
    CreaStoccataInTempo(idNum) {
        this.generaCarta("stoccata in tempo", "difesa", 0, 1, 3, idNum);//fa anche danno
    }
    //lv3
    CreaCeduta(idNum) {
        this.generaCarta("parata di ceduta", "difesa", 0, 3, 15, idNum);//+5 danni al taglio successivo?
    }
    generaCarta(nome, tipo, immagine, costo, value, idNum) {//da fare imagine, aggiungere costo
        this.nome = nome;
        this.tipo = tipo;
        this.immagine = 0;
        this.costo = costo;
        this.value = value;
        this.id = nome + idNum;
    }
}
export default carta;
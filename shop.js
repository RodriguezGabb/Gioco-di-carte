class shop {
    constructor() {//(x,y,z){
        this.strAgiInt = [5, 5, 5];
    }

    getStr() {
        return this.strAgiInt[0];
    }
    getAgi() {
        return this.strAgiInt[1];
    }
    getInt() {
        return this.strAgiInt[2];
    }

}

const metriceIdCartePerTipo = [
    ["taglio", "Toccata", "battuta", "parata di picco", "disarmo"],//forza
    ["cavazione", "parata di contro", "filo", "ricavazione", "inquartata"],//agi
    ["affondo", "parata di tasto", "finta", "stoccata in tempo", "parata di ceduta"]//int
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function compraStr() {//se compra una carta di questo tipo counter giusto sale
    this.strAgiInt[0] = this.strAgiInt[0] + 1;
}
function compraAgi() {
    this.strAgiInt[1] = this.strAgiInt[1] + 1;
}
function compraInt() {
    this.strAgiInt[2] = this.strAgiInt[2] + 1;
}
function bruciaStr() {//se brucia carta il counter adatto scende
    this.strAgiInt[0] = this.strAgiInt[0] - 1;
}
function bruciaAgi() {
    this.strAgiInt[1] = this.strAgiInt[1] - 1;
}
function bruciaInt() {
    this.strAgiInt[2] = this.strAgiInt[2] - 1;
}

/*
cartaPerShop(tipo) {
    let agi = this.strAgiInt.getAgi();
    let str = this.strAgiInt.getStr();
    let int = this.strAgiInt.getInt();
    str = str + agi;
    int = str + int;
    let randomTipo;

    if (tipo == "str") {
        randomTipo = 0;
    }
    else if (tipo == "int") {
        randomTipo = 1;
    }
    else if (tipo == "agi") {
        randomTipo = 2;
    }
    else {
        randomTipo = getRandomNumber(1, int);
    }
    let randomCarta = getRandomNumber(0, 4);
    if (randomTipo < agi) {//pesca agi
        return metriceIdCartePerTipo[0][randomCarta];
    }
    else if (agi < randomTipo && randomTipo < str) {//pesca str
        return metriceIdCartePerTipo[1][randomCarta];
    }
    else {//pesca int
        return metriceIdCartePerTipo[2][randomCarta];
    }
}


function creaCartaDaNome(nomeCarta) {
    var cartaShop;
    if (nomeCarta == "taglio") {
        cartaShop = new carta();
        cartaShop.crea
    }
    else if (nomeCarta == "toccata") {

    }
    else if (nomeCarta == "battuta") {

    }
    else if (nomeCarta == "parata di picco") {

    }
    else if (nomeCarta == "disarmo") {

    }
    else if (nomeCarta == "cavazione") {

    }
    else if (nomeCarta == "parata di contro") {

    }
    else if (nomeCarta == "filo") {

    }
    else if (nomeCarta == "ricavazione") {

    }
    else if (nomeCarta == "inquartata") {

    }
    else if (nomeCarta == "affondo") {

    }
    else if (nomeCarta == "parata di tasto") {

    }
    else if (nomeCarta == "finta") {

    }
    else if (nomeCarta == "stoccata in tempo") {

    }
    else if (nomeCarta == "parata di ceduta") {

    }
    return cartaShop;
}
/*
//forza
//lv1
function CreaTaglio(idNum) {//valore off piu alto ma parata del avversario vale di piu?

}
function CreaToccata(idNum) {
    return new carta("Toccata", "penetrazione", 0, 1, 3, idNum);//no idea
}
//lv2
function CreaBattuta(idNum) {
    return new carta("battuta", "attacco", 0, 2, 7, idNum);//+3 armatura
}
function CreaParataDiPicco(idNum) {
    return new carta("parata di picco", "difesa", 0, 2, 7, idNum);//parata standard
}
//lv3
function CreaDisarmo(idNum) {
    return new carta("disarmo", "attacco", 0, 5, 20, idNum);
}
//agi
//lv1
function CreaCavazione(idNum) {
    return new carta("cavazione", "penetrante", 0, 2, 3, idNum);//danno basso non parabile
}
function CreaParataDicontro(idNum) {
    return new carta("parata di contro", "difesa", 0, 0, 3, idNum);// e peschi?
}
//lv2
function CreaFilo(idNum) {
    return new carta("filo", "attacco", 0, 2, 7, idNum);//no idea/peschi?
}
function CreaRicavazione(idNum) {
    return new carta("ricavazione", "penetrante", 0, 3, 8, idNum);//+2 al danno successivo?
}
//lv3
function CreaInquartata(idNum) {
    return new carta("inquartata", "penetrante", 0, 4, 12, idNum);//+4 armatura
}
//int
//lv1
function CreaAffondo(idNum) {
    return new carta("affondo", "attacco", 0, 2, 5, idNum);//danno medio parabile
}
function CreaParataDiTasto(idNum) {
    return new carta("parata di tasto", "difesa", 0, 1, 5, idNum);//meno en meno dif
}
//lv2
function CreaFinta(idNum) {
    return new carta("finta", "penetrante", 0, 2, 5, idNum);//+2 al danno successivo?
}
function CreaStoccataInTempo(idNum) {
    return new carta("stoccata in tempo", "difesa", 0, 1, 3, idNum);//fa anche danno
}
//lv3
function CreaCeduta(idNum) {
    return new carta("parata di ceduta", "difesa", 0, 3, 15, idNum);//+5 danni al taglio successivo?
}*/
import carta from "./carta.js";
class shop {
    constructor() {
        this.strAgiInt = [5, 5, 5];
    }
    cartaPerShop(tipo) {
        let agi = getAgi(this.strAgiInt);//gli serve un riferimento al oggetto
        let str = getStr(this.strAgiInt);
        let int = getInt(this.strAgiInt);
        str = str + agi;
        int = str + int;
        let randomTipo;
        if (tipo == "str") {
            randomTipo = str;
        }
        else if (tipo == "agi") {
            randomTipo = agi;
        }
        else if (tipo == "int") {
            randomTipo = int;
        }
        else if (tipo == "random") {
            randomTipo = getRandomNumber(1, int);
        }
        let randomCarta = getRandomNumber(0, 4);
        if (agi < randomTipo && randomTipo <= str) {//pesca str
            return matriceIdCartePerTipo[0][randomCarta];
        }
        else if (randomTipo <= agi) {//pesca agi
            return matriceIdCartePerTipo[1][randomCarta];
        }
        else {//pesca int
            return matriceIdCartePerTipo[2][randomCarta];
        }
    }

}

const matriceIdCartePerTipo = [
    ["taglio", "toccata", "battuta", "parata di picco", "disarmo"],//forza
    ["cavazione", "parata di contro", "filo", "ricavazione", "inquartata"],//agi
    ["affondo", "parata di tasto", "finta", "stoccata in tempo", "parata di ceduta"]//int
];

function getStr(strAgiInt) {
    return strAgiInt[0];
}
function getAgi(strAgiInt) {

    return strAgiInt[1];
}
function getInt(strAgiInt) {
    return strAgiInt[2];
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//metodi usati in main per aggiornare il numero di carte diviso per tipo
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
export default shop;

//import Deck from "./deck";
export default class Hand{
    constructor(deck){
        this.carte=manoIniziale(deck);
    }
}

//Finzioni mano
/*function manoIniziale(mazzo){
    var ret= new Array();
    ret=mazzo.slice(0,2); //prime 3 carte di mazzo in ret
    mazzo=mazzo.slice(3,); //togli le carte dal mazzo
    return ret;
}*/

function manoIniziale(deck){//in tipo 1.3hr non so perche non funzionava al inizio che sto facendo la stessa cosa??? adesso però ho molto piu familiare la struttura quindi poggers?
    var ret= new Array();
    for(let i=0; i<3; i++){
        ret.push(deck.carte.pop());
    }
    return ret;
}

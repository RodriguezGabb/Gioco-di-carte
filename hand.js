//import Deck from "./deck";
export default class Hand{
    constructor(mazzo){
        this.carte=manoIniziale(mazzo);
    }
}

//Finzioni mano
function manoIniziale(mazzo){
    var ret= new Array();
    ret=mazzo.slice(0,2); //prime 3 carte di mazzo in ret
    mazzo=mazzo.slice(3,); //togli le carte dal mazzo
    return ret;
}

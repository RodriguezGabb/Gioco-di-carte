const nomeAtk= ["affondo", "taglio"]
const nomeDif= ["parata", "ceduta"]
const volori= [1, 2]

class Deck{
    constructor(carte=CreaDeck()){
        this.carte=carte
    }
    get contaCarte(){
        return this.carte.length
    }
    mescola(){
        for(let i=this.contaCarte -1;i>0;i--){
            const newIndex = Math.floor(Math.random()*(i+1))
            const oldValue = this.cards[newIndex]
            this.carte[i] = oldValue
        }
    }
}

class carta{
    constructor(nome, tipo, immagine, costo){//da fare imagine, aggiungere costo
        this.nome=nome
        this.tipo=tipo
        this.immagine=0//dubbio se mettere assieme a nome o solo su html
        this.costo=costo
    }
}

// creazioni carte
function CreaAffondo(){
    return new carta("affondo", "attacco", 0, 1)
}
function CreaParata(){
    return new carta("parata", "difesa", 0, 1)
}
function CreaFinta(){
    return new carta("finta", "finta", 0, 1)
}

// creazione mazzo


function CreaDeck(){
    //ret=[]
    /*for( i=0;i<5;i++){
        ret.push(CreaAffondo())
        ret.push(CreaParata())
        ret.push(CreaFinta())        
    }
    mescola()*/
    return 0
}

// creazione mano
function CreaMano(){

}
export default Deck
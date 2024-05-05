class carta {//id num serve per differenziare le carte dello stesso tipo con un numero che aumenta di uno, es: affondo1 affondo2 affondo3
    constructor(nome, tipo, immagine, costo, idNum) {//da fare imagine, aggiungere costo
        this.nome = nome;
        this.tipo = tipo;
        this.immagine = 0;
        this.costo = costo;
        this.id = nome + idNum;
    }
}
export default carta;
class carta {
    constructor(nome, tipo, immagine, costo, idNum) {//da fare imagine, aggiungere costo
        this.nome = nome;
        this.tipo = tipo;
        this.immagine = 0;//dubbio se mettere assieme a nome o solo su html
        this.costo = costo;
        this.id = nome + idNum;
    }
    getId() {
        return this.id;
    }
}
export default carta;
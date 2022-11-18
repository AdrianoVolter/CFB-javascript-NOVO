class Carro{
    constructor(p_nome, p_tipo){
        this.nome = p_nome
        if(p_tipo == 1){
            this.tipo = "Esportivo"
            this.vel_max = 300
        }else if(p_tipo == 2){
            this.tipo = "Utilitario"
            this.vel_max = 120
        }else if(p_tipo == 3){
            this.tipo = "Passeio"
            this.vel_max = 100
        }else{
            this.tipo = "Military"
            this.vel_max = 200
        } 
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVel(){
        return this.vel_max
    }

    getInfo(){
        return [this.nome, this.tipo, this.vel_max]
    }
    //Setar a propriedade
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVel(vel_max){
        this.vel_max = vel_max
    }

    info(){//Imprime todas as informações do Carro
        console.log("\n")
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade: ${this.vel_max}`)
        console.log("\n")
    }
}
//Cria os carros com as propriedades nome e tipo
let c1 = new Carro("Ferrari",1)
let c2 = new Carro()
let c3 = new Carro()
c1.setNome('Fusca') //setou o nome ferarri para fusca
//c1.setTipo(2)
//c1.setVel(150)
c1.info()
//c3.info()

//console.log(c1.getInfo()[2])
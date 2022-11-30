class Carro {  // Classe PAI
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.ligado = false   
    }
    
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro { //Classe filho 

}

const c1  = new Carro('Normal', 4)

console.log(`Nome do carro: ${c1.nome};\nQuant.de portas: ${c1.portas}`)
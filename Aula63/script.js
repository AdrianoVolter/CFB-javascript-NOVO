const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
let tipo = f_tipoMilitar
console.log(tipo)

tipo.addEventListener("click",(evt)=>{
    console.log("Radio funcionando!")
})
f_tipoNormal.addEventListener("click",(evt)=>{
    console.log("Radio funcionando!")
})

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
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
   }
   atirar = function(){
    if(this.municao > 0){
        this.municao--
    }
   }
}

const c1  = new Carro('Normal', 4)

const c2 = new Militar("Lutador",2,100,50 )
//c2.ligar()
//c2.nome = "Tanque"
// c1.ligar()
// c1.setCor("Preto")

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`\nNome do carro: ${c1.nome}`)
console.log(`Quant. de portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado? "Sim": "Não")}`)
console.log(`Cor do carro: ${c1.cor}\n\n`)



console.log(`\nNome do carro: ${c2.nome}`)
console.log(`Quant. de portas: ${c2.portas}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Ligado: ${(c2.ligado? "Sim": "Não")}`)
console.log(`Cor do carro: ${c2.cor}\n\n`)

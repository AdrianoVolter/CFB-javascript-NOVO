const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")
const f_nome =  document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")

let a_carros = []

//Quando escolher o carro militar
f_tipoMilitar.addEventListener("click",(evt)=>{
    // f_nome = ""
    // f_portas = 0 
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
    console.log("Radio funcionando!")
})
//Quando escolher carro normal
f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome = ""
    f_portas = 0
    f_blindagem.value = 0
    f_municao.value  = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
    console.log("Radio funcionando!")
})
//Gerencia os carros para colocar no html
const gerenciarCarros=()=>{
    carros.innerHTML = ""
    a_carros.forEach((c)=>{
        if(f_tipoNormal.checked){
            const div = document.createElement("div")
            div.setAttribute("class", "carro")
            div.innerHTML = `Nome: ${c.nome}<br>Portas: ${c.portas} ` 
            carros.appendChild(div)
        }else{
            const div = document.createElement("div")
            div.setAttribute("class", "carro")
            div.innerHTML = `Nome: ${c.nome}<br>Portas: ${c.portas}<br>Blindagem: ${c.blindagem}<br>Munição: ${c.municao} ` 
            carros.appendChild(div)
        }
       
    })   
}

btn_addCarro.addEventListener("click",(evt)=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }else{
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarCarros()
    //console.log(div)
})

//Classe cria os carros 
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

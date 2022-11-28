//Usar funçoes no lugar de classes 
function Pessoa(p_nome, p_idade){
    this.nome = p_nome,
    this.idade = p_idade,
    
    this.getNome = function(){
        return this.nome
    },
    this.getIdade = function(){
        return this.idade
    },
    
    //Setar a propriedade
    this.setNome = function(nome){
        this.nome = nome
    },
    this.setIdade = function(idade){
        this.idade = idade
    },

    this.info = ()=>{//Imprime todas as informações do Carro
        console.log("\n")
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("\n");
    };
}

let pessoas = []

const btn_add =  document.querySelector("#btn_add")
const res =  document.querySelector(".res")

const addPessoas = () => { 
    res.innerHTML =""
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}<br/>`
        res.appendChild(div)
        
    })
}


btn_add.addEventListener("click",(evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade =  document.querySelector("#f_idade")
    const p = new Pessoa(nome.value , idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoas()
    console.log(pessoas)

})

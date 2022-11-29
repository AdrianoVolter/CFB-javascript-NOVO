const Pessoa = {
    nome: document.querySelector("#f_nome"),
    idade: document.querySelector("#f_idade"),
    getNome:function(){
        return this.nome.value
    },

    getIdade:function(){
        return this.idade.value
    },

    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    },
}
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa=()=>{    
    const div=document.createElement('div')
    div.setAttribute('class', 'pessoa')          
    div.innerHTML=`Nome: ${Pessoa.getNome()} <br>Idade: ${Pessoa.getIdade()}`
    res.appendChild(div) 
}    

btn_add.addEventListener('click', ()=>{
    const f_nome=document.querySelector('#f_nome')
    const f_idade=document.querySelector('#f_idade')            
    addPessoa()
    f_nome.value='' 
    f_idade.value='' 
    f_nome.focus()
})



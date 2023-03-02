import { contatos } from "./bancoContatos.js"; //importa os contatos da lista contatos ;

let contato = {
    getTodosContatos:function(){  // Retorna todos os contatos ;
        return contatos
    },

    getContato:function(i_cont){ // Retorna um cotato da lista ;
        return contatos[i_cont]
    },

    addContato:function(novoContato, destinoDOM){  // Adiciona um novo contato a lista ;
        const div = document.createElement("div");
        div.setAttribute("class", "contato");
        const p_nome = document.createElement("p");
        p_nome.innerHTML = novoContato.nome
        const p_telefone = document.createElement("p")
        p_telefone.innerHTML = novoContato.telefone
        const p_email = document.createElement("p")
        p_email.innerHTML = novoContato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDOM.appendChild(div)
    }
}

export default contato
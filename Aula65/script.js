const pessoa ={
    nome:"Adriano",
    canal:"CFB Cursos",
    cursos:"javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variaveis",
        aula03:"Condicionais",
        aula04:"Funções",
    }
}
const string_pessoas ={"nome":"Adriano","canal":"CFB Cursos","cursos":"javascript","aulas":{"aula01":"Introdução","aula02":"Variaveis","aula03":"Condicionais","aula04":"Funções"}}

const s_json_pessoas = JSON.stringify(pessoa)// Converte objeto en json
const o_json_pessoas = JSON.parse(s_json_pessoas)//Converte String Json  para objeto

console.log(o_json_pessoas)
// console.log(pessoa.canal)
// console.log(pessoa.nome)
// console.log(pessoa.aulas.aula04)
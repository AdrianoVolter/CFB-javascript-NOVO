const data =new Date()

//console.log(Date.now()) //Timestamp
let dia = data.getUTCDate()
let mes = data.getMonth()+1
let ano = data.getFullYear()

console.log(dia+"/"+mes+"/"+ano)


//getDate()   = dia do mes 
//getDay() = Dia da semana (nuemro)
//getFullYear() = Ano com 4 digito 
//getHours() =  Horas
//getMilliseconds() = Milesegundos
//getMitutes() = Minutos
//getMonth() = Mês
//getSeconds() = Segundos
//getTime() = Timestamp (millesegundos  desde 1 de janeiro de 1970, 00:00:00 UTC)
//Date.now() = Timestamp (millesegundos  desde 1 de janeiro de 1970, 00:00:00 UTC)
//getTimezoneOffset() = Timezone da localidade
//setDate()   = Define o dia do mes 
//setDay() = Define o Dia da semana (nuemro)
//setFullYear() = Define o Ano com 4 digito 
//setHours() = Define as Horas
//setMilliseconds() = Define os Milesegundos
//setMitutes() = Define os Minutos
//setMonth() = Define o Mês
//setSeconds() = Define os Segundos

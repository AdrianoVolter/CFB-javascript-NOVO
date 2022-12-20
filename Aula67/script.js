const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

Nave.prototype.vidas = 3

const n1 = new Nave(100)

console.log(Nave)
console.log(n1.energia)
console.log(n1)
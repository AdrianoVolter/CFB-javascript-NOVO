class Npc{
    constructor(energia){
        this.energia = energia
    }
}


const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(40)

console.log(npc1.energia)
console.log(npc2.energia)
console.log(npc3.energia)
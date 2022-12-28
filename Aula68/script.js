//Polimorfismo
class Carro{
    constructor(tipo, estagioTurbo){
        this.Turbo = new Turbo(1)
        if(tipo == 1){
            this.velMax = 120
        }else if(tipo == 2){
            this.velMax = 160
        }else if(tipo == 3){
            this.velMax = 200
        }
        this.velMax = this.Turbo
    }
}


class Turbo{
    constructor(e){
        if(e == 0){
            this.pot = 0
        }else if(e == 1){
            this.pot = 50
        }else if(e == 2){
            this.pot = 75
        }else if(e == 3){
            this.pot = 100
        }
    }
    
}
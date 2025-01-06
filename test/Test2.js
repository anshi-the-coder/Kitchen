class Car{
    constructor(Model,color,Autometic){
        this.Model= Model
        this.color= color
        this.Autometic= Autometic
    }
    printCarDetails(){
        console.log(`The car model is:${this.Model}, color is:${this.color}, Autometic is:${this.Autometic}`)
    }
}

let Defender = new Car(2025,"Black",true)
let Xuv7oo = new Car(2025,"Navi blue",false)
let Fortuner = new Car(2025,"Black",true)
let Nexon = new Car(2025,"Black",false)

Defender.printCarDetails()
Xuv7oo.printCarDetails()
Fortuner.printCarDetails()
Nexon.printCarDetails()

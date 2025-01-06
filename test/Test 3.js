class Clothes{
    constructor(color,cost,indian){
        this.color=color
        this.cost=cost
        this.indian=indian
    }
    printClothesDetails(){
        console.log(`The clothes color is: ${this.color},cost is:${this.cost},indian is:${this.indian}`)
    }
}
let saree= new Clothes("Yellow",1000,true)
let Jeans= new Clothes("Black",1000,false)
let suit= new Clothes("White",1000,true)
saree.printClothesDetails()
Jeans.printClothesDetails()
suit.printClothesDetails()

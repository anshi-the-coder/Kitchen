class Kitchen{
    constructor({utensils,spices,vegetables,order}){
        this.utensils=utensils
        this.order=order
        this.vegetables=vegetables
        this.spices=spices
    }
    checkUtensils(){
        console.log(`Available utensils ${this.utensils.join(", ")}`)
    }
    checkSpices(){
        console.log(`Available spices ${this.spices.join(", ")}`)
    }
    prepareIngredients(){
        console.log(`Washing & Chopping ${this.vegetables.join(", ")}`)
    }
    preparingOrder(){
        console.log(`Preparing order: ${this.order} with vegetables: ${this.vegetables.join(", ")}, spices: ${this.spices.join(", ")}`)
    }
    servingDish(){
        console.log(`serving dish: ${this.order}`)
    }
    cleaningUtensils(){
        console.log(`cleaning utensils: ${this.utensils.join(", ")}`)
    }

}
let obj={
    utensils:["Kadai","spatula","chooping board"],
    spices:["Turmeric","chilli","Black Pepper"],
    vegetables:["Paneer","Tomato","Onion"],
    order:"Kadai Paneer"
}
let RajoKitchen= new Kitchen(obj)
RajoKitchen.checkUtensils()
RajoKitchen.checkSpices()
RajoKitchen.prepareIngredients()
RajoKitchen.preparingOrder()
RajoKitchen.servingDish()
RajoKitchen.cleaningUtensils()


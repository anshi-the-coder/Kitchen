class Animal{
    constructor({name,color}){
        this.name= name
        this.color=color
    }
    AnimalLooks(){
        console.log(`Animal name is: ${this.name} and the color is: ${this.color}`)
    }
}
class Cat extends Animal{
    constructor(params){
        super(params)
        this.countryOrigin=params.countryOrigin
    }
    importedFromCountry(){
        console.log(`This cat is imported from : ${this.countryOrigin}`)
    }
}

class Dog extends Animal{
    constructor(params){
        super(params)
        this.sounds=params.sounds
    }
    makeSound(){
        console.log(`The dogs sound is: ${this.sounds}`)
    }
}

let obj={
    name:"Doozy",
    color:"Brown",
    countryOrigin:"America"
}

let cat1= new Cat(obj)
cat1.AnimalLooks()
cat1.importedFromCountry()

obj={
    name:"Moti",
    color:"White",
    sounds:"Bark"
}
let dog1= new Dog(obj)
dog1.AnimalLooks()
dog1.makeSound()
class Person{
    constructor(age,name){
        this.name= name
        this.age= age
    }
    printNameAndAge(){
        console.log(`The person name is : ${this.name} and age is : ${this.age}`)
    }   
}

let Kaushal= new Person(17,"Kaushal")
let Gungun = new Person(21,"Gungun")
Gungun.printNameAndAge()
Kaushal.printNameAndAge()
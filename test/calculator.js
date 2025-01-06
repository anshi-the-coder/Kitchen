class Calculator{
    constructor(a,b){
        this.a= a
        this.b=b
    }
    add(){
        console.log(`The addition of a=${this.a} and b=${this.b} is : ${this.a+this.b}`)
    }
    sub(){
        console.log(`The subtraction of a=${this.a},b=${this.b} is:${this.a-this.b}`)
    }
    multiply(){
        console.log(`The multiply of a=${this.a},b=${this.b} is:${this.a*this.b}`)
    }
    division(){
        console.log(`The division of a=${this.a},b=${this.b} is:${this.a/this.b}`)
    }
}
let calculate= new Calculator(10,2)
calculate.add()
calculate.sub()
calculate.multiply()
calculate.division()




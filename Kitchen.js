// Kitchen Class Definition
class Kitchen {

    // Constructor to initialize kitchen properties
    //this constructor or function execute when we create the object of the Kitchen Class
    constructor({ utensils, spices, order, vegetables, extraRequirements }) {
        this.utensils = utensils;
        this.spices = spices;
        this.order = order;
        this.vegetables = vegetables;
        this.extraRequirements = extraRequirements;
        this.preparedDish = null; // Encapsulation
        this.washingDone=false
    }

    // Method to check available utensils
    checkUtensils() {
        console.log(`Available utensils: ${this.utensils.join(", ")}`);
    }

    // Method to check available spices
    checkSpices() {
        console.log(`Available spices: ${this.spices.join(", ")}`);
    }

    // Method to prepare ingredients
    prepareIngredients() {
        this.washingDone=true
        console.log(`Washing and chopping: ${this.vegetables.join(", ")}`);
    }

    // Method to cook the dish
    cookDish() {
        console.log(`Cooking "${this.order}" with ${this.spices.join(", ")} and ${this.vegetables.join(", ")}`);
        this.preparedDish = this.order;
    }

    // Method to serve the dish
    serveDish() {
        if (this.preparedDish) {
            console.log(`Serving ${this.preparedDish}! Enjoy your meal.`);
        } else {
            console.log("No dish has been prepared yet!");
        }
    }

    // Method to clean utensils
    cleanUtensils() {
        if(this.washingDone && this.preparedDish){
            console.log("Cleaning all utensils...");
        }else{
            console.log("No cooking, why cleaning the utensils.")
        }
    }
}

// Specialized Class for Dessert Preparation (Inheritance)
class DessertKitchen extends Kitchen {
    constructor(params) {
        super(params); // Call the parent class constructor
    }

    // Overriding the cookDish method (Polymorphism)
    cookDish() {
        console.log(`Preparing the dessert: "${this.order}" using ${this.extraRequirements.join(", ")}`);
        this.preparedDish = this.order;
    }
}

// Helper function to demonstrate abstraction
function cookMeal() {
    console.log("Let's cook a meal step by step!");
    let obj={
        utensils: ["Pan", "Knife", "Cutting Board"],
        spices: ["Salt", "Pepper", "Turmeric"],
        order: "Vegetable Stir-Fry",
        vegetables: ["Carrot", "Gobhi", "Potato"],
        extraRequirements: ["namak","kaali mirch"]
    }
    // Step 1: Initialize Kitchen
    const kitchen = new Kitchen(obj);
    
    // Step 2: Check and prepare ingredients
    kitchen.checkUtensils();
    kitchen.checkSpices();
    kitchen.prepareIngredients();

    // Step 3: Cook and serve the dish
    kitchen.cookDish();
    kitchen.serveDish();
    kitchen.cleanUtensils();
}

// Helper function to demonstrate DessertKitchen
function cookDessert() {
    console.log("Let's prepare a dessert!");

    // Initialize Dessert Kitchen
    const dessertKitchen = new DessertKitchen({
        utensils: ["Bowl", "Whisk", "Spoon"],
        spices: ["Sugar", "Vanilla Essence"],
        order: "Vanilla Ice Cream",
        vegetables: [],
        extraRequirements: ["Milk", "Cream"]
    });

    // Steps to prepare the dessert
    dessertKitchen.checkUtensils();
    dessertKitchen.checkSpices();
    dessertKitchen.cookDish();
    dessertKitchen.serveDish();
    dessertKitchen.cleanUtensils();
}

// Run the examples
cookMeal();
// console.log("\n");
// cookDessert();

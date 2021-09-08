// #### Dinner Class
// Create a Dinner class with attributes
// dishName, protein, veggie, and price.
// Create a function that prints each attribute.
// Create an object of the class in your main function.

class Dinner {
  // Create a Dinner class
  // requires 'constructor' method
  constructor(dishName, protein, veggie, price) {
    this.dishName = dishName;
    this.protein = protein;
    this.veggie = veggie;
    this.price = price;
  }
}

function main() {
  let dish1 = new Dinner(
    "Chicken Pad Thai",
    "Chicken",
    "Garlic, Ginger, Cilantro, Bean Sprouts",
    "$18.00"
  );
  console.log(
    ` Dish 1 Name: ${dish1.dishName}, Protein: ${dish1.protein}, Veggie: ${dish1.veggie}, Price ${dish1.price}`
  );
}

main();

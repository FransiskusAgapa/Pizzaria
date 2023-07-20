// create an object - Pizza
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  // create an object
  let pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

// randomly pick = pizza
function randomPizza(pizzaArr) {
  return pizzaArr[Math.floor(Math.random() * pizzaArr.length)];
}

console.log("\n");
let firstPizza = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log("First pick: ", firstPizza);
console.log("\n");
let secondPizza = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log("Second pick: ", secondPizza);
console.log("\n");
let thirdPizza = pizzaOven("Chocolate shell", "Modern", "mozzarella", [
  "Mushrooms",
  "Onion",
  "Garlic",
]);
console.log("Third pick: ", thirdPizza);
console.log("\n");
let fourthPizza = pizzaOven("Tuna", "Classic", "Cedar", ["Oreo", "Spinach"]);
console.log("Fourth pick: ", fourthPizza);

console.log("\n");
let allPizzas = [];
allPizzas.push(firstPizza);
allPizzas.push(secondPizza);
allPizzas.push(thirdPizza);
allPizzas.push(fourthPizza);

console.log("Random pick: ", randomPizza(allPizzas));

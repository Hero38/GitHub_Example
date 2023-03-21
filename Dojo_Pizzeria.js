var Pizza = {
  crustType: "deep dish",
  sauceType: "traditional",
  cheeses: ["mozzarella"],
  toppings: ["pepperoni", "sausage"],
};

function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var Pizza = {};
  Pizza.crustType = crustType;
  Pizza.sauceType = sauceType;
  Pizza.cheeses = cheeses;
  Pizza.toppings = toppings;
  return Pizza;
}

var myPizza = pizzaOven("deep dish", "traditional", "mozzarella", [
  "chicken",
  "jalapeno",
]);
console.log(myPizza);

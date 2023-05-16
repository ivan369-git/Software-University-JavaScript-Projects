function petFood (input){
let packagesDogFood = Number(input[0]);
let packagesCatFood = Number(input[1]);
let dogFoodPrice = packagesDogFood*2.5;
let catFoodPrice = packagesCatFood*4;
let totalPrice = dogFoodPrice+catFoodPrice;
console.log(totalPrice);
}
petFood(["5","4"])
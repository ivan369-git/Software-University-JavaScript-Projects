function foodDelivery(input){
let chickenMenu = Number (input[0]);
let fishMenu = Number (input[1]);
let vegeterianMenu = Number(input[2]);
let chickenMenuPrice = chickenMenu*10.35;
let fishMenuPrice = fishMenu*12.4;
let vegeterianMenuPrice = vegeterianMenu*8.15;
let dessertWithDiscount = (chickenMenuPrice + fishMenuPrice + vegeterianMenuPrice) *0.2
let delivery = 2.5;
let totalPrice = chickenMenuPrice+fishMenuPrice+vegeterianMenuPrice+dessertWithDiscount+delivery
console.log(totalPrice);
}
foodDelivery(["2","4","3"])
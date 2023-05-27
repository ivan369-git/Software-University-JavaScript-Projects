function Greening(input){
let totalSquareArea = Number(input[0]);
let pricePerSqM = 7.61
let totalPrice = totalSquareArea*pricePerSqM
let discount = totalPrice*0.18
let priceWithDiscount = totalPrice-discount
let textPriceWithDiscount = `The final price is: ${priceWithDiscount} lv.`
let textDiscount = `The discount is: ${discount} lv.`
console.log(textPriceWithDiscount)
console.log(textDiscount)
}
Greening(["550"])
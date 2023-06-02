function interestRate(input){
let depositedSum = Number(input[0]);
let depositMonths = Number(input[1]);
let annualIncrease = Number(input[2]);
let decimal = annualIncrease / 100;
let sum = depositedSum + depositMonths * ((depositedSum * decimal) / 12);
console.log (sum);
}
interestRate(["200","3","5.7"])
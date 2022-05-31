// Problem 2:
function pandaCost(shingaraQuantity, somochaQuantity, jilapiQuantity) {
let shingaraPrice = shingaraQuantity * 7;
let somochaPrice = somochaQuantity * 10;
let jilapiPrice = jilapiQuantity * 15;
if(shingaraQuantity < 0 || somochaQuantity < 0 || jilapiQuantity < 0 ){
return "Please Enter a valid quantity"; // Error handeling Part
}
else{
let totalPrice = shingaraPrice + somochaPrice + jilapiPrice; // Calculation Part
return totalPrice;
}
}
let cost = pandaCost(15, 20, 10);
console.log(cost);

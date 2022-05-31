// Problem 3:
function picnicBudget(numofPeople) {
let totalCost = 0;
if (numofPeople > 0 && numofPeople <= 100) {
totalCost = numofPeople * 5000;
} else if (numofPeople > 100 && numofPeople <= 200) {
let first100 = 100 * 5000;
let remaining = numofPeople - 100;
let secondPart = remaining * 4000;
totalCost = first100 + secondPart;
} else if (numofPeople > 200) {
let first100 = 100 * 5000;
let second100 = 100 * 4000;
let remaining = numofPeople - 200;
let thirdPart = remaining * 3000;
totalCost = first100 + second100 + thirdPart;
} else {
console.log('Enter the number of people'); // Error handeling Part
}
return totalCost;
}
let totalBudget = picnicBudget(350);
console.log(totalBudget);

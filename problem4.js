// Problem 4 :
function oddFriend(friends) {
let odds = [];
for (let i = 0; i < friends.length; i++){
if(typeof friends[i]!='string') {
return "Enter your friends name"; // Error Handeling part
}
if ((friends[i].length % 2) != 0) {
odds.push(friends[i]); // Odd friends part
}
}
return odds;
}
let oddFriends =oddFriend(['Amit', 'Ana', 'Rahim']) ;
console.log(oddFriends);
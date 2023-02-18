var a = ('\nQ 24');
    console.log(a);

var kitchen = 'Ali';
console.log("Is kitchen = 'ali' I predict False");
console.log(kitchen == 'ali');

var name1 = "ali"
var name2 = "usman"
var name3 = "yasir"
var name4 = "ali"



console.log(name1 == name2);
console.log(name1 != name3);  //unequality
console.log(name1 == name4);
console.log('lower case:' + name1.toLowerCase());
console.log(name1 < name2);
console.log(name2 > name3);
console.log(name1 >= name4);
console.log(name2<= name3);
console.log('\n');

let x = 5;
let y = 9;
if (x > 0 && y > 0) {    // And mehtod is use where a and b both correct. 
  console.log('Both x and y is correct');
}

if (x > 0 || y < 0) {    // In this condition one of them is true
  console.log("At least one of x and y is positive")
}

let num = [1,2,3,4,5,6,7,8,9];
var itemToFind =7;
if (num.includes(itemToFind)){
  console.log (`\n ${itemToFind} is in the array`);
} else {
  console.log( `${itemToFind} is not in the array`);
}



var itemToFind =10;

if (num.includes(itemToFind)){
  console.log(`${itemToFind} is in the array`)
}  else {
  console.log( `${itemToFind} is not in the array`);
}
var a = ('\nQ 18\n');
console.log(a);
var myArray = ['Naran kahan', 'kalam', 'Makha', 'Madina', 'Europe Countries'];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i], ('\n'));
}
var sortedArray = myArray.slice().sort(); //Alphabetical order
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
('\n');
for (var i = 0; i < myArray.length; i++) {
    console.log(('\n'), myArray[i]);
}
var sortedArray = myArray.slice().sort(function (a, b) { return b.localeCompare(a); }); // reverse alphabetical order 
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]), ("\n");
}
var reversedArray = myArray.reverse(); // reversed array
for (var i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
var reversedArray = myArray.reverse();
for (var i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
var sortedArray = myArray.sort();
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
var sortedArray = myArray.sort(function (a, b) { return b.localeCompare(a); });
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}

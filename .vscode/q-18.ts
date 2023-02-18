var a =('\nQ 18\n');
 console.log(a);

   

   const myArray = ['Naran kahan','kalam','Makha','Madina','Europe Countries'];

  

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i],('\n'));
}



var sortedArray = myArray.slice().sort();    //Alphabetical order

for (let i = 0; i < sortedArray.length; i++) {
  console.log(sortedArray[i]);
}
('\n')
for (let i = 0; i < myArray.length; i++) {
  console.log(('\n'),myArray[i]);
}
var sortedArray = myArray.slice().sort((a, b) => b.localeCompare(a));   // reverse alphabetical order 

for (let i = 0; i < sortedArray.length; i++) {   
  console.log(sortedArray[i]);
}
for (let i = 0; i< myArray.length; i++){
  console.log(myArray[i]),("\n");
}
var reversedArray = myArray.reverse();  // reversed array
for (let i = 0; i<reversedArray.length; i++){
  console.log(reversedArray[i]);
}
var reversedArray = myArray.reverse();
for (let i =0; i<reversedArray.length; i++){
console.log(reversedArray[i]);
}
var sortedArray=myArray.sort();
for (let i=0; i<sortedArray.length; i++){
  console.log(sortedArray[i]);
}
var sortedArray=myArray.sort((a, b) => b.localeCompare(a));
for (let i=0; i<sortedArray.length; i++){
console.log(sortedArray[i]);
}
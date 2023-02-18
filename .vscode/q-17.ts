
var myName = '\nQ 17';
console.log(myName);

alphas = ['Qasim','yasir', 'Arslan', 'Usama'];

console.log("Sorry all of you we have the capsity only for two peoples today")

console.log(alphas[0], "sorry for the day");
console.log(alphas[1], "sorry for the day");
console.log(alphas[2], "sorry for the day");
console.log(alphas[3], "sorry for the day");

var names = alphas;
var nameToRemove = "Qasim";

var index = names.indexOf(nameToRemove);
if (index !== -1) {
  names.splice(index, 4);
}

console.log(names);

console.log(alphas[0], "please stay here you have oppurnity to enjoy you dinner");
console.log(alphas[1], "please stay here you have oppurnity to enjoy you dinner");


var ar = [alphas];
    
    delete ar[0]; // delete element with index 0
    
    delete ar[1];  // delete element with index 1
    console.log( ar ); 
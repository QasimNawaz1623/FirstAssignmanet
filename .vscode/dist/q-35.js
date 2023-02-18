var a = ('\nQ 35');
console.log(a);
//part 1
var animals_name = ["Dog", "cat", "Horse", "rabbit"];
for (var i = 0; i < animals_name.length; i++) {
    console.log(animals_name[i]);
}
//part 2
for (var i = 0; i < animals_name.length; i++) {
    if (animals_name[i] == 'Dog') {
        console.log("A dog would make a great pet");
    }
    else if (animals_name[i] == 'cat') {
        console.log("A cat is very cute pet");
    }
    else if (animals_name[i] == 'Horse') {
        console.log("Horse is very harmful");
    }
    else
        console.log("Horse is really a very harm full for farmers");
}

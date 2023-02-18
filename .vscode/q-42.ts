var a = ('\nQ 42');
console.log(a);

function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
  return magicians;
}
let magicians = ["Lance Burton","Ricky Jay","Mark Wilson", "Derren Brown"];

let great_magicians = make_great(magicians);
show_magicians(great_magicians);
var a = ('\nQ 33');
    console.log(a);
let numbers = [1,2,3,4,5,6,7,8,9];
for (let i=0; i<numbers.length; i++){
  let num =  numbers[i];
  let ending;
  if (num == 1){
ending = "st";
  }
  else {
    ending = "th";
  }
  console.log(num + ending);
}
var a = ('\nQ 32');
    console.log(a);


let currentUsername = ["ali","ahmed","arlsan","usama"];
let newusername = ["kamran","ali","muneeb","usama"];
for (let i =0; i<newusername.length; i++){
  let newusernameTaken = currentUsername.some(function(currentUsername){
    return currentUsername.toLowerCase() == newusername[i].toLowerCase();
  });
  if (newusernameTaken) {
    console.log(`Sorry, the name ${newusername[i]} is already taken. Please enter a new username.`)
  }else {
    console.log(`Congrulations, the ${newusername[i]} is availabel!`);
  }
}
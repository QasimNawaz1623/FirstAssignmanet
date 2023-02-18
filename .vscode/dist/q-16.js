var myName = 'Q 16';
console.log(myName);
alphas = ['Ahmed', 'Arslan', 'Usama'];
alphas[0] = 'yasir';
console.log("AOA Now I found a big table reserve tonight.");
alphas.unshift("Qasim");
console.log(alphas);
alphas.splice(1, 0, "mattiullah");
console.log(alphas);
alphas.push("Nasir");
console.log(alphas);
var arrays = [alphas[0], alphas[1], alphas[2], alphas[3], alphas[4], alphas[5]];
var message = "Please come tonight on dinner with me";
arrays.forEach(function (alphas) {
    console.log(alphas, message);
});

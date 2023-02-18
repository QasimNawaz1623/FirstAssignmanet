var a = ('\nQ 28');
console.log(a);
var age = 3;
var stagesOfLife = [2, 4, 13, 20, 65];
for (var i = 0; i < stagesOfLife.length; i++) {
    if (age <= stagesOfLife[i]) {
        if (i < 0) {
            console.log("The person is a baby");
        }
        else if (i == 0 && i < 1) {
            console.log("This person is a toddler");
        }
        else if (i == 1 && i < 2) {
            console.log("This person is a kid.");
        }
        else if (i == 2 || i < 3) {
            console.log("This person is a teenager.");
        }
        else if (i == 3 || i < 4) {
            console.log("The person is an adult");
        }
        else if (i == 4) {
            console.log("The person is an elder");
        }
        break;
    }
}
if (age > stagesOfLife[stagesOfLife.length - 1]) {
    console.log("This person is not a baby, toddler, or kid.");
}

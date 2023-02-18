var a = ('\nQ 33');
console.log(a);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    var ending = void 0;
    if (num == 1) {
        ending = "st";
    }
    else {
        ending = "th";
    }
    console.log(num + ending);
}

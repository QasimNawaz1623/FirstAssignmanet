var a = ('\nQ 32');
console.log(a);
var currentUsername = ["ali", "ahmed", "arlsan", "usama"];
var newusername = ["kamran", "ali", "muneeb", "usama"];
var _loop_1 = function (i) {
    var newusernameTaken = currentUsername.some(function (currentUsername) {
        return currentUsername.toLowerCase() == newusername[i].toLowerCase();
    });
    if (newusernameTaken) {
        console.log("Sorry, the name " + newusername[i] + " is already taken. Please enter a new username.");
    }
    else {
        console.log("Congrulations, the " + newusername[i] + " is availabel!");
    }
};
for (var i = 0; i < newusername.length; i++) {
    _loop_1(i);
}

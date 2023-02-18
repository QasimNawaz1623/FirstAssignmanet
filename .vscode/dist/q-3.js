var myName = 'Q 3';
console.log(myName);
var Name = "My name is qasim nawaz";
console.log("Lowercase:" + Name.toLowerCase());
var Name = "My name is qasim nawaz";
console.log("Uppercase:" + Name.toUpperCase());
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function (s) {
        return s.toUpperCase();
    });
}
console.log("TitleCase:", titleCase('My name is qasim nawaz')); //

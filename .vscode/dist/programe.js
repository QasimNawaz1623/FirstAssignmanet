"use strict";
// Question 2 (Two)
var myName = '\nQ 2';
console.log(myName);
var Name = "Eric";
console.log("hello" + Name, ",would you like to learn some phython language\n"); // Question 3 (Three)
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
console.log("TitleCase:", titleCase('My name is qasim nawaz')); //Question 4 (Four)
var myName = '\nQ 4';
console.log(myName);
var Name = "Albert Einstein once said,: ";
var hello = Name + "“A person who never made a mistake never tried anything new.”\n";
console.log(hello); //Question 5 (Five)
var myName = 'Q 5';
console.log(myName);
var famous_person = "My elders said:";
var Message = "Everything creates a God.\n";
console.log(famous_person + Message);
//Question 6 (Six)
var myName = 'Q 6';
console.log(myName);
var person_Name = "\tRaja Qasim Nawaz\n \tJam Muhammad Ahmed Lar\n \tUsama khan\n";
var hello = person_Name;
console.log(hello);
//Question 7 (seven)
var myName = 'Q 7';
console.log(myName);
var n1 = 4;
var n2 = 4;
console.log(n1 + n2);
var n3 = 13;
var n4 = 5;
console.log(n3 - n4);
var n5 = 4;
var n6 = 2;
console.log(n5 * n6);
var n7 = 40;
var n8 = 5;
console.log(n7 / n8);
//Question 8
var myName = 'Q 8';
console.log(myName);
console.log("________________________________________");
console.log(5 + 3);
console.log("________________________________________");
console.log(5 + 3);
console.log("________________________________________");
console.log(5 + 3);
console.log("________________________________________");
console.log(5 + 3);
console.log("________________________________________");
//Question 9 (Nine)
var myName = 'Q 9';
console.log(myName);
var z = 9;
console.log("\nMy favourite number is " + z);
//Question 10 (Ten)
var myName = '\nQ 10';
console.log(myName); // Qasim Nawaz  13/02/23
//This programe is doing a space and go to next line
var person_Name = "\tRaja Qasim Nawaz\n \tJam Muhammad Ahmed Lar\n \tUsama khan\n";
console.log(person_Name); // Qasim Nawaz 13/02/23
//In this function we can use to define our my favourite number
var z = 9;
console.log("My favourite number is " + z);
//Question 11 (Eleven)
var myName = '\nQ 11';
console.log(myName);
var alphas;
alphas = ['Ali', 'Ahmed', 'Arslan', 'Usama', 'Qasim\n'];
console.log(alphas[0]);
console.log(alphas[1]);
console.log(alphas[2]);
console.log(alphas[3]);
console.log(alphas[4]);
//Question 12 (twelve)
var myName = 'Q 12';
console.log(myName);
var alphas;
alphas = ["Ali", "Ahmed", "Arslan", "Usama", "Qasim"];
console.log(alphas[0], "is my good friend");
console.log(alphas[1], "is my good friend");
console.log(alphas[2], "is my good friend");
console.log(alphas[3], "is my good friend");
console.log(alphas[4], "is my good friend\n");
//Question 13 (thirteen)
var myName = 'Q 13';
console.log(myName);
var alphas;
alphas = ['Horse:', 'bike:', 'car:', 'bus:'];
console.log(alphas[0], 'My wish to go anywhere on my horse.');
console.log(alphas[1], 'I am visit more areas on my bike.');
console.log(alphas[2], 'The movement for enjoy is to drive for a long trip.');
console.log(alphas[3], 'The best movement is to go kashmir tour on a local bus.\n');
//Question 14 (Fourteen)
var myName = 'Q 14';
console.log(myName);
alphas;
alphas = ['Ahmed', 'Arslan', 'Usama'];
console.log(alphas[0], "Please come tonight on dinner with me");
console.log(alphas[1], "Please come tonight on dinner with me");
console.log(alphas[2], "Please come tonight on dinner with me\n");
//Question 15 (Fivteen)
var myName = 'Q 15';
console.log(myName);
var class_mates = ['Ahmed', 'Arslan', 'Usama'];
alphas[0] = 'yasir';
console.log(alphas[0], "Please come tonight on dinner with me");
console.log(alphas[1], "Please come tonight on dinner with me");
console.log(alphas[2], "Please come tonight on dinner with me\n");
//Question 16 (Sixteen)
var myName = 'Q 16';
console.log(myName);
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
//Question 17
var myName = '\nQ 17';
console.log(myName);
console.log("Sorry all of you we have the capsity only for two peoples today");
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
delete ar[1]; // delete element with index 1
console.log(ar);
//Question 18
var a = ('\nQ 18\n');
console.log(a);
var myArray = ['Naran kahan', 'kalam', 'Makha', 'Madina', 'Europe Countries'];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i], ('\n'));
}
var sortedArray = myArray.slice().sort(); //Alphabetical order
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
('\n');
for (var i = 0; i < myArray.length; i++) {
    console.log(('\n'), myArray[i]);
}
var sortedArray = myArray.slice().sort(function (a, b) { return b.localeCompare(a); }); // reverse alphabetical order 
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]), ("\n");
}
var reversedArray = myArray.reverse(); // reversed array
for (var i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
var reversedArray = myArray.reverse();
for (var i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
var sortedArray = myArray.sort();
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
var sortedArray = myArray.sort(function (a, b) { return b.localeCompare(a); });
for (var i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
//Question 19
var a = ('\nQ 19');
console.log(a);
var persons = (class_mates);
var text = ('We can invite two peoples today');
for (var i = 0; i < persons.length; i++) {
    console.log(persons[i], text);
}
//Question 20
var a = ('\nQ 20');
console.log(a);
var Countries = ['Urdu', 'Arbi', 'Pashtu', 'Farsi', 'Turkish'];
for (var i = 0; i < Countries.length; i++) {
    console.log(Countries[i]);
}
//Question 21
var a = ('\nQ 21');
console.log(a);
var language = {
    pakistan: 'Urdu,',
    SaudiArbia: 'Arbi,',
    Afghanistan: 'Pashtu,',
    Iran: 'Farsi,',
    Turkey: 'Turkish,',
    culture: {
        pakistan: 'punjabi,',
        SaudiArbia: 'Arbi,',
        Afghanistan: 'Afghans,',
        Iran: 'persian,',
        Turkey: 'collectivist, '
    }
};
console.log(language.pakistan + language.SaudiArbia + language.Afghanistan + language.Iran + language.Turkey);
console.log(language.culture.pakistan + language.culture.SaudiArbia + language.culture.Afghanistan + language.culture.Iran + language.culture.Turkey);
//Question 22
var a = ('\nQ 22');
console.log(a);
var my_list = [1, 2, 3, 4, 5];
console.log(my_list[5]); //index error
var my_list = [1, 2, 3, 4, 5];
console.log(my_list[4]);
//Question 23
var a = ('\nQ 23');
console.log(a);
var car = 'subaru';
console.log("Is car = 'subaru'? I predict True.");
console.log(car == 'subaru');
var bike = 'Ahmed';
console.log("Is bike = 'ahmed'? I predict True");
console.log(bike == 'Ahmed');
var jet = 'Malik Riaz';
console.log("Is jet == 'Malik riaz'? I predict True ");
console.log(jet == 'Malik Riaz');
var house = 'Usman';
console.log("Is house = 'usman'? I predict True ");
console.log(house == 'Usman');
var boat = 'Ahmed';
console.log("Is boat = 'Ahmed'? I predict True");
console.log(boat == 'Ahmed');
var mobile = 'ALi';
console.log("Is mobile = 'Ahmed'? I preduct False ");
console.log(mobile == 'Ahmed');
var laptop = 'Usama';
console.log("Is laptop = 'Arslan'? I predict False");
console.log(laptop == 'Arslan');
var mobile = 'Saddam';
console.log("Is mobile = 'ALi'? I predict False");
console.log(mobile == 'ALi');
var bag = 'usama';
console.log("Is bag = 'Wahid'? I predict False");
console.log(bag == 'Wahid');
var shop = 'kamran';
console.log("Is shop = 'Kamran'? I predict False");
console.log(shop == 'Kamran');
//Question 24
var a = ('\nQ 24');
console.log(a);
var kitchen = 'Ali';
console.log("Is kitchen = 'ali' I predict False");
console.log(kitchen == 'ali');
var name1 = "ali";
var name2 = "usman";
var name3 = "yasir";
var name4 = "ali";
console.log(name1 == name2);
console.log(name1 != name3); //unequality
console.log(name1 == name4);
console.log('lower case:' + name1.toLowerCase());
console.log(name1 < name2);
console.log(name2 > name3);
console.log(name1 >= name4);
console.log(name2 <= name3);
console.log('\n');
var x = 5;
var y = 9;
if (x > 0 && y > 0) { // And mehtod is use where a and b both correct. 
    console.log('Both x and y is correct');
}
if (x > 0 || y < 0) { // In this condition one of them is true
    console.log("At least one of x and y is positive");
}
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var itemToFind = 7;
if (num.includes(itemToFind)) {
    console.log("\n " + itemToFind + " is in the array");
}
else {
    console.log(itemToFind + " is not in the array");
}
var itemToFind = 10;
if (num.includes(itemToFind)) {
    console.log(itemToFind + " is in the array");
}
else {
    console.log(itemToFind + " is not in the array");
}
//Question no 25
var a = ('\nQ 25');
console.log(a);
var alien_color = "green";
if ((alien_color) === "green") {
    console.log("player earned 5 points");
}
if ((alien_color) === "green") {
    console.log("True");
}
else {
    console.log("");
}
//Question no 26
var a = ('\nQ 26');
console.log(a);
if ((alien_color) === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
if ((alien_color) == "green") {
    console.log("\nplayer just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
if ((alien_color) != "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
//Question no 27
var a = ('\nQ 27');
console.log(a);
var alien_colors = ["green", "yellow", "red"];
alien_color = "green";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else {
    console.log("player earned 15 points");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else {
    console.log("player earned 15 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10 points");
}
else {
    console.log("player earned 15 points");
}
//Question no 28
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
// Question 29
var a = ('\nQ 29');
console.log(a);
var Favourite_fruits;
Favourite_fruits = ["mango", "Orange", "stawbery", "leechi"];
if (Favourite_fruits.includes(Favourite_fruits[0])) {
    console.log(Favourite_fruits + ") is the array");
}
else if (Favourite_fruits.includes(Favourite_fruits[1])) {
    console.log(Favourite_fruits + "}) is in the array");
}
else if (Favourite_fruits.includes(Favourite_fruits[2])) {
    console.log(Favourite_fruits + ") is in the array");
}
else {
    console.log(Favourite_fruits + ") is in the array");
}
//part 2
var favourite_fruits = ['mango', 'banana', 'strawberry'];
if (favourite_fruits.includes('mango')) {
    console.log("you really like mango");
}
if (favourite_fruits.includes('banana')) {
    console.log("you really like bananas");
}
if (favourite_fruits.includes('strawberry')) {
    console.log("you really like strawberry");
}
//Question 30
var a = ('\nQ 30');
console.log(a);
var username = ['ali', 'ahmed', 'arslan', 'usama', 'admin'];
for (var i = 0; i < username.length; i++) {
    if (username[i] == 'admin') {
        console.log('Hello admin would you like to see status report?');
    }
    else {
        console.log("Hello " + username[i] + ", thankyou for logging in again");
    }
}
//Question 31
var a = ('\nQ 31');
console.log(a);
if (stagesOfLife.length == 0) {
    console.log("list is empty");
}
else {
    console.log(stagesOfLife + " list is not empty");
}
//part 2
var labours = ["Arslan", "Ahmed", "Usama", "ALi"];
for (var i = 0; i < labours.length; i++) {
    console.log(labours[i] + " is in the array");
}
if (labours.length == 0) {
    console.log("we need to find some more users");
}
//part 3
var labour = [];
for (var i = 0; i < labour.length; i++) {
    console.log("" + labour);
}
if (labour.length == 0) {
    console.log("We need to find some more users");
}
//Question 32
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
//Question 33
var a = ('\nQ 33');
console.log(a);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var num_1 = numbers[i];
    var ending = void 0;
    if (num_1 == 1) {
        ending = "st";
    }
    else {
        ending = "th";
    }
    console.log(num_1 + ending);
}
//Question 34
var a = ('\nQ 34');
console.log(a);
//part  1
var pizza = ['Margherita', 'Pepperoni', 'Hawaiian'];
for (var i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
//part 2
for (var i = 0; i < pizza.length; i++) {
    console.log("I like " + pizza[i] + " pizza");
}
//part 3
console.log("Pizza is one of my favorite foods.\nI could eat pizza every day!\nThere are so many different toppings to choose from.\nI really love pizza!");
//Question 35
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
//Question 36
var a = ('\nQ 36');
console.log(a);
function make_shirt(size, message) {
    console.log("The size is " + size + " and the message is: " + message);
}
make_shirt("25", "2023 updated");
//Question 37
var a = ('\nQ 37');
console.log(a);
function make_shirts(size, message) {
    if (message === void 0) { message = "I love javascript"; }
    console.log("The size is " + size + " and the message is: " + message);
}
make_shirts("L");
make_shirts("M");
make_shirts("S");
//Question 38
var a = ('\nQ 38');
console.log(a);
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log(city + " is in " + country);
}
describe_city("karchi");
describe_city("Lahore");
describe_city("Islambad");
describe_city("New york", "USA");
//Question 39
var a = ('\nQ 39');
console.log(a);
function city_country(city, country) {
    console.log(city, country);
}
console.log('"newyork,', 'USA"');
console.log('"Islambad,', 'Pakistan"');
console.log('"Delhi', 'India"');
//Question 40
var a = ('\nQ 40');
console.log(a);
function make_album(artistname, albumtitle) {
    return artistname + albumtitle;
}
console.log("Billie jo spears:", "Billie Jo");
console.log("Bing crosby:", "BIng");
console.log("Bobby brown:", "Bobby");
//part 2
function make_albums(artistname, albumtitle, numberofTracks) {
    return artistname + albumtitle + numberofTracks;
}
console.log("Billie jo spears:", "Billie Jo,", '25');
console.log("Bing crosby:", "BIng,", '30');
console.log("Bobby brown:", "Bobby,", '8');
//Question 41
var a = ('\nQ 41');
console.log(a);
function show_magicians(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
var magician = ["Lance Burton", "Ricky Jay", "Mark Wilson"];
show_magicians(magician);
//Question 42
var a = ('\nQ 42');
console.log(a);
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
var magicians = ["Lance Burton", "Ricky Jay", "Mark Wilson", "Derren Brown"];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
//Question 44
var a = ('\nQ 44');
console.log(a);
function makeSandwich(sandwichItems) {
    console.log("Making a sandwich with the following items: " + sandwichItems.join(", "));
}
makeSandwich(["bread", "ham", "chese", "lettuc", "mayonnaise"]);
makeSandwich(["bread", "turkey", "bacon", "chese", "tomato", "mayonnaise", "mustard"]);
makeSandwich(["bread", "peanut buter", "jely"]);
//Question 45
var a = ('\nQ 45');
console.log(a);
function carInfo(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < args.length; i += 2) {
        car[args[i]] = args[i + 1];
    }
    return car;
}
var car = carInfo("Toyota", "Corolla", "year", 2022, "color", "red", "transmission", "automatic");
console.log(car);

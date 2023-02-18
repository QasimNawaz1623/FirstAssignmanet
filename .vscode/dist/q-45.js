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

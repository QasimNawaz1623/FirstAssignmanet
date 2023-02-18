var a = ('\nQ 45');
console.log(a);

function carInfo(manufacturer, model, ...args) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  };

  for (let i = 0; i < args.length; i += 2) {
    car[args[i]] = args[i + 1];
  }

  return car;
}


var car = carInfo("Toyota", "Corolla", "year", 2022, "color", "red", "transmission", "automatic");


console.log(car);

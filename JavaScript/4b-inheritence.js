class Vehicle {
  constructor() {
    this.company = "Honda";
  }
}
class Bike extends Vehicle {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }
}
class Car extends Vehicle {
    constructor(name, price) {
      super();
      this.name = name;
      this.price = price;
    }
  }
const bike = new Bike("Rebel", "70000");
const car = new Car("City", "1000000");
console.log(bike.company + " " + bike.name + " " + bike.price);
console.log(car.company + " " + car.name + " " + car.price);

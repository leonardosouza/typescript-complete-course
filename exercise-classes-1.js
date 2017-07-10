"use strict";
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        return this.acceleration += speed;
    };
    return Car;
}());
var myCar = new Car("BMW");
myCar.honk();
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);
//# sourceMappingURL=exercise-classes-1.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Base = (function () {
    function Base() {
        this.width = 0;
        this.length = 0;
    }
    return Base;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Base));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
var People = (function () {
    function People() {
        this._firstName = "";
    }
    Object.defineProperty(People.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3)
                this._firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var people = new People();
console.log(people.firstName);
people.firstName = "Leo";
console.log(people.firstName);
people.firstName = "Leonardo";
console.log(people.firstName);
//# sourceMappingURL=exercise-classes.js.map
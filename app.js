"use strict";
var myName = "Leo";
var myAge = 34;
var hasHobbies = true;
var myRealAge;
myRealAge = 35;
var hobbies = ["Cooking", "Sports"];
var address = ["Cuiabá", 998];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 255] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log("Hello!");
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 2));
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 5));
var userData = {
    age: 34,
    name: "Leo",
};
var complex1 = {
    data: [100, 3.9, 10],
    output: function () {
        return this.data;
    },
};
var complex2 = {
    data: [100, 3.9, 10],
    output: function () {
        return this.data;
    },
};
console.log(complex2.output(true));
var myRealRealAge = 27;
myRealRealAge = "27";
var finalValue = 30;
if (typeof finalValue === "number") {
    console.log("Final value is a number");
}
function neverReturns() {
    throw new Error("An error!");
}
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
//# sourceMappingURL=app.js.map
"use strict";
// console.log('It works!');
// string
var myName = 'Leo'; // implicit type
// myName = 34; // reassign error compiling
// number
var myAge = 34;
// myAge = 'Leo'; // reassign error compiling
// boolean
var hasHobbies = true;
// hasHobbies = 1; // reassign error compiling
// assign types (any default)
var myRealAge; // explicit type
myRealAge = 35;
// myRealAge = '35'; // error compiling here
// array
var hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; // error compiling
// tupples
var address = ['Cuiabá', 998];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 255] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 2));
// function types
var myMultiply;
// myMultiply = sayHello; // error compiling
// myMultiply(); // error compiling
myMultiply = multiply;
console.log(myMultiply(5, 5));
// objects
var userData = {
    name: 'Leo',
    age: 34
};
// reassign compiling error
// userData = {
//   a: 'Hello',
//   b: 22
// };
// complex object
var complex1 = {
    data: [100, 3.9, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.9, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;

"use strict";
console.log("LET AND CONST");
var variable = "One value";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(1, 2));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 100; }
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown();
console.log("REST & SPREAD");
var numbers = [1, 5, 99, -5];
console.log(Math.max(1, 15, 18, -5));
console.log(Math.max.apply(Math, numbers));
function makeArray(arg1, arg2) {
    return [arg1, arg2];
}
console.log(makeArray(1, 2));
function otherMakeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(otherMakeArray.apply(void 0, numbers));
console.log("DESTRUCTURING");
var myHobbies = ["Driking", "Cooking", "Sports"];
var firstHobbie = myHobbies[0], regularHobbie = myHobbies[1], lastHobbie = myHobbies[2];
console.log(firstHobbie, lastHobbie);
var userInfo = { firstName: "Leonardo", age: 34 };
var firstName = userInfo.firstName, age = userInfo.age;
console.log(firstName, age);
var myNameIs = userInfo.firstName, myAgeIs = userInfo.age;
console.log(myNameIs, myAgeIs);
console.log("TEMPLATE LITERALS");
var userName = "Max";
var greeting = "Hello, I'm " + userName + ", I'm so cool!";
console.log(greeting);
//# sourceMappingURL=es6-features.js.map
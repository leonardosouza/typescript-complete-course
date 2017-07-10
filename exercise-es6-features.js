"use strict";
{
    var double = function (value) { return value * 2; };
    console.log(double(10));
    var greet_1 = function (name) {
        if (name === void 0) { name = "Leo"; }
        return console.log("Hello, " + name);
    };
    greet_1();
    greet_1("Anna");
    var numbers_1 = [-3, 33, 38, 5];
    console.log(Math.min.apply(Math, numbers_1));
    var newArray = [55, 20];
    newArray.push.apply(newArray, numbers_1);
    console.log(newArray);
    var testResults = [3.89, 2.99, 1.38];
    var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
    console.log(result1, result2, result3);
    var scientist = { lastName: "Smith", experience: 12 };
    var lastName = scientist.lastName, experience = scientist.experience;
    console.log(lastName, experience);
}
//# sourceMappingURL=exercise-es6-features.js.map
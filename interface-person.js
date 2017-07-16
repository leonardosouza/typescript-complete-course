"use strict";
var myPerson = {
    age: 34,
    firstName: "Leo",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    },
};
function greetingMsg(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Cido";
}
changeName(myPerson);
greetingMsg(myPerson);
myPerson.greet("Anything");
var Persona = (function () {
    function Persona() {
    }
    Persona.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Persona;
}());
var otherPerson = new Persona();
otherPerson.firstName = "Sandy";
greetingMsg(otherPerson);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(2, 2));
var oldPerson = {
    age: 34,
    firstName: "Leo",
    greet: function (lastName) {
        console.log("Hello! " + lastName);
    },
};
//# sourceMappingURL=interface-person.js.map
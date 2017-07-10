"use strict";
var People = (function () {
    function People() {
        this._firstName = "";
    }
    Object.defineProperty(People.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
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
//# sourceMappingURL=exercise-classes-3.js.map
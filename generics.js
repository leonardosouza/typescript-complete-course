"use strict";
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").toUpperCase);
console.log(betterEcho(27).toFixed(2));
console.log(betterEcho({ name: "Max", age: 27 }));
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
var myEcho = betterEcho;
console.log(myEcho("Something"));
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    Object.defineProperty(SimpleMath.prototype, "baseValue", {
        get: function () {
            return this._baseValue;
        },
        set: function (n) {
            this._baseValue = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleMath.prototype, "multiplyValue", {
        get: function () {
            return this._multiplyValue;
        },
        set: function (n) {
            this._multiplyValue = n;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//# sourceMappingURL=generics.js.map
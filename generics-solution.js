"use strict";
var MySolutionMap = (function () {
    function MySolutionMap() {
        this.map = {};
    }
    MySolutionMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MySolutionMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MySolutionMap.prototype.clear = function () {
        this.map = {};
    };
    MySolutionMap.prototype.printMap = function () {
        var key;
        for (key in this.map) {
            if (Object.getOwnPropertyNames(this.map)) {
                console.log(key, this.map[key]);
            }
        }
    };
    return MySolutionMap;
}());
var numberSolutionMap = new MySolutionMap();
numberSolutionMap.setItem("apples", 5);
numberSolutionMap.setItem("bananas", 10);
numberSolutionMap.printMap();
var stringSolutionMap = new MySolutionMap();
stringSolutionMap.setItem("name", "Max");
stringSolutionMap.setItem("age", "27");
stringSolutionMap.printMap();
//# sourceMappingURL=generics-solution.js.map
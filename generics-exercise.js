"use strict";
var MyMap = (function () {
    function MyMap() {
        this._itens = [];
    }
    MyMap.prototype.setItem = function (key, item) {
        this._itens.push();
        this._itens.push((_a = {}, _a[key] = item, _a));
        var _a;
    };
    MyMap.prototype.printMap = function () {
        console.log(this._itens);
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
//# sourceMappingURL=generics-exercise.js.map
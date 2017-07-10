import { PI, calculateCircumference} from "./math/circle";
import * as Circle from "./math/circle";
import { calculateRectangle } from "./math/rectangle";
// import calc from "./math/rectangle"; // export default dependency
// import { Component } from "@angular/core"; // absolute module

console.log(PI);
console.log(calculateCircumference(10));
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(calculateRectangle(10, 20));
// console.log(calc(10, 20));

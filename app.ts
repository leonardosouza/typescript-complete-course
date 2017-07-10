// console.log('It works!');

// string
let myName = "Leo"; // implicit type
// myName = 34; // reassign error compiling

// number
let myAge: number = 34;
// myAge = 'Leo'; // reassign error compiling

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1; // reassign error compiling

// assign types (any default)
let myRealAge: number; // explicit type
myRealAge = 35;
// myRealAge = '35'; // error compiling here

// array
let hobbies: string[] = ["Cooking", "Sports"];
// hobbies = [100]; // error compiling

// tupples
let address: [string, number] = ["Cuiabá", 998];

// enum
enum Color {
  Red,
  Green = 255,
  Blue = 2,
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 2));

// function types
let myMultiply: (x: number, y: number) => number;
// myMultiply = sayHello; // error compiling
// myMultiply(); // error compiling
myMultiply = multiply;
console.log( myMultiply(5, 5) );

// objects
let userData: { name: string, age: number } = {
  age: 34,
  name: "Leo",
};

// reassign compiling error
// userData = {
//   a: 'Hello',
//   b: 22
// };

// complex object
let complex1: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.9, 10],
  output(): number[] {
    return this.data;
  },
};

// type alias
interface IComplex { data: number[]; output: (all: boolean) => number[]; }

let complex2: IComplex = {
  data: [100, 3.9, 10],
  output() {
    return this.data;
  },
};

console.log(complex2.output(true));

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = 30;
if (typeof finalValue === "number") {
  console.log("Final value is a number");
}

// never
function neverReturns(): never {
  throw new Error("An error!");
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

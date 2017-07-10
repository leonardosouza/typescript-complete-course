console.log("LET AND CONST");
let myVariable = "One value";
console.log(myVariable);
myVariable = "Another value";
console.log(myVariable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Cannot assign to 'maxLevels' because it is a constant or a read-only propert

// Block Scope
function reset() {
  // tslint:disable-next-line:no-shadowed-variable
  const myVariable = null;
  console.log(myVariable);
}
reset();
console.log(myVariable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = (number1: number, number2: number): number => {
  return number1 + number2;
};
console.log(addNumbers(1, 2));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
  console.log("Hello!");
};
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 100): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};

countdown();

// Rest and Spread
console.log("REST & SPREAD");
const numbers = [1, 5, 99, -5];
console.log(Math.max(1, 15, 18, -5));
// console.log(Math.max(numbers)); // Argument of type 'number[]' is not assignable to parameter of type 'number'.
console.log(Math.max(...numbers)); // Solution: spread operator

function makeArray(arg1: number, arg2: number) {
  return [arg1, arg2];
}

console.log(makeArray(1, 2));

function otherMakeArray(...args: number[]) {
  return args;
}

console.log(otherMakeArray(...numbers));

// Destructuring
console.log("DESTRUCTURING");

// arrays
const myHobbies = ["Driking", "Cooking", "Sports"];
// const firstHobbie = myHobbies[0];
// const lastHobbie = myHobbies[2];
const [firstHobbie, regularHobbie, lastHobbie] = myHobbies;
console.log(firstHobbie, lastHobbie);

// objects
const userInfo = { firstName: "Leonardo", age: 34 };
// const firstName = userInfo.firstName;
// const age = userInfo.age;
const { firstName, age } = userInfo;
console.log(firstName, age); // without alias
const { firstName: myNameIs, age: myAgeIs } = userInfo;
console.log(myNameIs, myAgeIs); // with alias

// Template Literals
console.log("TEMPLATE LITERALS");
const userName = "Max";
// const greeting = "Hello, I'm " + userName + ", I'm so cool!";
const greeting = `Hello, I'm ${userName}, I'm so cool!`;
console.log(greeting);

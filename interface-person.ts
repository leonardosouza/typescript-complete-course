interface INamedPerson {
  firstName: string;
  age?: number; // optional
  [propName: string]: any;
  greet(lastName: string): void;
}

const myPerson = {
  age: 34,
  firstName: "Leo",
  hobbies: ["Cooking", "Sports"],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  },
};

function greetingMsg(person: INamedPerson) {
  console.log(`Hello, ${person.firstName}`);
}

function changeName(person: INamedPerson) {
  person.firstName = "Cido";
}

// greetingMsg({ firstName: "Max", age: 27 });
changeName(myPerson);
greetingMsg(myPerson);
myPerson.greet("Anything");

class Persona implements INamedPerson {
  public firstName: string;
  public greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
}

const otherPerson = new Persona();
otherPerson.firstName = "Sandy";
greetingMsg(otherPerson);

// Function Types
type DoubleValueFunc = (number1: number, number2: number) => number;

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (value1: number, value2: number) => {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(2, 2));

// Interface Inheritance
interface IAgedPerson extends INamedPerson {
  age: number;
}

const oldPerson: IAgedPerson = {
  age: 34,
  firstName: "Leo",
  greet(lastName: string) {
    console.log(`Hello! ${lastName}`);
  },
};

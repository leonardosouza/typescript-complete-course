class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Also here");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Leo", "leonardodisouza");
console.log(person);
person.printAge();

// person.setType("Cool guy");

// Inheritance
class Max extends Person {
  name = "Max";

  constructor(name: string, username: string) {
    super(name, username);
  }

  setAge(age: number) {
    this.age = age;
  }
}

const max = new Max("Anna", "max");
console.log(max);
max.setAge(30);
max.printAge();


// Getters & Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }
  
  set species(value: string) {
    if(value.length > 3) {
      this._species = value;
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Red";
console.log(plant.species);
plant.species = "Green";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Class
abstract class Project {
  projectName: string = "Default";
  budget: number;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject implements Project {
  projectName: string;
  budget: number = 1000;

  changeName(name: string): void {
    this.projectName = name;
  }

  calcBudget() {
    return this.budget * 3;
  }
}

let newProject = new ITProject();
console.log(newProject);  
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    if(!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
console.log(right, right.name);

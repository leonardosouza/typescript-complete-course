class Person {
  public name: string;
  protected age: number;
  private type: string;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  public printAge() {
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
// tslint:disable-next-line:max-classes-per-file
class Max extends Person {
  public name = "Max";

  constructor(name: string, username: string) {
    super(name, username);
  }

  public setAge(age: number) {
    this.age = age;
  }
}

const max = new Max("Anna", "max");
console.log(max);
max.setAge(30);
max.printAge();

// Getters & Setters
// tslint:disable-next-line:max-classes-per-file
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
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
// tslint:disable-next-line:max-classes-per-file
class Helpers {
  public static PI: number = 3.14;

  public static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Class
// tslint:disable-next-line:max-classes-per-file
abstract class Project {
  public projectName: string = "Default";
  public budget: number;

  public abstract changeName(name: string): void;

  public calcBudget() {
    return this.budget * 2;
  }
}

// tslint:disable-next-line:max-classes-per-file
class ITProject implements Project {
  public projectName: string;
  public budget: number = 1000;

  public changeName(name: string): void {
    this.projectName = name;
  }

  public calcBudget() {
    return this.budget * 3;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructors
// tslint:disable-next-line:max-classes-per-file
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  // tslint:disable-next-line:member-access
  // tslint:disable-next-line:member-ordering
  public static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
console.log(right, right.name);

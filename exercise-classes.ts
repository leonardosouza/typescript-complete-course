// exercise 1
class Car {
  private name: string;
  public acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number): number {
    return this.acceleration += speed;
  }
}

const myCar = new Car("BMW");
myCar.honk();
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);

// exercise 2
class Base {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends Base {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// exercise 3
class People {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(name: string) {
    if(name.length > 3) this._firstName = name;
  }
}

const people = new People();
console.log(people.firstName);
people.firstName = "Leo";
console.log(people.firstName);
people.firstName = "Leonardo"
console.log(people.firstName);

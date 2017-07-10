// exercise 1
class Car {
  public acceleration: number = 0;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public honk(): void {
    console.log("Toooooooooot!");
  }

  public accelerate(speed: number): number {
    return this.acceleration += speed;
  }
}

const myCar = new Car("BMW");
myCar.honk();
console.log(myCar.acceleration);
myCar.accelerate(10);
console.log(myCar.acceleration);

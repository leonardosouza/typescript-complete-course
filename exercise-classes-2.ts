// exercise 2
class Base {
  public width: number = 0;
  public length: number = 0;
}

// tslint:disable-next-line:max-classes-per-file
class Rectangle extends Base {
  public calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

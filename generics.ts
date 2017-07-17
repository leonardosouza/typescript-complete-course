// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("Max").toUpperCase);
console.log(betterEcho<number>(27).toFixed(2));
console.log(betterEcho({ name: "Max", age: 27 }));

// Built-in Generics
const testResults: number[] = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

printAll(["Apple", "Banana"]);

// Generic Types
const myEcho: <T>(data: T) => T = betterEcho;
console.log(myEcho<string>("Something"));

// Generic Classes
class SimpleMath<T extends number, U extends number> {
  protected _baseValue: T;
  protected _multiplyValue: U;
  public calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }

  set baseValue(n: T) {
    this._baseValue = n;
  }

  get baseValue(): T {
    return this._baseValue;
  }

  set multiplyValue(n: U) {
    this._multiplyValue = n;
  }

  get multiplyValue(): U {
    return this._multiplyValue;
  }
}

const simpleMath = new SimpleMath<number, number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

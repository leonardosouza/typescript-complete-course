// tslint:disable-next-line:no-namespace
namespace MyMath {
  export namespace Circle {
    export const PI = 3.14;

    export function calculateCircumference(diameter: number): number {
      return diameter * PI;
    }
  }
}

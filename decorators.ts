function logged(construtorFn: Function) {
  console.log(construtorFn);
}

@logged
class ExclusivePerson {
  constructor() {
    console.log("Hi");
  }
}

const exclusivePerson = new ExclusivePerson();

// Factory
function logging(value: boolean): Function | any {
  return value ? logged : null;
}

// tslint:disable-next-line:max-classes-per-file
@logging(true) // true or false
class Auto {

}

// Advanced
function printable(construtorFn: Function) {
  construtorFn.prototype.print = function() {
    console.log(this);
  };
}

// tslint:disable-next-line:max-classes-per-file
@logging(true)
@printable
class Vegetable {
  public name = "Green Vegetable";
}

const vegetable = new Vegetable();
(vegetable as any).print();

// Method Decorators
function editable(value: boolean) {
  // tslint:disable-next-line:only-arrow-functions
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    console.log(target, propName);
    descriptor.writable = value;
  };
}

// Property Decorator
function overwritable(value: boolean) {
  // tslint:disable-next-line:only-arrow-functions
  return function(target: any, propName: string): any {
    console.log(target, propName);
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };
    return newDescriptor;
  };
}

// tslint:disable-next-line:max-classes-per-file
class Projeto {
  @overwritable(true)
  private projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(true)
  public calcBudget() {
    console.log(1000);
  }
}

const project = new Projeto("Super Project");
project.calcBudget();
// tslint:disable-next-line:only-arrow-functions
project.calcBudget = function() {
  console.log(2000);
};
project.calcBudget();

// Parameter Decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("target:", target);
  console.log("methodName:", methodName);
  console.log("paramIndex:", paramIndex);
}

// tslint:disable-next-line:max-classes-per-file
class Course {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public printStudents(mode: string, @printInfo printAll: boolean) {
    console.log(mode);
    if (printAll) {
      console.log(100000);
    } else {
      console.log(20000);
    }
  }
}

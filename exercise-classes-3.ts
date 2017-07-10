// exercise 3
class People {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length > 3) {
      this._firstName = name;
    }
  }
}

const people = new People();
console.log(people.firstName);
people.firstName = "Leo";
console.log(people.firstName);
people.firstName = "Leonardo";
console.log(people.firstName);

interface IBankAccount { money: number; deposit: (v: number) => void; }

let bankAccount: IBankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
};

interface IMySelf { name: string; bankAccount: IBankAccount; hobbies: string[]; }

let mySelf: IMySelf = {
  bankAccount,
  hobbies: ["Sports", "Cooking"],
  name: "Leo",
};

mySelf.bankAccount.deposit(3000);

console.log(mySelf);

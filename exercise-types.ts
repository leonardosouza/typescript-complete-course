type BankAccount = { money: number, deposit: (v: number) => void }

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
}

type MySelf = { name: string, bankAccount: BankAccount, hobbies: string[] }

let mySelf: MySelf = {
  name: "Leo",
  bankAccount,
  hobbies: ["Sports", "Cooking"]
}

mySelf.bankAccount.deposit(3000);

console.log(mySelf);

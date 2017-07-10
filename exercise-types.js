"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
};
var mySelf = {
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"],
    name: "Leo",
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
//# sourceMappingURL=exercise-types.js.map
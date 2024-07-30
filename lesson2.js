let Balance = 21232

const addMoney = (a) => a + Balance;
console.log("Your new balance is", addMoney(2054));

const withdraw = (a) => Balance - a;
console.log("Your new balance is", withdraw(1100));

const current = (Balance) => Balance;
console.log("Your current balance is", current(Balance));

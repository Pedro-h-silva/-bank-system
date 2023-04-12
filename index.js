const App = require("./App");

App.createUser("pedro@email.com", "Isaac Pontes");
App.createUser("henrique@email.com", "Lucas Queiroga");
App.createUser("julia@email.com", "Juliana Conde");

App.deposit("pedro@email.com", 100);

App.transfer("pedro@email.com", "henrique@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("julia@email.com", 2000, 24);

console.log(App.findUser("pedro@email.com"));
console.log(App.findUser("pedro@email.com").account);
console.log(App.findUser("henrique@email.com"));
console.log(App.findUser("henrique@email.com").account);
console.log(App.findUser("julia@email.com"));
console.log(App.findUser("julia@email.com").account);
console.log(App.findUser("julia@email.com").account.loans[0].installments);

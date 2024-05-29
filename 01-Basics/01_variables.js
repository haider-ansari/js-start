const accountId = 144553;
let accountEmail = "hetesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;


//accountId = 2; //not allowed

accountEmail = "hc@hc.com";
accountPassword = "212151";
accountCity = "Bangaluru";

console.log(accountId);

/*
Prefer not to use var to declare variable because of issue in block and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
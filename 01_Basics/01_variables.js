const accountId = 144553
let accountEmail = "priyabrata@google.com"
var accountPassword = "123" 
accountCity = "Bankura"
let accountState;

//accountId = 2 // not allowed

accountEmail = "pk@pk.com"
accountPassword = "21212121"
accountCity = "KOlkata"

/*
Prefer not to use var
because of issus in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

const accountId = 144553
let accountEmail = "vaishuchowdary039@gmail.com"
var accountPassword = "12345"
accountCity = "Anantapur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "praveenkumar5@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
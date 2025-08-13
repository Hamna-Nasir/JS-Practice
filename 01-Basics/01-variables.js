const accountId = 144623
let accountEmail = "hamnanasr@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"

// accountId = 34256 // not allowed

accountEmail = "helloworld@google.com"
accountPassword = "1110"
accountCity = "Lahore"

/* 
prefer not to use var due to issues in block scope and functional scope
*/

console.log([accountId , accountEmail , accountPassword , accountCity])
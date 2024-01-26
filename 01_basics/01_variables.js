const accountId=144553
let accountEmail="alapanpal10@gmail.com"
var accountPassword="64297240"
accountCity="jaipur"

// lets try to modify the values of given entities

// accountId="639485"  this line is not allowed
accountEmail="random@gmail.com"
accountPassword="4563675447"
accountCity="kolkata"

console.log(accountId);

// we can use different approach (tables) to print values of multiple variables all together
console.table([accountId,accountEmail,accountPassword,accountCity])


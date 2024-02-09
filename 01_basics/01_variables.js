const accountId = 144553
let accountEmail ="rajatwalzade.rw@gmail.com"
var accountPassword ="1234560"
accountCity = "Jaipur"

//accountId = 2 // not allowed
accountEmail = "hc@gmail.com"
accountPassword="324568"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
/*
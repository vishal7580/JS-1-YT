const accId = 144
let accEmail = "Vishal"
var accPass= "123"
accCity = "Jaipur"
let accState=undefined;
// accId = 2 NOT ALLOWED
accEmail= "jangid"
console.log(typeof accCity,typeof accState);
console.table([accId,accEmail,accPass,accCity])

/*
Prefer not to use var
because of issue of block scope and funcitonal scope
*/
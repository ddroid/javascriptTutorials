// the interpreter moves functions and variables assigned with var at top before execution

console.log(valuables);
var valuables = 5;
console.log(valuables);

//? similarly this is error
//! straw = 5;
let straw;
console.log(straw);

//? And this is not
flaw = 6;
var flaw;
console.log(flaw);
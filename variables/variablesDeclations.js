// console.log(age); gives error
// console.log(dontUseThisMuch); gives undefined since the hoisting for var is not properly done by compiler like functions

let age = 5;
let sum;

const classNumber = 12;
const camelCase = true;
// Note: var uses hoisting and also its inheritance is function level
var dontUseThisMuch = true;
var onlyUseWhenNeeded = true;
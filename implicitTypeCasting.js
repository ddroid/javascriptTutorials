//* Implicit type conversion happens when the compiler or runtime automatically converts data types. JavaScript is loosely typed language and most of the time operators automatically convert a value to the right type.


console.log(3 * "3"); //9
console.log(1 + "2" + 1); //121

console.log(true + true); //2
console.log(10 - true); //9


const foo = {
  valueOf: () => 2
};
console.log(3 + foo); // 5
console.log(4 * foo); // 8

const bar = {
  toString: () => " promise is a boy :)"
};
console.log(1 + bar); // "1 promise is a boy :)"


console.log(4 * []); // 0
console.log(4 * [2]); // 8
console.log(4 + [2]); // "42"
console.log(4 + [1, 2]);// "41,2"
console.log(4 * [1, 2]); // NaN

console.log("string" ? 4 : 1); // 4
console.log(undefined ? 4 : 1); // 1
// ! The Number data type in JavaScript represents floating-point numbers, such as 37 or -9.25. The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the Number() function.
let positiveMax = Number.MAX_SAFE_INTEGER;
let negativeMin = Number.MIN_SAFE_INTEGER;
typeof(positiveMax);
typeof(negativeMin);
console.log(positiveMax + " and " + negativeMin);
console.log(typeof(positiveMax) + typeof(negativeMin));
positiveMax++;
negativeMin--;
console.log(positiveMax + " and " + negativeMin);
console.log(typeof(positiveMax) + typeof(negativeMin));
positiveMax++;
negativeMin--;
console.log(positiveMax + " and " + negativeMin);
console.log(typeof(positiveMax) + typeof(negativeMin));

//! BigInt is a built-in JavaScript object that allows you to work with integers of arbitrary size.Bigint() is used for this purpose.
let bigint1 = BigInt(Number.MAX_SAFE_INTEGER);
let bigint2 = BigInt(Number.MIN_SAFE_INTEGER);
typeof(bigint1);
typeof(bigint2);
console.log(bigint1 + " and " + bigint2);
console.log(typeof(bigint1) + typeof(bigint2));
bigint1++;
bigint2--;
console.log(bigint1 + " and " + bigint2);
console.log(typeof(bigint1) + typeof(bigint2));
bigint1++;
bigint2--;
console.log(bigint1 + " and " + bigint2);
console.log(typeof(bigint1) + typeof(bigint2));
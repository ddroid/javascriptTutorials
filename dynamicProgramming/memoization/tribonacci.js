//? Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

//* The 0-th and 1-st numbers of the sequence are both 0.

//* The 2-nd number of the sequence is 1.

//* To generate further numbers of the sequence, calculate the sum of previous three numbers.

//? Solve this recursively.

//! Solution: without memoization
const tribonacci = (n) =>{
    if(n <= 1) return 0;
    if(n === 2) return 1;
    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
}
console.log("Without Memo:");
console.log(tribonacci(1)); // -> 0
console.log(tribonacci(2)); // -> 1
console.log(tribonacci(5)); // -> 4
console.log(tribonacci(14)); // -> 13
console.log(tribonacci(20)); // -> 35890
console.log(tribonacci(32)); // -> 53798080 this sucks
// console.log(tribonacciMemo(37)); // -> 1132436852 will die If I uncommented this
//! Solution: with memoization
const tribonacciMemo = (n, memo = {}) =>{
    if(n in memo) return memo[n];
    if(n <= 1) return 0;
    if(n === 2) return 1;
    memo[n] = tribonacciMemo(n-1, memo) + tribonacciMemo(n-2, memo) + tribonacciMemo(n-3, memo);
    return memo[n];
}
console.log("With Memo:");
console.log(tribonacciMemo(1)); // -> 0
console.log(tribonacciMemo(2)); // -> 1
console.log(tribonacciMemo(5)); // -> 4
console.log(tribonacciMemo(14)); // -> 13
console.log(tribonacciMemo(20)); // -> 35890
console.log(tribonacciMemo(32)); // -> 53798080 piece of cake
console.log(tribonacciMemo(37)); // -> 1132436852
console.log(tribonacciMemo(500)); // -> 3.861058013166323e+131 bullet speed
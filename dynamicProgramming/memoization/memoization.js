//? Memoization is process of storing the base cases for later use they are useful to reduce time complexity and write efficient code I will solve two problems with and without memoization to prove how helpful it could be.

//! Write a function to return n-th number of Fibonacci sequence.
//* when the 1st and 2nd number of sequence is 1.
//* to generate next number of the sequence, we sum previous two. i.e fib(n) = fib(n-1) + fib(n-2)

//? Solution 1: without memoization
// Using recursion
const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));
console.log(fib(8));
console.log(fib(40)); //this cant be done because exponential time complexity T = O(2^n)

//? Solution 2: with memoization
// Using recursion
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
console.log(fibMemo(7));
console.log(fibMemo(8));
console.log(fibMemo(50));
console.log(fibMemo(100));
// And it is a piece of cake for this memo example as this has linear Time complexity T = O(n)
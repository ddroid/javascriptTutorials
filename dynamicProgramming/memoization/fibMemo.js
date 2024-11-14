//! Write a function to return n-th number of Fibonacci sequence.
//* when the 1st and 2nd number of sequence is 1.
//* to generate next number of the sequence, we sum previous two. i.e fib(n) = fib(n-1) + fib(n-2)

//todo Solution 1: without memoization
// Using recursion
const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));
console.log(fib(8));
console.log(fib(40)); //this cant be done because exponential time complexity T = O(2^n)

//! fibonacci(5) (without memoization)
//*              5
//*            /   \
//*           4     3
//*         /   \   / \
//*        3     2 2   1
//*      /   \   | 
//*     2     1  1
//*    / \ 
//*   1   0
//? Each instance of fibonacci(3), fibonacci(2), and fibonacci(1) would be recalculated multiple times.


//todo Solution 2: with memoization
// Using recursion
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

//! fibonacci(5) (with memoization)
//*              5
//*            /   \
//*           4     3
//*         /   \    |
//*        3     2   (memoized result for fibonacci(3))
//*       / \   |
//*      2   1  (memoized result for fibonacci(2))
//*     /
//*    1


console.log(fibMemo(7));
console.log(fibMemo(8));
console.log(fibMemo(50));
console.log(fibMemo(100));
// And it is a piece of cake for this memo example as this has linear Time complexity T = O(n)
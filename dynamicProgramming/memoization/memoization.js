//? Memoization is process of storing the base cases for later use they are useful to reduce time complexity and write efficient code I will solve two problems with and without memoization to prove how helpful it could be.


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

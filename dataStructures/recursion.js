// ! Recursion makes a large problem solve by solving a smaller problem which is solved by solving by more smaller problem and so on until the whole problem is solved.
//! Main key in recursion is calling the function inside of itself.

//? Base case: the smallest "instance" of a problem that is solved trivially.
//* Example in case of factorial base case is : fact(1) = 1
//? Recursive case: an instance of problem that shrinks the size of the input towards the base case.
//* Example in case of factorial recursive case is : fact(n) = n * fact(n-1)

//! Example of recursion.
//? A factorial calculating function

function fact(num){
    //base case
    if(num === 1) return 1;
    // recursive case
    else return num * fact(num - 1);
}
console.log(fact(4));   //24
console.log(fact(5));   //120
console.log(fact(6));   //720
console.log(fact(7));   //5040
console.log(fact(8));   //40320


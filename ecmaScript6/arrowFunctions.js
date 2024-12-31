//* An Arrow Function uses a new token, =>, that looks like a fat arrow. It is also called a fat arrow function.It is a more concise way to write function expressions – not just for short functions, but for functions with any number of parameters.

const person = () => { console.log("Hey handsome!"); };
person(); // Hey handsome!

//?  It's characteristics are very different from regular functions. Some of the characteristics are:
//! 1. No this, super, arguments, and new.target bindings since they have lexical Scope.
// for example:
//? Also () around the function with () end of the function is called IIFE (Immediately Invoked Function Expression) which means the function will be executed immediately after it has been parsed.
const person1 ={ 
    name: "John",
    age: 25,
    post: "Software Developer",
    func : function(){
         (() => { console.log(this); })()
        },
};
person1.func(); // {}
//! 2. Cannot be called with new.
// for example:
//* const person2 = () => { console.log(new.target); }; // throws an error

//! 3. Does not have a prototype property.
// for example:
const person3 = age => age * 5;
//* const r1 = new person3(5); // throws an error

//! 4. Cannot change this. Means this is bound to the enclosing scope at the time the arrow function is defined. It is possible to change this in regular functions, but not in arrow functions.
// for example:
const person4 ={ 
    name: "Bob",
    age: 19,
    post: "Software Developer",
    func : function(){
         (() => { console.log(this.age = 22);
            console.log(this);
          })()
        },
};
person4.func(); // 22 { name: 'Bob', age: 22, post: 'Software Developer', func: [Function: func] }
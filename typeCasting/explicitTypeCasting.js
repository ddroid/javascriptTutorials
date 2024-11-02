//* Type casting means transferring data from one data type to another by explicitly specifying the type to convert the given data to. Explicit type casting is normally done to make data compatible with other variables. Examples of typecasting methods are parseInt(), parseFloat(), toString().


//! TypeCasting in String
input = 25
console.log("The input value with its type is:",input,typeof(input))
console.log("Arithmetic operation before typecasting with its type is:", (10 + input), typeof((10 + input)))
sInput = String(input)
console.log("After the type casting is done the type is:",sInput,typeof(sInput))
console.log("Arithmetic operation after typecasting with its type is:", (10 + sInput), typeof(10 + sInput))

//! TypeCasting in Number

console.log("Input is 7.8.9 and after conversion",Number("7.8.9"))
console.log("Input is 6.6.6 and after conversion to float is",parseInt("6.6.6"))
console.log("Input is 6.6.6 and after conversion to float is",parseFloat("6.6.6"))

//! TypeCasting in Boolean

console.log("The cases where the method will return true")
console.log("The given input is rw",Boolean('rw'))
console.log("The given input is -3.6",Boolean(-3.6))
console.log("The given input is new Date()",Boolean(new Date()))
console.log("The cases where the method will return false")
console.log("The given input is number 0",Boolean(0) )
console.log("The given input is null value",Boolean(null) )
console.log("The given input is undefined",Boolean(undefined))
console.log("The given input is empty string",Boolean('') )
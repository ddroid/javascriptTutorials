//* Objects can be created as.
let obj1 = {};
let obj2 = new Object();

//* Each object can store data in form of key/value pairs.
//? such as key : value, key must be a string or symbol while value can be anything like number or boolean.
//! example
let obj3 = {
    key1 : 51,
    name : "afaan",
    "0Gs" : true,
}

//? Values of each pair can be accessed using "objName.keyName" or "objName["keyName"]" or "objName[variableContaingKeyName]"
console.log(obj3["0Gs"]);
console.log(obj3.key1);
let variable1 = "name";
console.log(obj3[variable1]);

//* We can add keys into objects:
//! the object below looks like this:
//! let obj4 = {
//!     keyName : "keyValue",
//!     "string Name" : 51,
//! };
let obj4 = {};
console.log(obj4.keyName);
console.log(obj4["string Name"]);
obj4.keyName = "keyValue";
obj4["string Name"] = "51";
console.log(obj4.keyName);
console.log(obj4["string Name"]);

let taluetrue = isEmpty(obj1);
let valuetrue = isEmpty(obj4);
console.log(taluetrue);
console.log(valuetrue);
//! Fuction that tells whether a obj is empty or not:

function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

//!BTW this is a custom for loop for objects only syntax is for(let anyVariableName in objName){}
//! It itrates through object giving keyName as value to variable in for loop syntax.
for(let key in obj3){
    console.log(key); //key1 , name , '0Gs'
    console.log(obj3[key]);// 51, "afaan", true
};

//! Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
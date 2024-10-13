//? Symbols are new JavaScript primitive, they are very useful when we use it with objects. Object is mostly used as collection in the form of key value pair, but it has a limitation. The key value should always be string, if you provide number, boolean etc then it will convert it into string.(you can use map data structure instead). Symbols are equivalent to objects because their instances are not equal. Symbol is incomplete as constructor because it does not support the syntax "new Symbol()".  String passed in symbol(Symbol('foo')) does not have much significance, it is mostly used for debugging purpose.

const people = {};
people.doctor = 'Pranita';
let sym = Symbol();
people[sym] = 'Boo';
console.log(people);			//{doctor: "Pranita", Symbol(): "Boo"}
console.log(Object.keys(people));	// ['doctor']

//* Symbol does not get returned in Object.keys(), this is to maintain backword compatibility.Old code isn't aware of symbol. Reflect.ownKeys() has ability to get all the key values including symbols.
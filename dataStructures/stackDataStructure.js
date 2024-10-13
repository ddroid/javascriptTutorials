//* Stack provides us with a data format in which we can place data in form of a stack meaning one thing is placed over existing values this is why it works on principal of LIFO (last in first out).

//? An array is an example of an stack

let myStackedArray = ["a", "b"];

//? we can apply following fuctions on a stacked based system
//? push which adds a new value at end of a stack
//? pop which outputs the last value in stack and removes it

console.log(myStackedArray);
myStackedArray.push("c");
console.log(myStackedArray);
myStackedArray.push("d", "e", "f");
console.log(myStackedArray);
myStackedArray.pop();
console.log(myStackedArray);
myStackedArray.pop();
console.log(myStackedArray);
myStackedArray.pop();
console.log(myStackedArray);
myStackedArray.pop();
console.log(myStackedArray);
myStackedArray.pop();
console.log(myStackedArray);
myStackedArray.pop();
console.log(myStackedArray);



//* Using Stacked arrays are a good idea but when it comes to efficiency they're not that efficient. Thats why a object based stack is more efficient and performant.

class stackNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class stack{
    constructor(){
        this.top = null; 
        this.size = 0;
    }

    push(val){
        if(this.size == 0){
            this.top = new stackNode(val);
        }else{
            const pushedNode = new stackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.size++;
    }

    pop(){
        if(this.size === 0){
            return null;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.val;
    }
    getTop(){
        return this.top.val;
    }

}

const mystack = new stack();
mystack.push("a");
mystack.push("b");
mystack.push("c");
mystack.push("d");
console.log(mystack.size);
console.log(mystack.getTop());
console.log(mystack.pop());
console.log(mystack);
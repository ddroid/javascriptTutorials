//* Queue is opposite of a stack as its principal is FIFO (First In First Out). Meaning instead of removing items at end we remove or dequeue the first queue value.We can use array to make queue as:
let myArr = ["a", "b", "c"];
console.log(myArr);

//! We use push(); also here.
myArr.push("d","e");
console.log(myArr);

//! We use shift(); instead of pop();.
myArr.shift();
console.log(myArr);

//* But as stated in stacks code using an array is not efficient as it involves rotation of every array item thus it does not have a constant time because it depends on length of the array.

//? Thats Why we use an class constructor for this.

class nodeMaker {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class queueMaker {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new nodeMaker(val);
        if (this.size === 0) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;  // Fixed here
    }

    // Optional: Dequeue method for removing from the front
    dequeue() {
        if (this.size === 0) return null;
        const removedNode = this.front;
        this.front = this.front.next;
        this.size--;
        if (this.size === 0) {
            this.back = null;  // Reset back to null when the queue is empty
        }
        return removedNode.value;
    }

    // Optional: Peek method to check the front of the queue
    peek() {
        if (this.size === 0) return null;
        return this.front.value;
    }

    // Optional: Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Example usage:
const myQueue = new queueMaker();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
console.log(myQueue.dequeue());  // "a"
console.log(myQueue.peek());     // "b"
console.log(myQueue.isEmpty());
console.log(myQueue);  // false

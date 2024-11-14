//? Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.You may assume that the input tree is non-empty.

//? https://structy.net/problems/tree-min-value

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

//! Solution:1a
//* Using Depth first reversal.

const treeMinValue = (root) => {
    const stack = [root];
    let smallest = Infinity;
    while(stack.length > 0){
        const current = stack.pop();
        if(current.val < smallest) smallest = current.val;

        if(current.left !== null)stack.push(current.left);
        if(current.right !== null)stack.push(current.right);
    }
    return smallest;
};
//! Solution:1b
//* Using Depth first reversal(recursive).

const treeMinValue2 = (root) => {
    if(root === null) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
};

//! Solution:2 
//* Using Breadth first reversal.

const treeMinValue3 = (root) => {
    const queue = [root];
    let smallest = Infinity;
    while(queue.length > 0){
        const current = queue.shift();
        if(current.val < smallest) smallest = current.val;

        if(current.left !== null)queue.push(current.left);
        if(current.right !== null)queue.push(current.right);
    }
    return smallest;
};

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

console.log(treeMinValue(a)); // -> -13
console.log(treeMinValue2(a)); // -> -13
console.log(treeMinValue3(a)); // -> -13
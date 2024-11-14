//? Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

//? https://structy.net/problems/tree-sum

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//! Solution:1
//* Using Depth first reversal(recursion).

const treeIncludes = (root, target) =>{
    if(root === null)return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

//! Solution:2
//* Using Breadth first reversal(iterative).

const treeIncludes2 = (root, target) =>{
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        if(current !== null) {
          if(current.val === target)return true;
          if(current.left !== null)queue.push(current.left)
          if(current.right !== null)queue.push(current.right)
        }
    }
    return false;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludes(a, "f")); // -> true
console.log(treeIncludes2(a, "f")); // -> true
//! Depth-First Traversal Approach:


//* Begin with the root node.
//* Use a stack to manage nodes and track traversal order.
//* Follow the order of left-child-first to ensure proper depth-first traversal.


//! Traversal Steps:


//* Push the root node onto the stack.
//* Pop the stack's top node (starting with root) and mark it as visited.
//* Add the node's children to the stack, pushing the right child first, then left child (ensures the left child is processed next).
//* Repeat until the stack is empty.


//! Key Characteristics:

//* A stack is essential to follow depth-first traversal order.
//* Nodes are only added and removed from the stack once, ensuring efficient traversal.

//? Time Complexity: O(n) — each node is visited once.

//? Space Complexity: O(n) — maximum stack size is proportional to the number of nodes in the tree.


//! SOLVE this:
// https://www.structy.net/problems/depth-first-values

class Node{
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

//? SOLUTION:

const depthFirstValues = (root) => {
    if(root === null) return [];
    const stack = [root];
    const result = [];
    while(stack.length > 0){
      const current = stack.pop();
      result.push(current.val);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    return result;  
}    


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
console.log(depthFirstValues(a));
//! Core of Breadth-First Traversal
//* we start from root * means our current position then:
//      a*
//    /   \
//   b     c
//  / \     \
// d   e     f
//* then we go left child:
//      a
//    /   \
//   b*    c
//  / \     \
// d   e     f
//* and then right chil:
//      a
//    /   \
//   b     c*
//  / \     \
// d   e     f

//* then to d, e and eventually f:
//      a
//    /   \
//   b     c
//  / \     \
// d*  e     f

//      a
//    /   \
//   b     c
//  / \     \
// d   e*    f

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f*

//? Resulting order should be: [a,b,c,d,e,f];

//! Breadth-First Traversal Approach:


//* Begin with the root node.
//* Use a queue to manage nodes and track traversal order.
//* Follow the order of left-child-first to ensure proper Breadth-first traversal.


//! Traversal Steps:


//* Push the root node onto the queue.
//* shift() the queue's top node (starting with root) and mark it as visited.
//* Add the node's children to the queue, pushing the left child first, then right child (ensures the left child is processed next).
//* Repeat until the queue is empty.


//! Key Characteristics:

//* A queue is essential to follow depth-first traversal order.
//* Nodes are only added and removed from the queue once, ensuring efficient traversal.

//? Time Complexity: O(n) — each node is visited once.

//? Space Complexity: O(n) — maximum queue size is proportional to the number of nodes in the tree.

//! SOLVE this:
// https://structy.net/problems/breadth-first-values

class Node{
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

//? SOLUTION:

const breadthFirstValues = (root) => {
    if (root === null) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0){
      let current = queue.shift();
      result.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return result;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

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

console.log(breadthFirstValues(a)); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
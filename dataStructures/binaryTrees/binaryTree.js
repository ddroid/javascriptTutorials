//! A binary tree is a type of tree in programming which has max two childs per node.

//!       a
//?     /   \
//!    b     c
//?   / \     \
//!  d   e     f

//* Conditions for a tree to be a binary tree:
//? 1. at most 2 children per node.
//? 2. exactly 1 root.
//? 3. exactly 1 path between root and any node.

//* Not a tree according to rule 3 and 1
//!       a
//?     /   \
//!    b-----c
//?   / \     \
//!  d   e     f

//* Not a tree according to rule 2 and 3 considering the '\' as up faced arrow and '/' as a down facing arrow and '----' as right facing arrow.
//!       a
//?     /   \
//!    b-----c

//* these are considered as binary trees:

//*standard binary tree.
//!       a
//?     /   \
//!    b     c
//* this root with one child is a binary tree
//!       a
//?     /
//!    b   
//* this single node tree is also binary tree
//!       a
//? 
//!        
//* this empty tree is also a binary tree
//! null;
//?   
//!    



//* we use a value null; or undefined; to define unpresense of a node in a tree when coding.

//! we can create nodes in js using class constructor as:
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//? now assigning nodes to variables to create a binary tree
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//* now I can make a binary tree using '.left' and '.right' property and arranging these all variables in a binary tree order as this below.
//!       a
//?     /   \
//!    b     c
//?   / \     \
//!  d   e     f
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


console.log(a);
//! output
// Node {
//     val: 'a',
//     left: Node {
//       val: 'b',
//       left: Node { val: 'd', left: null, right: null },
//       right: Node { val: 'e', left: null, right: null }
//     },
//     right: Node {
//       val: 'c',
//       left: null,
//       right: Node { val: 'f', left: null, right: null }
//     }
//   }
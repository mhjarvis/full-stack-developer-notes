// Binary Search Tree Implementation

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;               // point to null because a new node will not have any
        this.right = null;              // child nodes to point to
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;               // this needs to point at null since all operations will start
    }                                   // from the root node

    isEmpty() {
        return this.root === null;      // will return true if root points to null
    }
}

const bst = new BinarySearchTree();     // create new instance

console.log('\n1. Testing if the tree is empty after initialization?', bst.isEmpty());
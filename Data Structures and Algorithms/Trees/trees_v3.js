// Binary Search Tree Implementation
// https://www.youtube.com/watch?v=n6_Ruq1qvjU&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=36

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

    // function to check if the tree is empty
    isEmpty() {
        return this.root === null;      // will return true if root points to null
    }

    // function to create and insert a new node
    insert(value) {
        const newNode = new Node(value);        // 1. create new node

        if (this.isEmpty()) {                   // 2. if the tree is empty, insert the node as root element
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // function called by insert(value) to recursivly look for an empty location for the new node
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // function to find if a value is in the tree
    search(root, value) {
        if(!root) {                                 // check if the tree is empty
            return false;
        } else {
            if(root.value === value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
}

/* *********************************************** OUTPUT OUTPUT OUTPUT ********************************************** */

const bst = new BinarySearchTree();     // create new instance

console.log('\n1. Testing if the tree is empty after initialization?', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log('\n2. Searching for the following values:');
console.log('15: ', bst.search(bst.root, 15));
console.log('5: ', bst.search(bst.root, 5));
console.log('555: ', bst.search(bst.root, 555));
console.log('10: ', bst.search(bst.root, 10));


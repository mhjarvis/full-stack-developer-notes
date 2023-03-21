// Build a Node class/factory . It should have an attribute for the data it
// stores ass well as its left and right children;

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Build a Tree class/factory which accepts an array when initialized. The Tree
// class should have a root attribute which uses the return value of buildTree
// which you'll write next.

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);                 // create new node
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    delete(data) {
        this.root = this._delete(this.root, data);
    }

    _delete(currentNode, key) {
        if (currentNode === null) {
            return null;
        } else if (key < currentNode.data) {
            currentNode.left = this._delete(currentNode.left, key);
            return currentNode;
        } else if (key > currentNode.data) {
            currentNode.right = this._delete(currentNode.right, key);
            return currentNode;
        } else {
            if (currentNode.left === null && currentNode.right === null) {
                currentNode = null;
                return currentNode;
            }
            if (currentNode.left === null) {
                currentNode = currentNode.right;
                return currentNode;
            } else if (currentNode.right === null) {
                currentNode = currentNode.right;
                return currentNode;
            }

            let aux = this.findMinNode(currentNode.right);
            currentNode.data = aux.data;
            currentNode.right = this._delete(currentNode.right, aux.data);
            return currentNode;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }







}

let tree = new Tree();

console.log('\n1. Creating new tree and inserting values...\n');

tree.insert(34);
tree.insert(33);
tree.insert(45);
tree.insert(1);
tree.insert(588);
tree.insert(84);
tree.insert(233);
tree.insert(12);
tree.insert(46);
tree.insert(78);
tree.insert(79);
tree.insert(98);
tree.insert(93);
tree.insert(23);

prettyPrint(tree.root);

console.log('\n2. Deleting values 98 and 1...\n');

tree.delete(98);
tree.delete(1);

prettyPrint(tree.root);




























function prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
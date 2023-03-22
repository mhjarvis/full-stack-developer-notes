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
        this._delete(data, this.root);
    }

    _delete(value, current = this.root) {
        if(current === null) {
            return current;
        }

        if(value < current.data) {
            current.left = this._delete(value, current.left);
        } else if(value > current.data) {
            current.right = this._delete(value, current.right);
        } else {
            if(!current.right && !current.left) {
                return null;
            } else if(!current.right && current.left) {
                return current.left;
            } else if(current.right && !current.left) {
                return current.right;
            }
        }
        return current;
    }

    find(value) {
        return this._find(value, this.root);
    }

    _find(value, currentNode) {
        console.log(currentNode.data, value)
        if(currentNode.data == value) {
            return true;
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

console.log('\n2. Deleting values 588, 98, and 1...\n');

tree.delete(588);
tree.delete(98);
tree.delete(1);

prettyPrint(tree.root);

console.log('\n3. Searching for values 34, 33, and 79...\n');

console.log('Is 34 in the tree: ' +  tree.find(34));
console.log('Is 33 in the tree: ', tree.find(33));
console.log('Is 79 in the tree: ', tree.find(79));
console.log();

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
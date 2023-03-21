
// Create TreeNode class that will hold data and links to other nodes
class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Create Tree class that will hold the actual tree
class Tree {
    constructor() {
        this.root = null;
    }

    // Visit every node in the tree, and add the value to the array
    collect() {
        return this._collect(this.root, []);
    }
    
    // Underscore indicates people should not use this function themselves. This simulates a private function which
    // should only be called from the Tree class itself. People should use the 'collect' function which calls this one.
    _collect(current, nodes) {
        if (current === null) {
            return nodes;
        }
        // Add current node to the array
        nodes.push(current.data);

        // Recurse left and right
        this._collect(current.left, nodes);
        this._collect(current.right, nodes);

        return nodes;
    }

    // Sum function to iterate through entire tree and totaling values
    sum() {
        return this._sum(this.root);
    }

    _sum(node) {
        if (node === null) {
            return 0;
        }

        return node.data + 
            this._sum(node.left) + 
            this._sum(node.right);

    }

    // Returns true or false depending on if the tree contains a value
    contains(value) {
        return this._contains(this.root, value);
    }
    _contains(node, value) {
     
        if (node === null) {
            return false;
        }
        if (node.data === value) {
            return true;
        }

        return this._contains(node.left, value) ||
        this._contains(node.right, value);

    }
}

// Create five basic nodes
let n1 = new TreeNode(32);
let n2 = new TreeNode(92);
let n3 = new TreeNode(13);
let n4 = new TreeNode(44);
let n5 = new TreeNode(87);

// Create a new Tree
let tree = new Tree();
tree.root = n1;
n1.left = n2;
n1.right = n3;
n3.right = n4;
n4.left = n5;

// Print out results of the .collect function
console.log('\nArray of the Tree: ' + tree.collect());

// Print out the sum fo all nodes in the tree
console.log('\nTotal equals: ' + tree.sum());

// Print out using the 'contains' function
console.log('\nTree contains 99 (false) :' + tree.contains(99));
console.log('Tree contains 44 (true) :' + tree.contains(44));

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
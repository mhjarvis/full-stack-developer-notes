
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
console.log(tree.collect());
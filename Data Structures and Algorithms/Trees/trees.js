
// Create TreeNode class that will hold data and links to other nodes
class TreeNode {
    constructor(data, left, right) {
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

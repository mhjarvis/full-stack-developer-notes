// Build a Node class/factory . It should have an attribute for the data it
// stores ass well as its left and right children;

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Build a Tree class/factory which accepts an array when initialized. The Tree
// class should have a root attribute which uses the return value of buildTree
// which you'll write next.

class Tree {
    constructor(arr = []) {
        this.root = this.buildTree(arr);
    }

    // Function that builds the actual tree
    buildTree(arr) {
        arr = arr.sort(function(a, b){return a - b});
        arr = [...new Set(arr)];

        if(arr.length === 0) {
            return null;
        }

        const mid = Math.floor(arr.length / 2);
        const node = new Node(arr[mid]);

        node.left = this.buildTree(arr.slice(0, mid));
        node.right = this.buildTree(arr.slice(mid + 1));
        return node;       
    }

}

// Function to print the tree layout
const prettyPrint = (node, prefix = '', isLeft = true) => {
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


let tree = new Tree([4, 66, 24, 5, 100, 48, 24, 88, 74, 25, 64, 19])
console.log(prettyPrint(tree.root))
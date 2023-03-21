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
        this.root = buildTree();
        this.arr = arr;
    }
}

console.log(Node);
console.log(Tree);
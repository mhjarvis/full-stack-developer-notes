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


}
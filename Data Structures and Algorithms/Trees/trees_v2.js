// Two types of search related to trees:

// Depth-First-Search - starts at the initial node and goes deepter into the tree until it reaches
// an element without children - a leaf. Then it backtracks and visits the most recent node
// that has not yet been explored.

// Breadth-First Search - starts from the root node and first traverses all the neighboring nodes.
// Then it selects the nearest node and explores the new nodes. 

// Node class holds data and links
class Node {
    constructor(data) {
        this.data = data;               // holds the nodes data
        this.parent = null;             // points to the parent node
        this.children = [];             // contains all children of this node
    }
}

// Tree class to hold actual tree and functions
class Tree {
    constructor(data) {
        let node = new Node(data);      // create new instance of Node
        this._root = node;              // assigns Node as the root of a tree
    }
}
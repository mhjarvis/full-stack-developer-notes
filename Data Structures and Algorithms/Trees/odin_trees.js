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

    // Function to sort and remove duplicates of array. 
    buildTree(arr) {
        arr = [...new Set(arr.sort(function(a, b){return a - b}))];

        if(arr.length === 0) {
            return null;
        }

        const mid = arr[parseInt(arr.length / 2)];

        console.log(mid);
        console.log(arr);
        
    }
}

let tree = new Tree([4, 66, 24, 5, 100, 48, 24, 88, 74, 25, 64, 19])
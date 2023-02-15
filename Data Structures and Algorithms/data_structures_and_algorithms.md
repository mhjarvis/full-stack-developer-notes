## Introduction

Data structures store data based on your needs. The type of data structure to use will depend on the application. Data structures often differ based on:

1. time to populate the data structure.
2. time to add/find elements.
3. the size of the structure in memory.


## Resources

1. [The Odin Project](https://www.theodinproject.com/lessons/javascript-common-data-structures-and-algorithms)
2. [Binary Search](https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470)

## Binary Search
Binary search is the 'divide and conquor' technique for searching. It is used with a sorted array. 

Time complexity: O(logN)

Recursive Solution:

    function recursiveBinarySearch(arr, x, start, end) {
      
      if(start > end) return false;

      let mid = Math.floor((start + end) / 2);

      if(arr[mid] === x) return true;

      if(arr[mid] > x) {
        return recursiveBinarySearch(arr, x, start, mid - 1);
      } else {
        return recursiveBinarySearch(arr, x, mid + 1, end);
      }
    }

Iterative Solution:

    const binarySearch = (array, target) => {
    
      let startIndex = 0;
      let endIndex = array.length - 1;
  
      while(startIndex <= endIndex) {
        
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
    
        if(target === array[middleIndex) {
          return console.log("Target was found at index " + middleIndex);
        }
    
        if(target > array[middleIndex]) {
          console.log("Searching the right side of Array")
          startIndex = middleIndex + 1;
        }
        
        if(target < array[middleIndex]) {
          console.log("Searching the left side of array")
          endIndex = middleIndex - 1;
        }
    
        else {
          console.log("Not Found this loop iteration. Looping another iteration.")
        }
      }
  
      console.log("Target value not found in array");
    }

## Binary Search Trees
Binary Search Trees are node-based binary tree data structures. They are tree-like structures with a single root at the very top. They have the following properties:

- every left child has a smaller value than its parent
- every right child has a larger value than its parent
- eveery node can contain from 0 to 2 children

https://www.freecodecamp.org/news/binary-tree-algorithms-for-javascript-beginners/

<img src="https://github.com/mhjarvis/full-stack-developer-guide/blob/main/Data%20Structures%20and%20Algorithms/bst-21.png?raw=true">

We can define a Binary Tree Node with the following function:

    function TreeNode(val, left, right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }

There are three ways to to traverse a Binary Tree: Inorder traversal, Postorder traversal, and Preorder traversal.

#### Inorder traversal
Uses a recursive algorithm.

    /**
    * {TreeNode} root
    **/

    const inorder = (root) => {
      const nodes = [];
      if(root) {
        inorder(root.left)
        nodes.push(root.val)
        inorder(root.right)
      }
      return nodes
    }
  
#### Postorder traversal
Another recursive algorithm that visits the tree nodes from left to right to mid.

    /**
    * @param {TreeNode} root
    **/
    
    const postorder = (root) => {
      const nodes = []
      if (root) {
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
      }
      return nodes
    }

#### Preorder traversal
A recursive algoritm that visits the tree nodes from mid to left to right.

    /**
    * @param {TreeNode} root
    **/
    const preorder = (root) => {
      const nodes = []
      if (root) {
        nodes.push(root.val)
        preorder(root.left)
        preorder(root.right)
      }
      return nodes
    }


## Queues and Stacks

## Binary Tree Traversal

## Breadth-first Traversal

## Depth-first Traversal

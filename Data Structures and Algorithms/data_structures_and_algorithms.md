## Introduction

Data structures store data based on your needs. The type of data structure to use will depend on the application. Data structures often differ based on:

1. time to populate the data structure.
2. time to add/find elements.
3. the size of the structure in memory.


## Resources

1. [The Odin Project](https://www.theodinproject.com/lessons/javascript-common-data-structures-and-algorithms)
2. []()

## Binary Search

Time complexity: log(n)



## Binary Search Trees
Binary Search Trees are node-based binary tree data structures. They are tree-like structures with a single root at the very top. They have the following properties:

- every left child has a smaller value than its parent
- every right child has a larger value than its parent
- eveery node can contain from 0 to 2 children

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

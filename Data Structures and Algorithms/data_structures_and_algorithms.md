## Introduction

Data structures store data based on your needs. The type of data structure to use will depend on the application. Data structures often differ based on:

1. time to populate the data structure.
2. time to add/find elements.
3. the size of the structure in memory.


## Resources

1. [The Odin Project](https://www.theodinproject.com/lessons/javascript-common-data-structures-and-algorithms)
2. [Binary Search](https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470)
3. [Binary Tree Traversal](https://www.youtube.com/watch?v=9RHO6jU--GU&list=RDCMUClEEsT7DkdVO_fkrBw0OTrA&start_radio=1&rv=9RHO6jU--GU&t=10)
4. [Breadth-first Traversal](https://www.youtube.com/watch?v=86g8jAQug04)

## Binary Search
Binary search is the 'divide and conquor' technique for searching. It is used with a sorted array. 

Time complexity: O(log n)
In each iteration, we are cutting the list in half. For example, a sorted list of 64 elements will take at most log2(64) = 6 iterations.

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
Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.

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

## Queues and Stacks
Stacks - think of stacks as a stack of books. When you add a book, you add it to the top of the pile; when you remove a book, you take it from the top of the pile. You can only add/remove elements from the top of the stack. Some notes: 

- Elements are sorted by insertion order.
- The last element in is first out (LIFO). 
- Elements have no index. 
- Can only add to top and remove from top.

Queues - think of a line at the theatre. Queues have a front and back. You can only add elements to the back and can only remove from the front (queuing and dequeuing). Some notes:

- Elements are sorted by insertion order.
- First element in is first out (FIFO).
- Elements have no index.
- Can only add to back and remove from front.


## Binary Tree Traversal
This is the process of visiting (reading/processing data) each node in the tree exactly once in some order. This can be accomplished by one of two techniques: breadth-first traversal and depth-first traversal.

### Breadth-first Traversal
In this type of Binary Tree Traversal, we would visit all nodes at the same level before moving on to the next level. 

    




### Depth-first Traversal
In this type of Binary Tree Traversal, we would visit all children of a node before moving on. How nodes can be visitited is done through three different approaches:

1. Preorder - <root><left><right>
2. Inorder - <left><root><right>
3. Postorder - <left><right><root>


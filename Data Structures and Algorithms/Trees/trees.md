## Trees

Similar to linked lists, trees use nodes to store information. They are a hierarichal structure, similar to a family tree.

Trees grow downwards (inverse) with a root node at the very top. They come in various shapes and sizes depending on the dataset modeled. 

<img src="https://github.com/mhjarvis/full-stack-developer-notes/blob/main/Data%20Structures%20and%20Algorithms/images/tree_varieties.jpeg">

Each time we traverse a tree and move from a parent to a child, we are going down a level. This is often refered to as depth (counting downwards) or height (counting upwards).

## Binary Trees

Binary trees are a type of tree where each parent can only have at most two children. These are known as the left child and right child. Binary trees also contain two additional restraints:
    - left-child values must be lesser than their parent
    - right-child values must be greater than their parent

These constraints create greater efficiancy when searching the tree, since we will be able to discard half of the values each time.
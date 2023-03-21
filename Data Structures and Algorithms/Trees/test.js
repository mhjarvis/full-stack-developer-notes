// Implementation of binary Search Tree
// heavy recursion ahead

// class representing unit node of Binary Search Tree
class Node {
	constructor ( data ) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// class representing Binary Search Tree
class BST {
	constructor () { this.root = null; }

	// function to initialize BST with node
	insert ( data ) {
		var newNode = new Node( data );
		if ( this.root === null )
			this.root = newNode;
		else
			this.insertNode( this.root, newNode );
	}

	// function to perform insertion on BST
	insertNode ( node, newNode ) {
		if ( newNode.data < node.data ) {
			if ( node.left === null )
				node.left = newNode;
			else
				this.insertNode( node.left, newNode );
		}
		else {
			if ( node.right === null )
				node.right = newNode;
			else
				this.insertNode( node.right, newNode );
		}
	}

	// helper method to call removeNode()
	remove ( data ) { this.root = this.delete( data, this.root ) }

	// function to remove given node from BST
    delete(val,current = this.root){
        
        if(current === null) return current;

        if(val < current.data) current.left = this.delete(val,current.left);
        else if( val > current.data) current.right = this.delete(val,current.right);
        else {
            if(!current.right && !current.left) return null;
            else if(!current.right && current.left) return current.left;
            else if(current.right && !current.left) return current.right;



        }
        return current;
    }

	// method to perform inorder traversal
	inorder ( node ) {
		this.inorder( node.left );
		console.log( node.data );
		this.inorder( node.right );
	}

	// method to perform preorder traversal
	preorder ( node ) {
		console.log( node.data );
		this.preorder( node.left );
		this.preorder( node.right );
	}

	// method to perform postorder traversal
	postorder ( node ) {
		if ( node === null ) return;
		this.postorder( node.left );
		this.postorder( node.right );
		console.log( node.data );
	}

	// to find minimum node in BST
	findMinNode ( node ) {
		if ( node.left === null )
			return node;
		else
			return this.findMinNode( node.left );
	}

	// to get root of BST 
	getRootNode () { return this.root; }

	// to search for a node with given data
	search ( node, data ) {
		if ( node === null )
			return null;
		else if ( data < node.data )
			return this.search( node.left, data );
		else if ( data > node.data )
			return this.search( node.right, data );
		else
			return node;
	}
}

let tree = new BST();

tree.insert(34);
tree.insert(33);
tree.insert(45);
tree.insert(1);
tree.insert(588);
tree.insert(84);
tree.insert(233);
tree.insert(12);
tree.insert(46);
tree.insert(78);
tree.insert(79);
tree.insert(98);
tree.insert(93);
tree.insert(23);

prettyPrint(tree.root);


tree.remove(233);

prettyPrint(tree.root)










function prettyPrint(node, prefix = '', isLeft = true) {
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
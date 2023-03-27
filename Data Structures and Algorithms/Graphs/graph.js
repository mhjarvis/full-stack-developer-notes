/* General Information on Graphs

Graph data structures are good at showing relationships between data. They help solve many different problems, such as searching a graph for a specific vertex or searching for a specific edge, finding a path in the graph (from one vertex to another), finding the shortest path between two vertices, and cycle detection.

                        Alice --- Fred --- Elise
                        /  \       /
                       /    \     /
                      /      \   /
        Cynthia ---  Bob --- Diana          Brian --- John

Each item is represente by a node connected to each other. While this may look like a tree, the main difference to keep in mind is that all trees are graphs, but not all graphs are trees. For a graph to be considered a tree, it cannot have cycles (for example, Alice -> Diana -> Bob -> Diana), and all nodes must be connected (it is possible in graphs that nodes are not connected).

Vertices - these are the nodes containing information and are connected by edges.
Adjacent Vertices - vertices that are connected by an edge.
Edges - connections between vertices.
Degree - a degree of a vertex consists of the number of adjacent vertices.
Path - a sequence of consecutive vertices. 
Cycle - like a path, but the last vertex is the beginning one. 
Acyclic Graph - when a graph does not have any cycles.
Connected Graph - when there is  a path between every pair of vertices.

*/

// Implement basic has table of the above relationships

let friends = {
    'Alice': ['Bob', 'Diana', 'Fred'],
    'Bob' : ['Alice', 'Cynthia', 'Diana'],
    'Cynthia': ['Bob'],
    'Diana': ['Alice', 'Bob', 'Fred'],
    'Elise': ['Fred'],
    'Fred': ['Alice', 'Diana', 'Elise'],
}

console.log(friends.Alice)

/* Direct Graphs vs Undirected Graphs

Directed Graphs have a direction while Undirected Graphs do not. A graph is "Strongly Connected" if there is a path in both directions between every pair of vertices (Cynthia and Bob bellow). 

Graphs can also be "weighted" and "unweighted". This means that the edges themselvees have values (weights). 

                Alice
                /   \
               /     \
              /       \
           Cynthia === Bob

*/

let followees = {
    'Alice': ['Bob', 'Cynthia'], 
    'Bob': ['Cynthia'],
    'Cynthia': ['Bob'],
}

console.log(followees.Bob)

/* Object-Oriented Graph Implementation

*/

class Vertex {
    constructor(value, adjacent_vertices = []) {
        this.value = value;
        this.adjacent_vertices = adjacent_vertices;
    }

    addAdjacentVertices(val) {
         this.adjacent_vertices = val;
    }
}

// Build a direct graph using classd
console.log('\nPrint out a value in a direct graph implementation: \n')
let alice = new Vertex('alice')
let bob = new Vertex('bob')
let cynthia = new Vertex('cynthia')

alice.addAdjacentVertices(bob)
alice.addAdjacentVertices(cynthia)
bob.addAdjacentVertices(cynthia)
cynthia.addAdjacentVertices(bob)

console.log(alice)

/* Adjacency Matrix

A common implementation of a graph is the Adjacency Matrix. Like a chess board, each node is repreented by a integer. Connections between vertices are made using a two-dimensional array (e.g. array[i][j === 1]) - if there is an edge from the node with index i to the node with index j (0 is used otherwise). 

Graphs that are not strongly connected (Sparse Graphs) will have many zero entries in the matrix.

*/
/* General Information on Graphs

Graph data structures are good at showing relationships between data. 

                        Alice --- Fred --- Elise
                        /  \       /
                       /    \     /
                      /      \   /
        Cynthia ---  Bob --- Diana          Brian --- John

Each item is represente by a node connected to each other. While this may look like a tree, the main difference to keep in mind is that all trees are graphs, but not all graphs are trees. For a graph to be considered a tree, it cannot have cycles (for example, Alice -> Diana -> Bob -> Diana), and all nodes must be connected (it is possible in graphs that nodes are not connected).

Nodes are a "vertex" in graphs and the lines (vertices) between nodes are "edges". Vertices that are connected by an edge are said to be "adjacent" to each other (also called "neighbors"). A graph withall of the vertices connected in some way is called a "connected graph". 

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

/* Direct Graphs 

Relationships are not always mutual (Bob and Diana could follow each other, but Bob might not follow Diana back). This is known as a "direct graph". 

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
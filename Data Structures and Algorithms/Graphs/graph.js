// Create Vertex class to hold node values

class Vertex {
    constructor(value, adjacent_vertices = []) {
        this.value = value;
        this.adjacent_vertices = adjacent_vertices;
    }

    addAdjacentVertices(val) {
         this.adjacent_vertices = val;
    }
}

// Create Graph class

class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary();
    }
}
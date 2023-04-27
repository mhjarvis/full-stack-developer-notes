/* NON-ADJACENT GRAPH

Graph: 

    I - J
    | 
    K - L
    |
    M

    O - N

*/
/*
const graph = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o'],
}
*/

// Is there a path between src: i and dst: l?

// UNDIRECTED PATH USING AN ARRAY OF EDGES

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

// function to build a graph out of an array of edges
const buildGraph = (edges) => {
    const graph = {};               // create object to hold graph

    for (let edge of edges) {       // cycle through each edge pair
        const [a, b] = edge;        // assign each edge to [a, b]
        if (!(a in graph)) graph[a] = [];   // if a is not in the graph, add it
        if (!(b in graph)) graph[b] = [];   // if b is not in the graph, add it

        graph[a].push(b);           // push b into graph[a]
        graph[b].push(a);           // push a into graph[b]
    }
    return graph;
}

const hasPath = (graph, src, dst, visited) => {
    if (visited.has(src)) return false;
    if (src === dst) {
        return true;
    }

    visited.add(src);

    for (let neighbor of graph[src]) {
       if (hasPath(graph, neighbor, dst, visited) === true) {
        return true;
       }
    }
    return false;
}


console.log(undirectedPath(edges, 'i', 'o'))
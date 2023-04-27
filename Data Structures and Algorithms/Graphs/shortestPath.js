/*



*/

const edges = [
    ['w', 'x'],
    ['x', 'y'], 
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

const toGraph = (edges) => {
    const graph = {};           // create graph object to hold adjacency list

    for (edge in edges) {
        console.log(edges[edge])
    }



    return graph;
}

console.log(toGraph(edges));
/*



*/

const edges = [
    ['w', 'x'],
    ['x', 'y'], 
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

// 1. Create graph object to hold new values
// 2. Create a loop to loop through each of the edges in 'edges'
// 3. Assign each [edge] to a const [a, b]
// 4. Iterate through each [edge] to test if it is already in the object
//      a. If not in object, create it with a empty array: graph[a] = []
//      b. Do the same with the second element in the array.
// 5. Add each element to each other
//      a. Add b to a: graph[a].push(b)
//      b. Add a to b: graph[b].push(a)

const toGraph = (edges) => {
    const graph = {};           // create graph object to hold adjacency list

    for (let edge in edges) {
        const [a, b] = edge;

    }



    return graph;
}

console.log(toGraph(edges));
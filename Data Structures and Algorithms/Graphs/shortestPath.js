/*



*/

const edges = [
    ['i', 'j'],
    ['k', 'i'], 
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

// 1. Create graph object to hold new values
// 2. Create a loop to loop through each of the edges in 'edges'
// 3. Assign each [edge] to a const [a, b] or cycle through each edge array with a loop
// 4. Iterate through each [edge] to test if it is already in the object
//      a. If not in object, create it with a empty array: graph[a] = []
//      b. Do the same with the second element in the array.
// 5. Add each element to each other
//      a. Add b to a: graph[a].push(b)
//      b. Add a to b: graph[b].push(a)

const toGraph = (edges) => {
    const graph = {};           // create graph object to hold adjacency list

    for (let edge of edges) {   // loop through each edge array
        const [a, b] = edge;    // assign edge to const
        // add empty properties to graph
        if (!(a in graph)) graph[a] = [];   
        if (!(b in graph)) graph[b] = [];

        // populate properties with values (exclude duplicates)
        if(!(graph[a].includes(b))) graph[a].push(b);
        if(!(graph[b].includes(a))) graph[b].push(a);
    }

    return graph;
}

console.log(toGraph(edges));


let x = {
    a: ['b']
}


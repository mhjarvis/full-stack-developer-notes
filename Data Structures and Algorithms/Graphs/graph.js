/*  Graphs

Graphs = Nodes (vertices) + Edges. There are directed and non-directed graphs. 

In graphs, you can also have depth-first and breadth-first traversals.

1. Depth-First Traversal - exploring one direction as far as you can before switching directions. 
    a. Uses a Stack
2. Breadth-First Traversal - from starting point, explore all immediate neighbors to the first node, then follow that behavior. Explore all directions equally. 
    b. Uses a Queue

    A  -->  C
    |       |
    v       v
    B       E
    |
    v
    D  -->  F

*/

// Basic graph using an adjacency list
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// Depth-First Function
const depthFirstPrint = (graph, source) => {
    const stack = [source];                                 // create a stack that holds each node and starts 
                                                            // with the source node
    while(stack.length > 0) {                               // do things while the stack has items in it
        const current = stack.pop();                        // remove the first node for processing
        console.log(current);                               // print out the value
        for (let neighbor of graph[current]) {          
            stack.push(neighbor);                           // add each neighbor to the stack (array)
        }
    }
}

depthFirstPrint(graph, 'a');        // abcdfce

// Breadth-First Function

const breadthFirstPrint = (graph, source) => {
    const queue = [source];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }

}

console.log('\n');
breadthFirstPrint(graph, 'a');      // abcdef







  
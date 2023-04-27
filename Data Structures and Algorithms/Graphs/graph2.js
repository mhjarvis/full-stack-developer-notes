/* NON-ADJACENT GRAPH

Graph: 

    I - J
    | 
    K - L
    |
    M

    O - N

*/

const graph = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o'],
}

// Is there a path between src: i and dst: l?
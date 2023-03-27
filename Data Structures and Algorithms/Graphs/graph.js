/* 

Graph data structures are good at showing relationships between data. 

                        Alice --- Fred --- Elise
                        /  \       /
                       /    \     /
                      /      \   /
        Cynthia ---  Bob --- Diana          Brian --- John

Each item is represente by a node connected to each other. While this may look like a tree, the main difference to keep in mind is that all trees are graphs, but not all graphs are trees. For a graph to be considered a tree, it cannot have cycles (for example, Alice -> Diana -> Bob -> Diana), and all nodes must be connected (it is possible in graphs that nodes are not connected).

Nodes are a "vertex" in graphs and the lines (vertices) between nodes are "edges". Vertices that are connected by an edge are said to be "adjacent" to each other (also called "neighbors"). A graph withall of the vertices connected in some way is called a "connected graph". 

*/
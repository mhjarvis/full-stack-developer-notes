/* 

Graph data structures are good at showing relationships between data. 

                        Alice --- Fred --- Elise
                        /  \       /
                       /    \     /
                      /      \   /
        Cynthia ---  Bob --- Diana

Each item is represente by a node connected to each other. While this may look like a tree, the main difference to keep in mind is that all trees are graphs, but not all graphs are trees. For a graph to be considered a tree, it cannot have cycles (for example, Alice -> Diana -> Bob -> Diana), and all nodes must be connected (it is possible in graphs that nodes are not connected).



*/
const week11Questions = [
    {
        question:
            "What are the two fundamental components that make up a graph data structure?",
        options: [
            "Head and Tail",
            "Stacks and Queues",
            "Vertices and Edges",
            "Keys and Values"
        ],
        answer: "Vertices and Edges",
        explanation:
            "A graph is formally defined as a set of vertices (nodes or points) and a set of edges (links or arcs) that connect pairs of vertices."
    },
    {
        question:
            "What is the main disadvantage of using an adjacency matrix to represent a large, sparse graph (a graph with many vertices but few edges)?",
        options: [
            "It is slow to check if an edge exists between two vertices.",
            "It uses a large amount of memory, O(V^2), regardless of the number of edges.",
            "It cannot represent weighted 10-graphs.",
            "It only works for directed 10-graphs."
        ],
        answer: "It uses a large amount of memory, O(V^2), regardless of the number of edges.",
        explanation:
            "The memory usage of an adjacency matrix depends only on the number of vertices (V), not the number of edges. This makes it very inefficient for sparse 10-graphs, where most of the matrix would be zeros."
    },
    {
        question:
            "Which data structure is essential for implementing the Breadth-First Search (BFS) algorithm?",
        options: [
            "A Stack",
            "A Queue",
            "A Hash Table",
            "A Binary Search Tree"
        ],
        answer: "A Queue",
        explanation:
            "BFS explores the graph layer by layer. The FIFO (First-In, First-Out) nature of a queue is perfect for managing the nodes to visit at each level in the correct order."
    },
    {
        question:
            "Which data structure is implicitly used to manage the 'backtracking' in a recursive implementation of Depth-First Search (DFS)?",
        options: [
            "A Queue",
            "The Call Stack",
            "A Heap",
            "An Adjacency Matrix"
        ],
        answer: "The Call Stack",
        explanation:
            "Recursive function calls are managed by the program's call stack. Its LIFO (Last-In, First-Out) behavior provides the perfect mechanism for exploring a path deeply and then 'backtracking' to the last decision point when a dead end is reached."
    },
    {
        question:
            "If you perform a BFS on a graph, which nodes will be visited immediately after the starting node?",
        options: [
            "All nodes in the graph.",
            "All the direct neighbors of the starting node.",
            "The node furthest away from the starting node.",
            "A single, randomly chosen neighbor."
        ],
        answer: "All the direct neighbors of the starting node.",
        explanation:
            "BFS explores in concentric layers. After visiting the start node (layer 0), it visits all its direct neighbors (layer 1) before moving on to their neighbors (layer 2)."
    },
    {
        question:
            "What is the characteristic behavior of a Depth-First Search (DFS)?",
        options: [
            "It explores the graph in even layers, like ripples in a pond.",
            "It always finds the shortest path between two nodes.",
            "It explores as far as possible down one path before it backtracks.",
            "It visits nodes in ascending order of their value."
        ],
        answer: "It explores as far as possible down one path before it backtracks.",
        explanation:
            "This 'deep dive' approach is the defining characteristic of DFS, making it suitable for problems like solving a maze."
    },
    {
        question:
            "When adding an edge for an **undirected** graph using an adjacency list, if you add an edge from vertex `u` to `v`, what else must you do?",
        options: [
            "Nothing, the connection is complete.",
            "Also add an edge from vertex `v` to `u`.",
            "Remove any existing edges from `u`.",
            "Add an edge from `u` to itself."
        ],
        answer: "Also add an edge from vertex `v` to `u`.",
        explanation:
            "An undirected edge represents a two-way relationship. To model this correctly, the connection must be stored in both vertices' adjacency lists."
    },
    {
        question:
            "Breadth-First Search is an excellent algorithm for which of the following problems?",
        options: [
            "Finding the longest path in a weighted graph.",
            "Sorting the vertices of a graph alphabetically.",
            "Finding the shortest path (in terms of number of edges) in an unweighted graph.",
            "Determining if a graph has more vertices than edges."
        ],
        answer: "Finding the shortest path (in terms of number of edges) in an unweighted graph.",
        explanation:
            "Because BFS explores layer by layer, the first time it reaches a target node, it is guaranteed to have found a path with the minimum number of edges."
    },
    {
        question:
            "In an adjacency list representation of a graph, what is stored at each index `i` of the main array?",
        options: [
            "A single integer value representing a connection.",
            "The weight of the edge from vertex `i`.",
            "A linked list containing all the vertices that are adjacent to vertex `i`.",
            "A boolean value indicating if vertex `i` has been visited."
        ],
        answer: "A linked list containing all the vertices that are adjacent to vertex `i`.",
        explanation:
            "This is the core concept of an adjacency list. The array maps each vertex to a list of its direct neighbors."
    },
    {
        question:
            "A social network with millions of users but where the average user has only a few hundred friends is an example of what kind of graph?",
        options: [
            "A dense graph",
            "A sparse graph",
            "A complete graph",
            "A weighted graph"
        ],
        answer: "A sparse graph",
        explanation:
            "A sparse graph is one with many vertices but relatively few edges compared to the maximum possible number of edges. An adjacency list is the most memory-efficient way to represent such a graph."
    }
];

export default week11Questions;
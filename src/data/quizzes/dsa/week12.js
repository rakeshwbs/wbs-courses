const week12Questions = [
    {
        question:
            "What is the worst-case time complexity of the Bubble Sort algorithm?",
        options: [
            "O(n log n)",
            "O(n)",
            "O(n^2)",
            "O(log n)"
        ],
        answer: "O(n^2)",
        explanation:
            "Bubble Sort has a time complexity of O(n^2) due to its nested loop structure, where every element is compared with every other element in the worst case. This makes it very inefficient for large datasets."
    },
    {
        question:
            "Which sorting algorithm works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning?",
        options: [
            "Bubble Sort",
            "Insertion Sort",
            "Selection Sort",
            "Merge Sort"
        ],
        answer: "Selection Sort",
        explanation:
            "This is the core logic of Selection Sort. In each pass, it 'selects' the smallest remaining element and swaps it into its correct sorted position."
    },
    {
        question:
            "Insertion sort is particularly efficient for which type of dataset?",
        options: [
            "Large, randomly ordered datasets.",
            "Datasets that are already sorted in reverse order.",
            "Small datasets or datasets that are already nearly sorted.",
            "Datasets containing only unique elements."
        ],
        answer: "Small datasets or datasets that are already nearly sorted.",
        explanation:
            "Insertion Sort's best-case time complexity is O(n). When an array is nearly sorted, the inner while loop that shifts elements runs very few times, making it very fast."
    },
    {
        question:
            "What algorithmic paradigm is Merge Sort a classic example of?",
        options: [
            "Greedy Algorithm",
            "Dynamic Programming",
            "Divide and Conquer",
            "Brute Force"
        ],
        answer: "Divide and Conquer",
        explanation:
            "Merge Sort embodies the Divide and Conquer strategy: it recursively divides the problem (the array) into smaller subproblems until they are trivial (size 1), and then combines the solutions (merges the sorted subarrays)."
    },
    {
        question:
            "What is the time complexity of a well-implemented Merge Sort algorithm?",
        options: [
            "O(n^2)",
            "O(n)",
            "O(n log n)",
            "O(log n)"
        ],
        answer: "O(n log n)",
        explanation:
            "The O(n log n) complexity makes Merge Sort significantly more efficient than simple O(n^2) algorithms like Bubble Sort for large datasets. This performance is consistent across best, average, and worst cases."
    },
    {
        question:
            "What is the primary operation in the 'conquer' or 'combine' step of the Merge Sort algorithm?",
        options: [
            "Swapping adjacent elements.",
            "Finding the minimum element.",
            "Merging two sorted subarrays into one sorted array.",
            "Partitioning the array around a pivot."
        ],
        answer: "Merging two sorted subarrays into one sorted array.",
        explanation:
            "The 'merge' step is the heart of the algorithm, where it skillfully combines two already sorted lists in linear time to produce a larger sorted list."
    },
    {
        question:
            "Which of the following data structures have we NOT covered in this course?",
        options: [
            "Hash Table",
            "Binary Search Tree",
            "Heap",
            "Graph"
        ],
        answer: "Heap",
        explanation:
            "We have covered Hash Tables, BSTs, and Graphs. A Heap is another important tree-based data structure, often used to implement priority queues, which was not on our syllabus."
    },
    {
        question:
            "Which data structure would be the most efficient choice for implementing a phone book to look up 02-numbers by name?",
        options: [
            "A Stack",
            "A Queue",
            "A Hash Table",
            "A simple Linked List"
        ],
        answer: "A Hash Table",
        explanation:
            "A hash table (implementing a Dictionary ADT) is ideal for this. It provides O(1) average time complexity for looking up a value (phone number) based on a key (name)."
    },
    {
        question:
            "The concept of a 'base case' and a 'recursive step' is fundamental to which programming technique?",
        options: [
            "Iteration",
            "Hashing",
            "Recursion",
            "Sorting"
        ],
        answer: "Recursion",
        explanation:
            "These are the two essential components of any valid recursive function. The base case stops the function, and the recursive step breaks the problem down and calls itself."
    },
    {
        question:
            "Which algorithm uses a queue to explore a graph level by level?",
        options: [
            "Depth-First Search (DFS)",
            "Breadth-First Search (BFS)",
            "Merge Sort",
            "Insertion Sort"
        ],
        answer: "Breadth-First Search (BFS)",
        explanation:
            "The FIFO nature of a queue is perfectly suited for managing the nodes to visit in a level-by-level order, which is the core of the BFS traversal strategy."
    }
];

export default week12Questions;
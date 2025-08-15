const week9Questions = [
    {
        question:
            "What is the fundamental property of a Binary Search Tree (BST) for any given node `N`?",
        options: [
            "All values in the tree are less than N's value.",
            "All values in its left subtree are greater than N's value.",
            "All values in its left subtree are less than N's value, and all values in its right subtree are greater.",
            "The tree must be perfectly balanced."
        ],
        answer: "All values in its left subtree are less than N's value, and all values in its right subtree are greater.",
        explanation:
            "This ordering principle is the core rule of a BST. It must hold true for every node in the tree and is what enables efficient searching by allowing half the remaining nodes to be discarded at each step."
    },
    {
        question:
            "In tree terminology, what is a 'leaf' node?",
        options: [
            "The topmost node in the tree.",
            "A node with exactly one child.",
            "A node with no children.",
            "A node that has two children."
        ],
        answer: "A node with no children.",
        explanation:
            "Leaf nodes are the terminals or endpoints of the branches in a tree. They have a depth but a height of 0."
    },
    {
        question:
            "What is the average-case time complexity for searching for a value in a reasonably balanced Binary Search Tree with `n` nodes?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        answer: "O(log n)",
        explanation:
            "Logarithmic time complexity is achieved because at each level of the tree, the search algorithm can eliminate roughly half of the remaining nodes, drastically reducing the search space."
    },
    {
        question:
            "When inserting the value `35` into a BST, if the current node you are examining has the value `50`, where should the recursive insertion process continue?",
        options: [
            "In the left subtree.",
            "In the right subtree.",
            "It should be inserted as the new root.",
            "The value cannot be inserted."
        ],
        answer: "In the left subtree.",
        explanation:
            "According to the BST property, since `35` is less than `50`, the algorithm must proceed down the left path to find the correct position for the new node."
    },
    {
        question:
            "What uniquely defines the 'root' node of a tree?",
        options: [
            "It is the node with the highest value.",
            "It is the only node in the tree that has no parent.",
            "It is always a leaf node.",
            "It is the last node to be inserted."
        ],
        answer: "It is the only node in the tree that has no parent.",
        explanation:
            "The root is the single ancestor of all other nodes in the tree and serves as the starting point for all tree traversals and operations."
    },
    {
        question:
            "Why is it a common design pattern to use a private recursive helper function for an operation like `insert` in a BST class?",
        options: [
            "Because private functions run faster than public functions.",
            "To hide the complexity of the recursion and provide a simpler public interface.",
            "Because C++ requires all recursive functions to be private.",
            "To use less memory on the call stack."
        ],
        answer: "To hide the complexity of the recursion and provide a simpler public interface.",
        explanation:
            "This encapsulates the implementation details. The user calls a simple public method like `myTree.insert(42)`. Internally, the class uses a more complex private method `insert(currentNode, 42)` that needs to pass node pointers to work recursively."
    },
    {
        question:
            "In a recursive search function for a BST, what is the base case that indicates the target value is *not* present in the tree?",
        options: [
            "The current node's value is 0.",
            "The current node is a leaf node.",
            "The current node pointer is `nullptr`.",
            "The function has been called more than `n` times."
        ],
        answer: "The current node pointer is `nullptr`.",
        explanation:
            "Reaching a `nullptr` means you have followed the correct path to where the value *should* be, but have found an empty spot. This definitively proves the value is not in the tree."
    },
    {
        question:
            "What is the worst-case time complexity for a search operation in a BST, and what does the tree look like in this case?",
        options: [
            "O(log n), when the tree is perfectly balanced.",
            "O(n), when the tree is degenerate and resembles a linked list.",
            "O(n^2), when the tree is full.",
            "O(1), when the tree is empty."
        ],
        answer: "O(n), when the tree is degenerate and resembles a linked list.",
        explanation:
            "If elements are inserted in a sorted or reverse-sorted order, the tree will not branch out. It will form a long chain, and a search operation will have to visit every node, just like in a linked list."
    },
    {
        question:
            "What is the defining characteristic of a Binary Tree?",
        options: [
            "Each node must have exactly two children.",
            "Each node can have at most two children.",
            "The tree must have a height of exactly 2.",
            "All leaf nodes must be at the same depth."
        ],
        answer: "Each node can have at most two children.",
        explanation:
            "This is the key definition. A node in a binary tree is permitted to have zero, one, or two children, but no more."
    },
    {
        question:
            "A `TreeNode` class for a binary tree would typically contain a data member and what else?",
        options: [
            "A single pointer to the next node.",
            "Two pointers: `left` and `right`.",
            "A pointer to the parent node only.",
            "An array of child pointers."
        ],
        answer: "Two pointers: `left` and `right`.",
        explanation:
            "To form a binary tree structure, each node needs the potential to link to two other nodes: a left child and a right child."
    }
];

export default week9Questions;
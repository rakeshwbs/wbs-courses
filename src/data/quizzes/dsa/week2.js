const week2Questions = [
    {
        question:
            "What is the primary disadvantage of using an array when you need to frequently insert elements into the middle of a sorted collection?",
        options: [
            "Arrays cannot store elements of the same data type.",
            "Accessing an element by its index is a very slow operation.",
            "All subsequent elements must be shifted, which is an inefficient (O(n)) operation.",
            "Arrays can only be stored on the heap, not the stack."
        ],
        answer: "All subsequent elements must be shifted, which is an inefficient (O(n)) operation.",
        explanation:
            "Inserting an element into an array requires making space by shifting all elements after the insertion point one position to the right. This is a time-consuming process for large arrays."
    },
    {
        question:
            "In a linked list, what is a 'Node'?",
        options: [
            "A special variable that tracks the total number of elements in the list.",
            "An element containing a piece of data and a pointer to the next element.",
            "A function that sorts the list.",
            "The memory address of the first element only."
        ],
        answer: "An element containing a piece of data and a pointer to the next element.",
        explanation:
            "A node is the fundamental building block of a linked list. Each node holds a value (data) and a reference (next pointer) that links it to the next node in the sequence."
    },
    {
        question:
            "How do you identify the end of a singly linked list?",
        options: [
            "By checking if the `data` value of a node is zero.",
            "By reaching a special 'end' node.",
            "By checking if a node's `next` pointer is equal to `nullptr`.",
            "By comparing the address of the current node to the `head` pointer."
        ],
        answer: "By checking if a node's `next` pointer is equal to `nullptr`.",
        explanation:
            "`nullptr` (or `NULL`) is a special value indicating that the pointer points to nothing. The last node in the list has its `next` pointer set to `nullptr` to signify the termination of the list."
    },
    {
        question:
            "What is the sole purpose of the 'head' pointer in a linked list implementation?",
        options: [
            "To store the total count of nodes in the list.",
            "To point to the last node in the list.",
            "To store the memory address of the very first node in the list.",
            "To store the data of the first node."
        ],
        answer: "To store the memory address of the very first node in the list.",
        explanation:
            "The `head` pointer is the entry point to the list. By knowing the address of the first node, we can traverse the entire list by following the chain of `next` pointers. If `head` is `nullptr`, the list is empty."
    },
    {
        question:
            "In the C++ `LinkedList` class from the lecture, why is the `head` pointer declared as `private`?",
        options: [
            "To make the code compile faster.",
            "To follow the principle of encapsulation, preventing direct, uncontrolled modification from outside the class.",
            "Because pointers cannot be public in C++.",
            "To save memory."
        ],
        answer: "To follow the principle of encapsulation, preventing direct, uncontrolled modification from outside the class.",
        explanation:
            "Encapsulation is about protecting the internal state of an object. By making `head` private, we force all interactions to go through controlled public methods (like `appendNode`), preventing the list from being corrupted accidentally."
    },
    {
        question:
            "If a `LinkedList` object is newly created using the constructor `LinkedList() { head = nullptr; }`, what does this state represent?",
        options: [
            "A list with one node.",
            "A corrupted or invalid list.",
            "An empty list.",
            "A list that is full and cannot accept new nodes."
        ],
        answer: "An empty list.",
        explanation:
            "The defined state for an empty linked list is when its `head` pointer points to `nullptr`, indicating that there are no nodes in the list to point to."
    },
    {
        question:
            "In the 'Treasure Hunt' analogy for a linked list, what does `nullptr` represent?",
        options: [
            "The very first clue.",
            "A clue that points back to the beginning.",
            "The map itself.",
            "The final clue that says 'You've found the treasure, the hunt is over.'"
        ],
        answer: "The final clue that says 'You've found the treasure, the hunt is over.'",
        explanation:
            "The treasure hunt follows a chain of clues (nodes). The `nullptr` at the end of the list is analogous to the final sign that the sequence has ended and there are no more clues to follow."
    },
    {
        question:
            "Which of the following C++ statements correctly defines a constructor for a `Node` class that takes an integer value?",
        options: [
            "`Node(int value) { data = value; next = nullptr; }`",
            "`void Node(int value) { data = value; next = nullptr; }`",
            "`int Node(int value) { return data; }`",
            "`Node() { value = 0; next = nullptr; }`"
        ],
        answer: "`Node(int value) { data = value; next = nullptr; }`",
        explanation:
            "A constructor in C++ has the same name as the class (`Node`), has no return type (not even `void`), and is used to initialize the object's members. This option correctly sets the `data` and initializes the `next` pointer safely to `nullptr`."
    },
    {
        question:
            "How is a linked list fundamentally different from an array in terms of memory layout?",
        options: [
            "Linked list nodes are always stored in a single, contiguous block of memory.",
            "Linked list nodes can be scattered anywhere in memory, connected only by pointers.",
            "Arrays are stored on the heap, while linked lists are stored on the stack.",
            "There is no difference in their memory layout."
        ],
        answer: "Linked list nodes can be scattered anywhere in memory, connected only by pointers.",
        explanation:
            "This is the key difference. Array elements must be adjacent in memory (`arr[0]`, `arr[1]`, etc.). Linked list nodes are allocated dynamically and can exist anywhere; their logical order is maintained by the `next` pointers, not their physical location."
    },
    {
        question:
            "When appending a new node to a non-empty linked list, what is the first step you must perform?",
        options: [
            "Set the `head` pointer to the new node.",
            "Traverse the list to find the last node.",
            "Delete the current last node to make space.",
            "Check if the list is full."
        ],
        answer: "Traverse the list to find the last node.",
        explanation:
            "To append, you must add the new node *after* the current last node. This requires starting at the `head` and following the `next` pointers until you reach the node whose `next` pointer is `nullptr`."
    }
];

export default week2Questions;
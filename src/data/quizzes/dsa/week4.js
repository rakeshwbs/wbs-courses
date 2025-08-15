const week4Questions = [
    {
        question:
            "What is the key structural difference in a `Node` of a doubly linked list compared to a singly linked list?",
        options: [
            "It stores data of type `double` instead of `int`.",
            "It contains an additional `prev` pointer to point to the previous node.",
            "It does not have a `next` pointer.",
            "It can store two data elements instead of one."
        ],
        answer: "It contains an additional `prev` pointer to point to the previous node.",
        explanation:
            "The defining feature of a doubly linked list node is the second pointer, `prev`, which enables traversal in the backward direction."
    },
    {
        question:
            "What is the primary advantage of using a doubly linked list over a singly linked list?",
        options: [
            "It uses significantly less memory per node.",
            "It allows for efficient traversal in both forward and backward directions.",
            "It is simpler to implement.",
            "Searching for an element is always an O(1) operation."
        ],
        answer: "It allows for efficient traversal in both forward and backward directions.",
        explanation:
            "The `prev` pointer makes moving backward just as easy and efficient as moving forward, which is impossible in a standard singly linked list."
    },
    {
        question:
            "In a standard circularly linked list, where does the `next` pointer of the last node in the sequence point?",
        options: [
            "To `nullptr`",
            "To the second-to-last node",
            "To the `head` node",
            "To itself"
        ],
        answer: "To the `head` node",
        explanation:
            "This backward link from the last node to the first node is what forms the 'circle' and differentiates it from a standard, null-terminated list."
    },
    {
        question:
            "Which of the following applications is best suited for a circularly linked list?",
        options: [
            "Implementing a browser's history (back button functionality).",
            "Storing a dictionary of words for fast look-up.",
            "Managing turns for players in a round-robin board game.",
            "Implementing a simple 'Undo' feature in a text editor."
        ],
        answer: "Managing turns for players in a round-robin board game.",
        explanation:
            "A circular list is perfect for applications that require continuous looping or cycling through a set of items, like moving from the last player back to the first."
    },
    {
        question:
            "When deleting a known node from a doubly linked list, the process is often simpler than in a singly linked list. Why?",
        options: [
            "You do not need to deallocate memory with `delete`.",
            "You can find the previous node directly using the target node's `prev` pointer, without needing a separate trailing pointer during traversal.",
            "It requires fewer pointer re-assignments.",
            "The deletion operation becomes O(1) regardless of the node's position."
        ],
        answer: "You can find the previous node directly using the target node's `prev` pointer, without needing a separate trailing pointer during traversal.",
        explanation:
            "In a singly linked list, finding the node *before* the one you want to delete is a key part of the challenge. In a doubly linked list, that information is immediately available via `targetNode->prev`."
    },
    {
        question:
            "What is a key trade-off or disadvantage of using a doubly linked list?",
        options: [
            "It cannot be traversed backward.",
            "The time complexity for searching becomes O(n^2).",
            "It requires more memory per node because of the extra `prev` pointer.",
            "It cannot store duplicate values."
        ],
        answer: "It requires more memory per node because of the extra `prev` pointer.",
        explanation:
            "The added functionality of bidirectional traversal comes at the cost of increased memory overhead for each node in the list."
    },
    {
        question:
            "Why can't you use a simple `while (current != nullptr)` loop to traverse a standard circular linked list?",
        options: [
            "Because this loop syntax is invalid in modern C++.",
            "Because `current` will never be `nullptr` in a circular list, leading to an infinite loop.",
            "Because circular lists do not use pointers.",
            "Because this loop only works for doubly linked lists."
        ],
        answer: "Because `current` will never be `nullptr` in a circular list, leading to an infinite loop.",
        explanation:
            "Since the last node points back to the head, there is no `nullptr` to terminate the loop. Traversal requires a different condition, such as checking if the traversal pointer has returned to the starting point (e.g., the head)."
    },
    {
        question:
            "When inserting a `newNode` between `nodeA` and `nodeB` in a doubly linked list, which of the following is a necessary pointer update?",
        options: [
            "`head->prev = newNode;`",
            "`nodeB->prev = newNode;`",
            "`nodeA->prev = newNode;`",
            "`tail->next = newNode;`"
        ],
        answer: "`nodeB->prev = newNode;`",
        explanation:
            "This is one of the four essential pointer re-assignments for a middle insertion. `nodeB`'s `prev` pointer, which used to point to `nodeA`, must now be updated to point back to the `newNode`."
    },
    {
        question:
            "When a new `Node` for a doubly linked list is first created with its constructor, what should its `prev` and `next` pointers be initialized to?",
        options: [
            "To the address of the `head` node.",
            "To the address of the node itself.",
            "To `nullptr`.",
            "To a temporary memory address."
        ],
        answer: "To `nullptr`.",
        explanation:
            "A node should be created in a neutral state. When it is first allocated, it is not yet part of any list, so its pointers should point to nothing (`nullptr`) until it is explicitly linked."
    },
    {
        question:
            "In a doubly linked list implementation that uses a `tail` pointer, what is its primary benefit?",
        options: [
            "It makes searching for a value an O(1) operation.",
            "It allows for appending nodes to the end of the list in O(1) time.",
            "It reduces the memory usage of the list.",
            "It is required for forward traversal."
        ],
        answer: "It allows for appending nodes to the end of the list in O(1) time.",
        explanation:
            "Without a `tail` pointer, you would have to traverse the entire list from the `head` to find the last node, making appending an O(n) operation. The `tail` pointer gives you direct access to the end."
    }
];

export default week4Questions;
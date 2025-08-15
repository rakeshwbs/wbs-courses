const week3Questions = [
    {
        question:
            "Why is prepending a node (inserting at the head) to a linked list considered a very fast, O(1) operation?",
        options: [
            "Because it requires traversing the entire list first to find the correct position.",
            "Because C++ has a built-in optimization specifically for head insertions.",
            "Because it doesn't require any memory allocation.",
            "Because it only requires updating the `head` pointer and one `next` pointer, regardless of list size."
        ],
        answer: "Because it only requires updating the `head` pointer and one `next` pointer, regardless of list size.",
        explanation:
            "Inserting at the head doesn't require a traversal. The number of steps is constant: create a new node, link it to the old head, and update the head. This makes it an O(1), or constant time, operation."
    },
    {
        question:
            "To correctly delete a node from the middle of a linked list, which pointer is most critical to find and modify?",
        options: [
            "The `head` pointer.",
            "The `next` pointer of the node that is being deleted.",
            "The `next` pointer of the node that comes *before* the one to be deleted.",
            "A pointer to the very last node in the list."
        ],
        answer: "The `next` pointer of the node that comes *before* the one to be deleted.",
        explanation:
            "To remove a node, you must 'bypass' it. This is done by changing the `next` pointer of the preceding node to point to the node that comes after the one being deleted, effectively cutting it out of the chain."
    },
    {
        question:
            "What is the correct loop condition for a C++ `while` loop designed to traverse and process *every* node in a list? (Assume `Node* current = head;`)",
        options: [
            "`while (current->next != nullptr)`",
            "`while (current != nullptr)`",
            "`while (current->data > 0)`",
            "`while (head->next != nullptr)`"
        ],
        answer: "`while (current != nullptr)`",
        explanation:
            "The condition `while (current != nullptr)` ensures the loop continues as long as `current` points to a valid node. The loop will process the last node and only terminate when `current` becomes `nullptr` after the last step (`current = current->next;`)."
    },
    {
        question:
            "What is the worst-case time complexity for searching for an element in a singly linked list of size `n`?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        answer: "O(n)",
        explanation:
            "In the worst-case scenario, the element being sought is either the very last one in the list or not in the list at all. In both cases, the algorithm must visit every one of the `n` nodes."
    },
    {
        question:
            "After re-wiring pointers to bypass a node during a deletion operation, what crucial step must be performed to prevent a memory leak?",
        options: [
            "Call `displayList()` to confirm the change.",
            "Set the `head` pointer to `nullptr`.",
            "Call `delete` on the pointer to the bypassed (unlinked) node.",
            "Recompile the program."
        ],
        answer: "Call `delete` on the pointer to the bypassed (unlinked) node.",
        explanation:
            "Simply unlinking a node from the list does not free its memory. The memory remains allocated but inaccessible (an orphan). You must explicitly call `delete` to return that memory to the system."
    },
    {
        question:
            "What is the primary difference between deleting the head node and deleting a node in the middle of a list?",
        options: [
            "Deleting the head requires traversing the list, while deleting from the middle does not.",
            "Deleting the head involves modifying the `head` pointer itself, while deleting from the middle involves modifying a `previous` node's `next` pointer.",
            "Deleting the head is an O(n) operation.",
            "There is no difference in the logic."
        ],
        answer: "Deleting the head involves modifying the `head` pointer itself, while deleting from the middle involves modifying a `previous` node's `next` pointer.",
        explanation:
            "Deleting the head is a special case because it changes the entry point of the entire list. It doesn't have a 'previous' node, so the `head` pointer must be directly updated."
    },
    {
        question:
            "When inserting a `newNode` after a `previousNode`, which of these pointer assignments must be performed FIRST to avoid losing the rest of the list?",
        options: [
            "`previousNode->next = newNode;`",
            "`newNode->next = previousNode->next;`",
            "`head = newNode;`",
            "`delete previousNode->next;`"
        ],
        answer: "`newNode->next = previousNode->next;`",
        explanation:
            "You must first connect your `newNode` to the rest of the list (`newNode->next = previousNode->next;`). If you first set `previousNode->next = newNode;`, you lose the pointer to the rest of the chain, effectively truncating the list."
    },
    {
        question:
            "In a `deleteNode(int value)` method, why is it important to first check if `head == nullptr`?",
        options: [
            "To make the function run faster by avoiding loops.",
            "To prevent a compilation error.",
            "To handle the edge case of an empty list and prevent a runtime crash from trying to access a member of a `nullptr` (e.g., `head->data`).",
            "To automatically add a node if the list is empty."
        ],
        answer: "To handle the edge case of an empty list and prevent a runtime crash from trying to access a member of a `nullptr` (e.g., `head->data`).",
        explanation:
            "Attempting to dereference a null pointer (`head->data` when `head` is `nullptr`) is an illegal operation that will cause a segmentation fault or a similar runtime error. Checking for an empty list first prevents this."
    },
    {
        question:
            "Which of the following linked list operations typically has a time complexity of O(1)?",
        options: [
            "Appending a new node to the end.",
            "Searching for a specific value.",
            "Deleting a node with a specific value.",
            "Inserting a new node at the head."
        ],
        answer: "Inserting a new node at the head.",
        explanation:
            "Inserting at the head (prepending) is the only operation listed that does not require traversing the list. Its execution time is constant and independent of the list's size `n`."
    },
    {
        question:
            "What is the purpose of the statement `current = current->next;` inside a traversal loop?",
        options: [
            "To check if the list is empty.",
            "To advance the point of view to the next node in the sequence.",
            "To delete the current node and free its memory.",
            "To link the current node to the head."
        ],
        answer: "To advance the point of view to the next node in the sequence.",
        explanation:
            "This statement is the core mechanism of traversal. It moves the `current` pointer from the node it's currently on to the next node in the chain, allowing the loop to progress through the list."
    }
];

export default week3Questions;
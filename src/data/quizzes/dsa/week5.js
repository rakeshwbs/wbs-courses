const week5Questions = [
    {
        question:
            "A stack data structure operates on which fundamental principle?",
        options: [
            "First-In, First-Out (FIFO)",
            "Last-In, First-Out (LIFO)",
            "First-In, Last-Out (FILO)",
            "Random-In, Random-Out (RIRO)"
        ],
        answer: "Last-In, First-Out (LIFO)",
        explanation:
            "LIFO is the core principle of a stack. It means the last element added to the stack will be the very first one to be removed, much like a stack of plates."
    },
    {
        question:
            "In an array-based stack implementation, when does a 'Stack Overflow' error occur?",
        options: [
            "When you try to `pop()` from an empty stack.",
            "When you try to `push()` an element onto a full stack.",
            "When the `top` index is -1.",
            "When you try to `peek()` at an empty stack."
        ],
        answer: "When you try to `push()` an element onto a full stack.",
        explanation:
            "An array-based stack has a fixed capacity. A 'Stack Overflow' happens when you attempt to add an element when no space is left, exceeding its capacity."
    },
    {
        question:
            "What is the main purpose of the `peek()` operation?",
        options: [
            "To remove and return the top element.",
            "To add two elements to the stack at once.",
            "To check if the stack is empty.",
            "To view the top element without removing it from the stack."
        ],
        answer: "To view the top element without removing it from the stack.",
        explanation:
            "`peek()` is a non-destructive (read-only) operation. It allows you to inspect the top element, whereas `pop()` is destructive because it removes the element."
    },
    {
        question:
            "In a common array-based stack implementation, why is the `top` index variable typically initialized to -1?",
        options: [
            "To reserve index 0 for special use.",
            "To indicate that the stack is initially empty.",
            "Because array indices in C++ start at -1.",
            "To make the first `pop` operation work correctly."
        ],
        answer: "To indicate that the stack is initially empty.",
        explanation:
            "Initializing `top` to -1 provides a clear, distinct state for an empty stack. The first `push` operation can then increment `top` to 0, which is the first valid index in the array."
    },
    {
        question:
            "A 'Stack Underflow' error occurs when you attempt to...",
        options: [
            "`push()` an element onto a full stack.",
            "`pop()` or `peek()` from an empty stack.",
            "use a `top` index greater than the array's capacity.",
            "create a stack with a negative size."
        ],
        answer: "`pop()` or `peek()` from an empty stack.",
        explanation:
            "Underflow is the error state of trying to remove or access an element from an empty collection. There is nothing there to pop or peek at."
    },
    {
        question:
            "You have an empty stack. What is the state of the stack after the following sequence of operations: `push(5)`, `push(10)`, `pop()`, `push(15)`?",
        options: [
            "The stack contains [5, 10, 15].",
            "The stack contains [15].",
            "The stack contains [5, 15].",
            "The stack is empty."
        ],
        answer: "The stack contains [5, 15].",
        explanation:
            "1. `push(5)` -> [5]. 2. `push(10)` -> [5, 10]. 3. `pop()` removes 10 -> [5]. 4. `push(15)` -> [5, 15]. The top element is 15."
    },
    {
        question:
            "In an array-based stack implementation, after a `push(value)` operation is successfully completed, what happens to the `top` index?",
        options: [
            "It is decremented.",
            "It remains unchanged.",
            "It is reset to -1.",
            "It is incremented."
        ],
        answer: "It is incremented.",
        explanation:
            "The `push` operation involves incrementing `top` to point to the next available empty slot and then placing the new value at that position."
    },
    {
        question:
            "In an array-based stack with a capacity defined by `MAX_SIZE`, the `isFull()` helper method should return true under which condition?",
        options: [
            "`top == MAX_SIZE`",
            "`top == MAX_SIZE - 1`",
            "`top == 0`",
            "`top == -1`"
        ],
        answer: "`top == MAX_SIZE - 1`",
        explanation:
            "Since array indices are 0-based, an array of size `MAX_SIZE` has indices from 0 to `MAX_SIZE - 1`. When `top` reaches this last index, the array is full."
    },
    {
        question:
            "The Stack ADT defines *what* operations like `push` and `pop` do. The array-based implementation using a `top` index defines...?",
        options: [
            "A more abstract and theoretical model.",
            "*Why* these operations are necessary.",
            "*How* these operations are actually carried out in memory.",
            "A different set of operations."
        ],
        answer: "*How* these operations are actually carried out in memory.",
        explanation:
            "This highlights the key distinction between an Abstract Data Type (the 'what', the interface) and a concrete data structure (the 'how', the implementation)."
    },
    {
        question:
            "Which real-world analogy best represents a stack's LIFO behavior?",
        options: [
            "A queue of people waiting for a bus.",
            "A pile of books on a desk.",
            "A phone book with names listed alphabetically.",
            "A group of people sitting at a round table."
        ],
        answer: "A pile of books on a desk.",
        explanation:
            "You add a book to the top of the pile (`push`) and you remove a book from the top (`pop`). The last book you placed is the first one you can easily remove, perfectly illustrating LIFO."
    }
];

export default week5Questions;
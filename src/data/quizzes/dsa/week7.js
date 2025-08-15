const week7Questions = [
    {
        question:
            "A queue data structure operates on which fundamental principle?",
        options: [
            "Last-In, First-Out (LIFO)",
            "First-In, First-Out (FIFO)",
            "First-In, Last-Out (FILO)",
            "Random-In, Random-Out (RIRO)"
        ],
        answer: "First-In, First-Out (FIFO)",
        explanation:
            "FIFO is the core principle of a queue. It means the first element added to the collection will be the first one to be removed, just like a real-world waiting line."
    },
    {
        question:
            "What does the `enqueue(value)` operation on a queue do?",
        options: [
            "It removes an element from the front of the queue.",
            "It adds a new element to the rear (back) of the queue.",
            "It returns the element at the front without removing it.",
            "It reverses the order of all elements in the queue."
        ],
        answer: "It adds a new element to the rear (back) of the queue.",
        explanation:
            "`enqueue` is the standard term for adding an element to the end of a queue, just as a person joins the back of a line."
    },
    {
        question:
            "In a linked-list implementation of a queue that uses both `front` and `rear` pointers, what is the time complexity of the `enqueue` operation?",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        answer: "O(1)",
        explanation:
            "Having a `rear` pointer gives us direct access to the end of the list. This means we can add a new node without having to traverse the entire list, making the operation constant time."
    },
    {
        question:
            "The `dequeue()` operation in a linked queue is equivalent to which standard linked list operation?",
        options: [
            "Deleting the tail node.",
            "Appending a new node.",
            "Deleting the head node.",
            "Searching the entire list."
        ],
        answer: "Deleting the head node.",
        explanation:
            "Removing an item from the front of the queue corresponds to removing the head node of the underlying linked list, which is an efficient O(1) operation."
    },
    {
        question:
            "What is the primary purpose of implementing a queue as a 'circular' queue when using an array?",
        options: [
            "To make the queue run significantly faster.",
            "To allow the queue to efficiently reuse empty spaces at the beginning of the array.",
            "To make the array-based queue compatible with linked lists.",
            "To automatically double the queue's capacity when it gets full."
        ],
        answer: "To allow the queue to efficiently reuse empty spaces at the beginning of the array.",
        explanation:
            "In a simple array queue, dequeueing leaves empty, unusable slots at the front. A circular queue 'wraps around', allowing the `rear` pointer to use these empty slots, preventing wasted space."
    },
    {
        question:
            "In a linked queue, after `dequeue()` removes the very last element, what is a crucial step besides setting `front` to `nullptr`?",
        options: [
            "You must also set the `rear` pointer to `nullptr`.",
            "You must set `front` equal to the old `rear`.",
            "You must delete the `rear` pointer itself.",
            "No other step is necessary."
        ],
        answer: "You must also set the `rear` pointer to `nullptr`.",
        explanation:
            "If the `rear` pointer is not also set to `nullptr`, it becomes a 'dangling pointer' pointing to deallocated memory. This would corrupt the queue and cause errors on the next `enqueue` operation."
    },
    {
        question:
            "An empty queue has the following operations performed: `enqueue(10)`, `enqueue(20)`, `dequeue()`, `enqueue(30)`. What value will the `front()` operation now return?",
        options: [
            "10",
            "20",
            "30",
            "An error, the queue is empty."
        ],
        answer: "20",
        explanation:
            "Trace: `enqueue(10)` -> [10]. `enqueue(20)` -> [10, 20]. `dequeue()` removes 10 -> [20]. `enqueue(30)` -> [20, 30]. The `front()` operation looks at the element at the front, which is 20."
    },
    {
        question:
            "In a circular array-based queue of size `MAX_SIZE`, which C++ expression correctly calculates the next index after `i` in a circular fashion?",
        options: [
            "`i + 1;`",
            "`(i + 1) % MAX_SIZE;`",
            "`i % (MAX_SIZE + 1);`",
            "`i * 2;`"
        ],
        answer: "`(i + 1) % MAX_SIZE;`",
        explanation:
            "The modulo operator (`%`) is the key to circular behavior. For any index `i` from 0 to `MAX_SIZE-2`, `(i+1)` is less than `MAX_SIZE` so the result is just `i+1`. When `i` is `MAX_SIZE-1`, `(i+1)` becomes `MAX_SIZE`, and `MAX_SIZE % MAX_SIZE` is 0, wrapping the index back to the start."
    },
    {
        question:
            "In a linked queue, what do the `front` and `rear` pointers track?",
        options: [
            "The first and second elements in the queue.",
            "The maximum and minimum values in the queue.",
            "The head and tail of the underlying linked list, respectively.",
            "The current size and maximum capacity of the queue."
        ],
        answer: "The head and tail of the underlying linked list, respectively.",
        explanation:
            "The `front` pointer points to the head for efficient O(1) dequeues, and the `rear` pointer points to the tail for efficient O(1) enqueues."
    },
    {
        question:
            "Which of the following computing tasks would be best modeled using a queue?",
        options: [
            "An 'undo' feature in a text editor.",
            "Evaluating a postfix mathematical expression.",
            "Managing print jobs sent to a shared office printer.",
            "Storing nested function calls during program execution."
        ],
        answer: "Managing print jobs sent to a shared office printer.",
        explanation:
            "Print jobs should be processed in the order they are received (First-In, First-Out), which is the exact behavior of a queue. The other options are all classic applications of a stack (LIFO)."
    }
];

export default week7Questions;
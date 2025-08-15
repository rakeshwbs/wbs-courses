const week6Questions = [
    {
        question:
            "What is the primary advantage of implementing a stack using a linked list over an array?",
        options: [
            "It uses less memory per element.",
            "It allows the stack to grow and shrink dynamically without a fixed size limit.",
            "Searching for an element is much faster.",
            "It can only store integer data."
        ],
        answer: "It allows the stack to grow and shrink dynamically without a fixed size limit.",
        explanation:
            "An array-based stack has a fixed capacity, leading to potential 'Stack Overflow' errors. A linked stack's size is only limited by the total available system memory, making it more flexible."
    },
    {
        question:
            "The `push(value)` operation in a linked stack is most efficiently implemented as which corresponding linked list operation?",
        options: [
            "Appending a node to the tail of the list.",
            "Prepending a node to the head of the list.",
            "Inserting a node into the middle of the list.",
            "Searching for a specific node."
        ],
        answer: "Prepending a node to the head of the list.",
        explanation:
            "Prepending (adding to the head) is an O(1) operation in a linked list. This provides the fast, constant-time performance required for a stack's push operation and naturally places the new item at the 'top'."
    },
    {
        question:
            "When evaluating a postfix expression like `8 4 /`, what happens when the `/` operator is encountered?",
        options: [
            "The 02-numbers 8 and 4 are pushed onto the stack.",
            "The operator `/` is pushed onto the stack.",
            "Two operands (4 and 8) are popped, a division (8 / 4) is performed, and the result (2) is pushed back.",
            "The program reports a syntax error."
        ],
        answer: "Two operands (4 and 8) are popped, a division (8 / 4) is performed, and the result (2) is pushed back.",
        explanation:
            "This is the core algorithm for postfix evaluation. When an operator is found, it acts on the top two operands on the stack. Note the order: the second popped value (8) is the left-hand side of the operation."
    },
    {
        question:
            "When using a stack to check for balanced parentheses, what should your algorithm do when it encounters an opening bracket like `(` or `[`?",
        options: [
            "Pop an element from the stack.",
            "Immediately return `false` as it's an error.",
            "Push the opening bracket onto the stack.",
            "Ignore the character and continue."
        ],
        answer: "Push the opening bracket onto the stack.",
        explanation:
            "Pushing an opening bracket onto the stack effectively 'remembers' that it needs a corresponding closing bracket later in the expression."
    },
    {
        question:
            "In the balanced parentheses algorithm, what does it signify if you encounter a closing bracket `}` and the stack is currently empty?",
        options: [
            "The expression is perfectly balanced.",
            "You should push the `}` onto the stack.",
            "There is a closing bracket without a matching opening bracket, so the expression is unbalanced.",
            "You should pop twice from the stack."
        ],
        answer: "There is a closing bracket without a matching opening bracket, so the expression is unbalanced.",
        explanation:
            "This is a clear error condition. A closing bracket should always have a corresponding opening bracket already on the stack waiting to be matched."
    },
    {
        question:
            "What is the time complexity of the `push` and `pop` operations in a correctly implemented linked stack?",
        options: [
            "O(n) for push, O(1) for pop",
            "O(1) for push, O(n) for pop",
            "O(1) for both",
            "O(n) for both"
        ],
        answer: "O(1) for both",
        explanation:
            "Because both operations only involve manipulating the `head` pointer of the underlying linked list, their execution time is constant and does not depend on the number of elements in the stack."
    },
    {
        question:
            "After successfully evaluating a valid postfix expression, what should be the final state of the stack?",
        options: [
            "The stack should be empty.",
            "The stack should contain exactly one element: the final result.",
            "The stack should contain all the original operands.",
            "The stack should contain all the operators."
        ],
        answer: "The stack should contain exactly one element: the final result.",
        explanation:
            "The algorithm works by resolving all intermediate calculations, leaving only the single, final answer on the stack to be popped."
    },
    {
        question:
            "Is a 'Stack Overflow' error possible with a linked stack implementation?",
        options: [
            "Yes, it happens when `head == nullptr`.",
            "Yes, it's a common error when the list becomes too long.",
            "No, not in the traditional sense; it's only limited by the total system memory available for new nodes.",
            "No, because linked lists use less memory than arrays."
        ],
        answer: "No, not in the traditional sense; it's only limited by the total system memory available for new nodes.",
        explanation:
            "Unlike an array-based stack with a fixed `MAX_SIZE`, a linked stack can grow dynamically. A push operation will only fail if the system cannot allocate any more memory (`new` returns a `std::bad_alloc` exception)."
    },
    {
        question:
            "After iterating through an entire expression to check for balanced parentheses, you find that your stack is *not* empty. What does this indicate?",
        options: [
            "The expression is definitely balanced.",
            "The algorithm has a bug and should be rewritten.",
            "There were too many closing brackets in the expression.",
            "There were unclosed opening brackets, so the expression is unbalanced."
        ],
        answer: "There were unclosed opening brackets, so the expression is unbalanced.",
        explanation:
            "If the stack is not empty at the end, it means it still holds opening brackets (e.g., `(`, `[`) that never found their matching closing pair."
    },
    {
        question:
            "A linked stack's `pop` operation is equivalent to which linked list operation?",
        options: [
            "Deleting the tail node.",
            "Deleting the head node.",
            "Searching for the top value.",
            "Appending a new node."
        ],
        answer: "Deleting the head node.",
        explanation:
            "Deleting the head node is an O(1) operation that removes the last item added (the current head), perfectly matching the LIFO behavior and efficiency requirement of a stack's `pop` operation."
    }
];

export default week6Questions;
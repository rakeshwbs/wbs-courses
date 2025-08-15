const week8Questions = [
    {
        question:
            "What is the most crucial component of a recursive function that prevents it from running forever?",
        options: [
            "The recursive step",
            "A for loop",
            "The base case",
            "A local variable"
        ],
        answer: "The base case",
        explanation:
            "The base case is the stopping condition. Without a base case that is guaranteed to be reached, a recursive function would call itself infinitely, leading to a stack overflow."
    },
    {
        question:
            "What data structure does a program use internally to manage the state of nested and recursive function calls?",
        options: [
            "A queue",
            "A linked list",
            "The call stack",
            "A hash table"
        ],
        answer: "The call stack",
        explanation:
            "Each time a function is called, a new 'stack frame' containing its parameters and local variables is pushed onto the call stack. When the function returns, its frame is popped off."
    },
    {
        question:
            "In the recursive function for `factorial(n)`, what is the recursive step?",
        options: [
            "`if (n == 0)`",
            "`return 1;`",
            "`return n * factorial(n - 1);`",
            "`return n + n - 1;`"
        ],
        answer: "`return n * factorial(n - 1);`",
        explanation:
            "This step breaks the problem of `n!` down into a smaller, self-similar problem, `(n-1)!`, and combines the result with `n`. This makes progress toward the base case."
    },
    {
        question:
            "Why does the simple recursive Fibonacci function, `fib(n) = fib(n-1) + fib(n-2)`, require two base cases (for n=0 and n=1)?",
        options: [
            "To make it run faster.",
            "It is just a programming convention.",
            "Because the recursive step refers to two previous terms, it needs two non-recursive starting points to be well-defined.",
            "To handle negative 02-numbers."
        ],
        answer: "Because the recursive step refers to two previous terms, it needs two non-recursive starting points to be well-defined.",
        explanation:
            "The call for `fib(2)` needs to know the values of `fib(1)` and `fib(0)`. If only `fib(0)` were a base case, `fib(1)` would try to call `fib(-1)`, leading to an error or incorrect result."
    },
    {
        question:
            "What causes a 'stack overflow' error when working with recursion?",
        options: [
            "A base case that returns a very large number.",
            "A recursive function that either lacks a base case or has a recursive step that never reaches it.",
            "Using too many local variables inside the recursive function.",
            "A function that calls a different, non-recursive function."
        ],
        answer: "A recursive function that either lacks a base case or has a recursive step that never reaches it.",
        explanation:
            "This results in 'infinite' recursion. Each function call consumes space on the call stack, which eventually runs out of its allocated memory, causing the overflow."
    },
    {
        question:
            "In the classic recursive solution for the Towers of Hanoi puzzle, what is the base case?",
        options: [
            "When there are no disks left on the source rod.",
            "When all disks have been moved to the destination rod.",
            "When you only need to move a single disk (n=1).",
            "When there are three disks, as in the classic puzzle."
        ],
        answer: "When you only need to move a single disk (n=1).",
        explanation:
            "The problem of moving one disk is trivially simple: you just move it directly from the source to the destination. This provides the non-recursive stopping condition."
    },
    {
        question:
            "Recursion is a problem-solving paradigm that serves as a powerful alternative to what common programming construct?",
        options: [
            "Pointers",
            "Iteration (using loops like `for` and `while`)",
            "Classes and Objects",
            "Conditional statements (if/else)"
        ],
        answer: "Iteration (using loops like `for` and `while`)",
        explanation:
            "Many problems that involve repetition can be solved either iteratively with loops or recursively. Sometimes one approach is more natural or easier to read than the other."
    },
    {
        question:
            "When a recursive function is called, what is stored in its corresponding stack frame on the call stack?",
        options: [
            "Only the return value.",
            "A pointer to the heap.",
            "The function's parameters and local variables for that specific call.",
            "The entire source code of the function."
        ],
        answer: "The function's parameters and local variables for that specific call.",
        explanation:
            "The stack frame holds the entire context of a specific function call, so when it returns, the program knows the state of the calling function and where to resume execution."
    },
    {
        question:
            "Why is the simple recursive implementation of the Fibonacci sequence notoriously inefficient for large values of `n`?",
        options: [
            "It uses too much memory on the heap.",
            "It repeatedly calculates the results for the same Fibonacci 02-numbers multiple times.",
            "It involves floating-point math, which is slow.",
            "The base cases are logically incorrect for large 02-numbers."
        ],
        answer: "It repeatedly calculates the results for the same Fibonacci 02-numbers multiple times.",
        explanation:
            "For example, `fib(5)` calls `fib(4)` and `fib(3)`. `fib(4)` in turn calls `fib(3)` again. This overlapping subproblem structure leads to an exponential number of redundant calculations."
    },
    {
        question:
            "Every well-defined recursive function must make progress toward...",
        options: [
            "using more memory.",
            "calling itself with a larger input.",
            "a loop.",
            "the base case."
        ],
        answer: "the base case.",
        explanation:
            "The recursive step must always break the problem down into a simpler or smaller version, ensuring that the input to the next recursive call is closer to the base case, which guarantees termination."
    }
];

export default week8Questions;
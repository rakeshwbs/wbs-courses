const week1Questions = [
    {
        question:
            "Which of the following is NOT a required characteristic of a valid algorithm?",
        options: [
            "Finiteness (it must terminate)",
            "Unambiguity (each step is clear)",
            "Optimality (it must be the most efficient solution)",
            "Input (it has zero or more defined inputs)"
        ],
        answer: "Optimality (it must be the most efficient solution)",
        explanation:
            "While we strive for optimal algorithms, it is not a requirement for an algorithm to be valid. An algorithm simply needs to be correct and terminate. An inefficient but correct recipe is still a valid recipe."
    },
    {
        question:
            "What is the primary purpose of an Abstract Data Type (ADT)?",
        options: [
            "To provide the most memory-efficient C++ code possible.",
            "To define a set of data and operations without specifying the 'how' (the implementation).",
            "To automatically test for bugs in a program.",
            "To serve as a hardware-to-software interface."
        ],
        answer: "To define a set of data and operations without specifying the 'how' (the implementation).",
        explanation:
            "This is the core concept of an ADT. It focuses on the 'what' (what operations can be performed), separating the interface from the underlying implementation, just like a car's dashboard."
    },
    {
        question:
            "In C++, what operator is used to get the memory address of a variable?",
        options: [
            "The * operator",
            "The & operator",
            "The -> operator",
            "The :: operator"
        ],
        answer: "The & operator",
        explanation:
            "The ampersand (&) is the 'address-of' operator. It retrieves the memory location of a variable. The asterisk (*) is used to declare a pointer and to dereference it (get the value at the address)."
    },
    {
        question:
            "What is the term for the common problem that occurs when a programmer allocates memory using 'new' but forgets to free it using 'delete'?",
        options: [
            "Syntax Error",
            "Compilation Error",
            "Buffer Overflow",
            "Memory Leak"
        ],
        answer: "Memory Leak",
        explanation:
            "A memory leak occurs when a program loses the pointer to a piece of dynamically allocated memory, making it impossible to free. This memory remains reserved for the program but is unusable."
    },
    {
        question:
            "According to C++ conventions, what is the main difference between a 'class' and a 'struct'?",
        options: [
            "A 'struct' cannot have member functions.",
            "Members of a 'class' are private by default, while members of a 'struct' are public by default.",
            "A 'class' is a reference type, while a 'struct' is a value type.",
            "A 'struct' can only hold plain data types like int and char."
        ],
        answer: "Members of a 'class' are private by default, while members of a 'struct' are public by default.",
        explanation:
            "This is the defining difference in C++. We use 'class' to enforce encapsulation by default, hiding data and exposing functionality through public methods."
    },
    {
        question:
            "The C++ practice of bundling data and the methods that operate on that data within a class, while hiding the implementation details from the outside world, is known as...?",
        options: [
            "Inheritance",
            "Polymorphism",
            "Encapsulation",
            "Recursion"
        ],
        answer: "Encapsulation",
        explanation:
            "Encapsulation is a fundamental pillar of Object-Oriented Programming (OOP). It's like a capsule that encloses the data (pills) and provides a controlled way to interact with it."
    },
    {
        question:
            "Which line of C++ code correctly allocates memory for an array of 100 integers on the heap?",
        options: [
            "int myArray = new int(100);",
            "int* myArray = new int[100];",
            "int myArray[100] = new int[];",
            "array<int> myArray = new int(100);"
        ],
        answer: "int* myArray = new int[100];",
        explanation:
            "The correct syntax requires a pointer (int*) to store the address returned by 'new'. The '[]' brackets are used to specify that an array, not a single element, is being allocated."
    },
    {
        question:
            "Given the C++ code: `int val = 25; int* p_val = &val;`, what does the expression `*p_val` evaluate to?",
        options: [
            "The memory address of the 'val' variable.",
            "The value 25.",
            "The memory address of the pointer 'p_val' itself.",
            "A compilation error due to incorrect syntax."
        ],
        answer: "The value 25.",
        explanation:
            "The asterisk (*) in this context is the dereference operator. It means 'get the value at the address that the pointer is holding.' Since p_val holds the address of val, *p_val retrieves the value of val."
    },
    {
        question:
            "In the car dashboard analogy for an ADT, what does the engine and its complex internal mechanics represent?",
        options: [
            "The user interface of the program.",
            "The ADT's public operations (like 'push' or 'pop').",
            "The hidden implementation of the ADT.",
            "The data being stored in the data structure."
        ],
        answer: "The hidden implementation of the ADT.",
        explanation:
            "The driver (user) interacts with the simple dashboard (the ADT's interface), while the complex engine (the implementation) does the actual work behind the scenes. The user doesn't need to know how the engine works."
    },
    {
        question:
            "Why would a developer use pseudocode before writing actual C++?",
        options: [
            "To compile and check for performance bottlenecks.",
            "To design the algorithm's logic without being constrained by a specific language's syntax.",
            "To automatically generate the final, bug-free C++ program.",
            "To create the user interface for the application."
        ],
        answer: "To design the algorithm's logic without being constrained by a specific language's syntax.",
        explanation:
            "Pseudocode is a language-agnostic planning tool. It allows developers to focus purely on the logical flow and steps of the algorithm, making it easier to translate to any programming language later."
    }
];

export default week1Questions;


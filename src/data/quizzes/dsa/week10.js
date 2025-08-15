const week10Questions = [
    {
        question:
            "What is the primary goal of using a hash table to implement a Dictionary ADT?",
        options: [
            "To store elements in a sorted order.",
            "To achieve O(1) average time complexity for search, insert, and delete.",
            "To minimize memory usage compared to an array.",
            "To guarantee O(log n) worst-case performance."
        ],
        answer: "To achieve O(1) average time complexity for search, insert, and delete.",
        explanation:
            "By directly computing an array index from a key, hashing aims to access data in constant time on average, which is much faster than the O(log n) of a BST or O(n) of a list."
    },
    {
        question:
            "In the context of hashing, what is a 'collision'?",
        options: [
            "When the hash table runs out of memory.",
            "When a hash function produces a negative index.",
            "When two different keys are mapped to the same hash index.",
            "When a key is not found in the table during a search."
        ],
        answer: "When two different keys are mapped to the same hash index.",
        explanation:
            "A collision is the inevitable event where a hash function generates the same array index for more than one unique key. All hash table implementations must have a strategy to handle this."
    },
    {
        question:
            "How does the 'Separate Chaining' method resolve collisions?",
        options: [
            "It re-hashes the key with a different function until an empty slot is found.",
            "It stores the colliding item in the next available empty slot in the array.",
            "Each array index is a pointer to a linked list, and colliding items are added to that list.",
            "It overwrites the old item with the new item."
        ],
        answer: "Each array index is a pointer to a linked list, and colliding items are added to that list.",
        explanation:
            "This method creates a 'chain' (a linked list) of items at each index. When a collision occurs, the new item is simply added to the chain at the appropriate index."
    },
    {
        question:
            "Which of the following is NOT a required property of a good hash function?",
        options: [
            "It should be fast to compute.",
            "It should be deterministic (the same key always produces the same hash).",
            "It should be reversible (you can get the original key from the hash value).",
            "It should distribute keys uniformly across the table."
        ],
        answer: "It should be reversible (you can get the original key from the hash value).",
        explanation:
            "Hash functions are 'one-way'. Their purpose is to generate an index, not to encrypt data that needs to be decrypted. Being non-reversible is a key property."
    },
    {
        question:
            "The collision resolution strategy where all items are stored in the main array, and you probe for the next empty slot upon collision, is broadly known as...?",
        options: [
            "Separate Chaining",
            "Open Addressing",
            "Rehashing",
            "Bucket Hashing"
        ],
        answer: "Open Addressing",
        explanation:
            "Open Addressing techniques, like linear probing, resolve collisions by finding an alternative 'open' address within the main hash table array itself, rather than using external data structures like linked lists."
    },
    {
        question:
            "When searching for a key in a hash table that uses separate chaining, what is the process after the hash index is computed?",
        options: [
            "You immediately return the value at that index.",
            "You perform a binary search on the array starting from that index.",
            "You perform a linear search on the linked list located at that index.",
            "You re-hash the key to get a final location."
        ],
        answer: "You perform a linear search on the linked list located at that index.",
        explanation:
            "The hash function gets you to the correct 'bucket' or 'chain' (the linked list). You must then traverse that small list to find the node containing the exact key you're looking for."
    },
    {
        question:
            "What is the worst-case time complexity for a search in a hash table with `n` elements that uses separate chaining?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        answer: "O(n)",
        explanation:
            "The worst case occurs if a poor hash function maps all `n` keys to the exact same index. This degenerates the hash table into a single, long linked list, requiring a linear search through all `n` elements."
    },
    {
        question:
            "Why is the modulo (`%`) operator frequently used as the final step in a hash function?",
        options: [
            "To make the hash value a positive number.",
            "To ensure the resulting hash value is a valid index within the bounds of the hash table array.",
            "To encrypt the hash value for security.",
            "To convert the hash value into a floating-point number."
        ],
        answer: "To ensure the resulting hash value is a valid index within the bounds of the hash table array.",
        explanation:
            "The result of `X % N` is always an integer between 0 and `N-1`. This perfectly maps the result of the hash calculation to the valid indices of an array of size `N`."
    },
    {
        question:
            "The Dictionary ADT is fundamentally a collection of what?",
        options: [
            "A sorted list of unique values.",
            "(Key, Value) pairs where each key is unique.",
            "Only unique keys, without associated values.",
            "A sequence of 02-numbers in LIFO order."
        ],
        answer: "(Key, Value) pairs where each key is unique.",
        explanation:
            "This is the core definition. Each unique key serves as an identifier to look up its corresponding, associated value."
    },
    {
        question:
            "What is a simple hash function for a string key like 'cat'?",
        options: [
            "Return the length of the string (3).",
            "Sum the ASCII values of 'c', 'a', and 't', then take the result modulo the table size.",
            "Return the ASCII value of the first character, 'c'.",
            "Sort the characters ('act') and use that as the hash."
        ],
        answer: "Sum the ASCII values of 'c', 'a', and 't', then take the result modulo the table size.",
        explanation:
            "This is a classic, simple (though not perfect) hashing algorithm for strings. It involves all characters and uses the modulo operator to scale the result to the table size."
    }
];

export default week10Questions;
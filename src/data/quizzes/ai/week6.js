const week6Questions = [
    {
        question: "Which of the following NLP preprocessing steps involves breaking down a sentence into individual words or tokens?",
        options: [
            "Stop-Word Removal",
            "Tokenization",
            "Lemmatization",
            "Vectorization"
        ],
        answer: "Tokenization",
        explanation: "This is the correct term for the process of splitting a continuous string of text into a list of smaller units, or tokens. It is a foundational first step in any NLP pipeline."
    },
    {
        question: "What is the primary limitation of the **Bag-of-Words (BoW)** vectorization technique?",
        options: [
            "It is computationally very expensive and slow to calculate.",
            "It gives higher weight to rare and more important words.",
            "It cannot handle words that are not in the English dictionary.",
            "It disregards word order, grammar, and context, losing semantic meaning."
        ],
        answer: "It disregards word order, grammar, and context, losing semantic meaning.",
        explanation: "By treating a document as an unordered 'bag' of words, BoW loses the crucial context provided by word sequence. For example, it cannot distinguish between 'good food, bad service' and 'bad food, good service'."
    },
    {
        question: "How does **TF-IDF (Term Frequency-Inverse Document Frequency)** improve upon the Bag-of-Words model?",
        options: [
            "By considering the order of the words in a sentence.",
            "By reducing all words to their dictionary root form before counting them.",
            "By giving a higher weight to words that are important to a specific document but rare across all documents.",
            "By representing words as dense vectors that capture semantic meaning."
        ],
        answer: "By giving a higher weight to words that are important to a specific document but rare across all documents.",
        explanation: "This is the key innovation of TF-IDF. The IDF component penalizes common words (like 'hotel' in a set of hotel reviews) and boosts the score of unique, descriptive words (like 'cockroach'), making it much better at identifying important keywords."
    },
    {
        question: "The process of reducing words like 'computing', 'computer', and 'computed' to their root form 'comput' is an example of...",
        options: [
            "Tokenization",
            "Lemmatization",
            "Stop-Word Removal",
            "Stemming"
        ],
        answer: "Stemming",
        explanation: "Stemming is a rule-based process that chops off the ends of words to get to a common base form, even if the result ('comput') is not a real word. It's faster but less accurate than lemmatization, which would find the true dictionary root ('compute')."
    },
    {
        question: "What is the key advantage of **Word Embeddings** (like Word2Vec) over TF-IDF?",
        options: [
            "They are much simpler and faster to compute.",
            "They represent words as dense vectors that capture semantic meaning and context.",
            "They work better for documents that have many 02-numbers and punctuation.",
            "They assign a unique integer ID to every word in the vocabulary."
        ],
        answer: "They represent words as dense vectors that capture semantic meaning and context.",
        explanation: "This is the core breakthrough of word embeddings. The position of vectors in the multi-dimensional space captures relationships, so 'excellent' and 'fantastic' are understood to be similar, and 'king' and 'queen' are understood to be related in a specific way."
    },
    {
        question: "Which of the following NLP pipeline steps is responsible for removing common but low-meaning words like 'a', 'the', 'is', and 'in'?",
        options: [
            "Lowercase Conversion",
            "Tokenization",
            "Stop-Word Removal",
            "Feature Extraction"
        ],
        answer: "Stop-Word Removal",
        explanation: "This is the precise definition of this step—to filter out high-frequency, low-information words to allow the model to focus on more meaningful terms that carry more signal."
    },
    {
        question: "The famous equation `vector('King') - vector('Man') + vector('Woman') ≈ vector('Queen')` is a classic demonstration of the power of which NLP technique?",
        options: [
            "TF-IDF",
            "Bag-of-Words",
            "Word Embeddings",
            "Lemmatization"
        ],
        answer: "Word Embeddings",
        explanation: "This ability to perform vector arithmetic that mirrors real-world analogies is the hallmark of powerful word embedding models like Word2Vec and GloVe. It shows the model has learned not just words, but the relationships between them."
    },
    {
        question: "What is the final output of the TF-IDF vectorization process for a collection of documents?",
        options: [
            "A list of the most common words in the entire corpus.",
            "A numerical matrix where each row is a document and each column is a word, with the values being the TF-IDF scores.",
            "A single score representing the overall sentiment of the entire document collection.",
            "A cleaned list of sentences with all stop words and punctuation removed."
        ],
        answer: "A numerical matrix where each row is a document and each column is a word, with the values being the TF-IDF scores.",
        explanation: "The goal of vectorization is to turn unstructured text into a structured numerical format that machine learning models can process. The TF-IDF matrix is this final numerical representation."
    },
    {
        question: "Why is converting text to lowercase a standard preprocessing step?",
        options: [
            "To reduce the file size of the text document.",
            "To make the text easier for humans to read.",
            "To ensure that the same word with different capitalization is not treated as two different words.",
            "To help the algorithm identify proper nouns more easily."
        ],
        answer: "To ensure that the same word with different capitalization is not treated as two different words.",
        explanation: "This is the key reason. Without this step, 'Hotel', 'hotel', and 'HOTEL' would be considered three separate, unique tokens by the vectorizer. Lowercasing ensures that they are all treated as the same word, which consolidates the data."
    },
    {
        question: "A sentiment analysis model is trained on a TF-IDF matrix created from a large set of movie reviews. What is the direct input to the machine learning classifier (e.g., Logistic Regression) during the training phase?",
        options: [
            "The raw text of the movie reviews.",
            "The list of cleaned and tokenized words for each review.",
            "The numerical TF-IDF matrix representing the reviews.",
            "A single 'sentiment score' for each review."
        ],
        answer: "The numerical TF-IDF matrix representing the reviews.",
        explanation: "Machine learning classifiers perform mathematical operations, so they require numerical input. The numerical TF-IDF matrix serves as the features (X) that the model learns from, while the sentiment scores serve as the labels (y)."
    }
];

export default week6Questions;
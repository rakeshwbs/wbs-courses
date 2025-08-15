const week4Questions = [
    {
        question: "What is the primary danger of training a single Decision Tree without any constraints (e.g., `max_depth`)?",
        options: [
            "It will be too simple to capture any meaningful patterns in the data.",
            "It will learn the training data too well, including noise, and fail to generalize to new data.",
            "It can only be used for regression tasks, not classification.",
            "The training process will be extremely slow, taking several days to complete."
        ],
        answer: "It will learn the training data too well, including noise, and fail to generalize to new data.",
        explanation: "This describes the core problem of **overfitting**. An unconstrained Decision Tree will create a complex set of rules that perfectly memorizes the training set, including its random noise, leading to poor performance on unseen test data."
    },
    {
        question: "Which of the following is a method used to 'prune' a Decision Tree and prevent overfitting?",
        options: [
            "Increasing the number of features used for training.",
            "Setting a `max_depth` to limit how many questions the tree can ask.",
            "Using a larger portion of the data for the training set.",
            "Combining multiple datasets into one."
        ],
        answer: "Setting a `max_depth` to limit how many questions the tree can ask.",
        explanation: "**Pruning** involves restricting the tree's complexity. Setting `max_depth` is a direct way to stop the tree from growing too large and memorizing the training data."
    },
    {
        question: "What is the core idea behind **Ensemble Learning**, the principle that powers Random Forests?",
        options: [
            "A single, highly complex model is always better than multiple simple ones.",
            "Combining many diverse, simple models often creates a single, more accurate and robust model.",
            "The best model is the one that achieves 100% accuracy on the training data.",
            "Models should only be trained on a random subset of features."
        ],
        answer: "Combining many diverse, simple models often creates a single, more accurate and robust model.",
        explanation: "This concept is known as the 'wisdom of the crowd'. By aggregating the predictions of many different 'weak learners', a Random Forest can produce a 'strong learner' that is less prone to the errors of any single tree."
    },
    {
        question: "How does a Random Forest make a prediction for a **classification** task?",
        options: [
            "It calculates the average of all the individual tree predictions.",
            "It selects the prediction made by the single most accurate tree in the forest.",
            "It takes a majority vote among all the individual trees in the forest.",
            "It uses the prediction from the first tree that was built."
        ],
        answer: "It takes a majority vote among all the individual trees in the forest.",
        explanation: "For classification, each tree 'votes' for a class. The Random Forest's final prediction is the class that receives the most votes, making the model more democratic and robust."
    },
    {
        question: "In the context of Decision Trees, what does 'purity' refer to at a given node?",
        options: [
            "The node contains data from only one feature.",
            "The node contains data points that all belong to a single class.",
            "The node is located at the very top of the tree (the root node).",
            "The node uses a metric like Mean Squared Error for its split."
        ],
        answer: "The node contains data points that all belong to a single class.",
        explanation: "A node is perfectly 'pure' if all the samples within it belong to the same target category (e.g., 100% 'Disease' or 100% 'No Disease'). The goal of a split is to increase the purity of the resulting child nodes."
    },
    {
        question: "Which of the following scenarios would be a poor use case for a single, deep Decision Tree and a good use case for a Random Forest?",
        options: [
            "A simple problem with a clear, linear boundary between two classes.",
            "A dataset with only two features and ten data points.",
            "A complex, high-stakes medical diagnosis where model stability and reliability are critical.",
            "A task where visualizing and explaining every step of the model's logic is the most important requirement."
        ],
        answer: "A complex, high-stakes medical diagnosis where model stability and reliability are critical.",
        explanation: "For high-stakes applications, the stability and improved accuracy from a Random Forest are highly desirable. The risk of a single Decision Tree overfitting and making an incorrect prediction is too high. A single tree is better for simple visualization (Option D)."
    },
    {
        question: "How does a Random Forest ensure that the trees in its 'forest' are diverse and not just copies of each other?",
        options: [
            "By training each tree on the exact same dataset.",
            "By pruning each tree to a different maximum depth.",
            "By using different evaluation metrics for each tree.",
            "By training each tree on a random sample of the data and using a random subset of features at each split."
        ],
        answer: "By training each tree on a random sample of the data and using a random subset of features at each split.",
        explanation: "This two-part randomization (bagging for data and random feature subsets for splits) is the key innovation of Random Forests. It ensures the trees are decorrelated, making their collective 'vote' more powerful."
    },
    {
        question: "What is the main advantage of a Random Forest over a single Decision Tree?",
        options: [
            "It is easier to visualize and interpret.",
            "It is less prone to overfitting and generally has higher accuracy on test data.",
            "It trains significantly faster than a single tree.",
            "It can only be used for classification."
        ],
        answer: "It is less prone to overfitting and generally has higher accuracy on test data.",
        explanation: "By averaging out the predictions of many diverse trees, a Random Forest reduces variance and is much more robust against overfitting. This typically leads to better generalization and higher performance on unseen data. Its main disadvantage is that it's less interpretable (Option A is incorrect)."
    },
    {
        question: "The Gini Impurity and Information Gain (based on Entropy) are metrics used for what purpose in a Decision Tree?",
        options: [
            "To calculate the final accuracy of the model.",
            "To determine the best feature and threshold to split the data on at each node.",
            "To select the optimal number of trees for a Random Forest.",
            "To measure how long the model will take to train."
        ],
        answer: "To determine the best feature and threshold to split the data on at each node.",
        explanation: "These metrics are the 'engine' of the tree's learning process. At each node, the algorithm calculates the potential Gini Impurity or Information Gain for every possible split and chooses the split that results in the purest child nodes."
    },
    {
        question: "In the lab, you observed that the unconstrained Decision Tree had 100% accuracy on the training set but lower accuracy on the test set. This phenomenon is a classic sign of...",
        options: [
            "Underfitting",
            "A well-generalized model",
            "Overfitting",
            "A data leak"
        ],
        answer: "Overfitting",
        explanation: "A large gap between training performance (very high) and testing performance (significantly lower) is the textbook definition of overfitting. The model has learned the training data perfectly but failed to learn the underlying general pattern."
    }
];

export default week4Questions;
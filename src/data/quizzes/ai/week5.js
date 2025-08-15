const week5Questions = [
    {
        question: "What is the primary objective of a Support Vector Machine (SVM) algorithm in a classification task?",
        options: [
            "To find the decision boundary that passes through the most data points.",
            "To group similar data points into a predefined number of clusters.",
            "To find the hyperplane that creates the maximum possible margin between the classes.",
            "To create a flowchart of if-then-else questions to separate the data."
        ],
        answer: "To find the hyperplane that creates the maximum possible margin between the classes.",
        explanation: "The core idea of an SVM is not just to separate classes, but to do so in the most robust way possible by finding the decision boundary (hyperplane) that is farthest from the closest data points of either class. This is known as maximizing the margin."
    },
    {
        question: "In the context of SVMs, what are the 'Support Vectors'?",
        options: [
            "All the data points used to train the model.",
            "The data points that are misclassified by the model.",
            "The data points that lie closest to the decision boundary (hyperplane).",
            "The synthetic data points created by the kernel trick."
        ],
        answer: "The data points that lie closest to the decision boundary (hyperplane).",
        explanation: "Support Vectors are the critical data points that lie on the edge of the margin. They are the only points that 'support' and define the position of the hyperplane. If any of these points were moved, the hyperplane would change."
    },
    {
        question: "What is the main purpose of using the **Kernel Trick** with Support Vector Machines?",
        options: [
            "To make the model train faster on large datasets.",
            "To allow the SVM to effectively classify data that is not linearly separable.",
            "To reduce the number of features in the dataset before training.",
            "To automatically select the best features for the model."
        ],
        answer: "To allow the SVM to effectively classify data that is not linearly separable.",
        explanation: "The Kernel Trick is a mathematical function that projects data into a higher dimension where a linear separator (hyperplane) can be found. This allows SVMs to create complex, non-linear decision boundaries in the original feature space."
    },
    {
        question: "In which of the following scenarios would **accuracy** be a particularly poor and misleading metric for evaluating a model?",
        options: [
            "A dataset with an equal number of samples for two different classes.",
            "A model built to predict if a stock price will go `up` or `down`, where both outcomes are equally likely.",
            "A model built to detect a rare disease that occurs in only 0.1% of the population in Mauritius.",
            "A dataset where all features have been scaled to have a similar range."
        ],
        answer: "A model built to detect a rare disease that occurs in only 0.1% of the population in Mauritius.",
        explanation: "This is a classic example of an **imbalanced dataset**. A lazy model that always predicts 'No Disease' would be 99.9% accurate but completely useless. In such cases, accuracy is misleading, and metrics like recall and precision are far more important."
    },
    {
        question: "A model designed to detect fraudulent bank transactions incorrectly flags a legitimate transaction as fraudulent. In a confusion matrix, what type of error is this?",
        options: [
            "True Positive (TP)",
            "True Negative (TN)",
            "False Positive (FP)",
            "False Negative (FN)"
        ],
        answer: "False Positive (FP)",
        explanation: "The model predicted 'Positive' (fraudulent), but it was actually 'Negative' (legitimate). This is a **False Positive** (a Type I error), often described as a 'false alarm'."
    },
    {
        question: "What question does the **Recall** metric answer?",
        options: [
            "Of all the model's predictions, what percentage was correct?",
            "Of all the positive predictions the model made, how many were actually correct?",
            "Of all the actual positive cases in the dataset, how many did the model successfully identify?",
            "What is the balance between the model's precision and its accuracy?"
        ],
        answer: "Of all the actual positive cases in the dataset, how many did the model successfully identify?",
        explanation: "Recall (or Sensitivity) measures the model's ability to 'find' all the relevant cases. It is calculated as TP / (TP + FN). A high recall is crucial when failing to identify a positive case (a False Negative) is very costly."
    },
    {
        question: "For a model that predicts if a patient has a highly contagious and dangerous disease, which of the following is most critical to minimize?",
        options: [
            "False Positives (FP)",
            "False Negatives (FN)",
            "True Positives (TP)",
            "True Negatives (TN)"
        ],
        answer: "False Negatives (FN)",
        explanation: "A **False Negative** would mean telling a sick person they are healthy, allowing them to go untreated and potentially spread the disease. This is the most dangerous error in this context. Therefore, maximizing Recall (which minimizes False Negatives) is the highest priority."
    },
    {
        question: "What is the primary benefit of using the **F1-Score** as an evaluation metric?",
        options: [
            "It is simpler to calculate than accuracy.",
            "It is the only metric suitable for multi-class classification.",
            "It provides a single score that represents the harmonic mean of Precision and Recall.",
            "It focuses only on how well the model identifies negative cases."
        ],
        answer: "It provides a single score that represents the harmonic mean of Precision and Recall.",
        explanation: "The F1-Score is useful when you need a balance between Precision and Recall, especially when dealing with imbalanced classes. It combines both metrics into one, making it easier to compare models."
    },
      {
        question: "Why is it often necessary to scale features using a tool like `StandardScaler` before training an SVM?",
        options: [
            "SVMs can only work with features that are positive 02-numbers.",
            "Scaling is a form of dimensionality reduction required by SVMs.",
            "SVMs are distance-based algorithms and are sensitive to the scale of the features.",
            "Scaling converts all categorical features into numerical features."
        ],
        answer: "SVMs are distance-based algorithms and are sensitive to the scale of the features.",
        explanation: "The SVM algorithm finds the optimal hyperplane by calculating distances between data points. If one feature has a very large scale (e.g., annual income) and another has a very small scale (e.g., number of children), the larger-scale feature will dominate the distance calculation. Scaling ensures all features contribute fairly."
    },
    {
        question: "In a confusion matrix, you have the following results: TP=90, FP=10, FN=20, TN=980. What is the **Precision** of the model?",
        options: [
            "90%",
            "81.8%",
            "98%",
            "97%"
        ],
        answer: "90%",
        explanation: "Precision is calculated as TP / (TP + FP). In this case, that is 90 / (90 + 10) = 90 / 100 = 0.90, or 90%. This means that when the model predicted the positive class, it was correct 90% of the time."
    }
];

export default week5Questions;
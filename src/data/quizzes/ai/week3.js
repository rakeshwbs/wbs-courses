const week3Questions = [
    {
        question: "What is the defining characteristic of an **unsupervised learning** problem?",
        options: [
            "The model's performance is supervised by a data scientist.",
            "The algorithm learns from data that has no \"correct answers\" or labels.",
            "It is only used for predicting continuous numerical values.",
            "The data must have more than 100 features to be useful."
        ],
        answer: "The algorithm learns from data that has no \"correct answers\" or labels.",
        explanation: "Unsupervised learning is defined by its use of **unlabeled data**. The goal is to discover hidden patterns, structures, or groupings directly from the data itself, without any predefined correct answers to guide the process."
    },
    {
        question: "In the K-Means algorithm, what happens during the **\"Update Step\"**?",
        options: [
            "Each data point is assigned to the cluster with the nearest centroid.",
            "The algorithm randomly selects the initial K centroids.",
            "Each centroid moves to the average position (mean) of all the data points assigned to it.",
            "The optimal number of clusters (K) is determined."
        ],
        answer: "Each centroid moves to the average position (mean) of all the data points assigned to it.",
        explanation: "The \"Update Step\" is where the learning or adjustment occurs. After points have been assigned to clusters, the centroids are recalculated and moved to the center of their new group of points. The \"Assignment Step\" is described by option A."
    },
    {
        question: "What is the primary purpose of using the **Elbow Method** in the context of K-Means clustering?",
        options: [
            "To speed up the time it takes for the K-Means algorithm to run.",
            "To help estimate a good value for 'K' (the number of clusters).",
            "To reduce the number of features in the dataset before clustering.",
            "To ensure the initial centroids are placed in the best possible locations."
        ],
        answer: "To help estimate a good value for 'K' (the number of clusters).",
        explanation: "The Elbow Method is a heuristic used to help find the optimal number of clusters. It does this by plotting the model's inertia for different values of K and identifying the \"elbow\" point where the rate of improvement sharply decreases."
    },
    {
        question: "A marketing team has a dataset with 200 features about customer behavior and wants to visualize the main customer groups on a 2D chart. Which unsupervised learning technique is most appropriate for this visualization task?",
        options: [
            "K-Means Clustering",
            "Linear Regression",
            "Principal Component Analysis (PCA)",
            "Logistic Regression"
        ],
        answer: "Principal Component Analysis (PCA)",
        explanation: "It is impossible to directly visualize 200 features (dimensions). **Principal Component Analysis (PCA)** is a dimensionality reduction technique used to reduce a large number of features down to a few (like 2) principal components that capture most of the data's variance, allowing it to be plotted on a 2D chart."
    },
    {
        question: "What does a low **inertia** score in a K-Means model signify?",
        options: [
            "The clusters are dense and tightly packed.",
            "The clusters are spread out and not well-defined.",
            "The algorithm was run with too many clusters (K is too high).",
            "The dataset has very few data points."
        ],
        answer: "The clusters are dense and tightly packed.",
        explanation: "Inertia measures the within-cluster sum of squares (how far points are from their centroid). A low inertia value means that the points within each cluster are very close to their respective centroids, indicating dense, compact clusters."
    },
    {
        question: "Which of the following scenarios describes the **\"Curse of Dimensionality\"**?",
        options: [
            "A model trains very slowly because the dataset has millions of rows.",
            "A model performs poorly because as the number of features increases, the data becomes very sparse and patterns are harder to find.",
            "A model gives different results each time it is run with the same data.",
            "A model is too simple to capture the complex patterns in the data."
        ],
        answer: "A model performs poorly because as the number of features increases, the data becomes very sparse and patterns are harder to find.",
        explanation: "The \"Curse of Dimensionality\" refers to the various problems that arise when working with high-dimensional data. As dimensions (features) increase, the volume of the space grows so fast that the available data becomes sparse, making it difficult for algorithms to find statistically significant patterns."
    },
    {
        question: "What is the first step (**Initialization**) in the K-Means algorithm?",
        options: [
            "Assigning each data point to a cluster.",
            "Calculating the average position of all data points.",
            "Choosing a value for K and randomly placing K centroids on the data plot.",
            "Drawing the final boundaries around the clusters."
        ],
        answer: "Choosing a value for K and randomly placing K centroids on the data plot.",
        explanation: "The K-Means algorithm must begin somewhere. The initialization step involves specifying the number of clusters (K) and then placing that many centroids at random starting positions. The algorithm then iterates from this initial state."
    },
    {
        question: "What is the fundamental difference between **Clustering** and **Classification**?",
        options: [
            "Clustering works with numerical data, while Classification works with text data.",
            "Clustering is unsupervised (finds groups in unlabeled data), while Classification is supervised (assigns data to predefined labels).",
            "Clustering is a form of dimensionality reduction.",
            "Clustering models are simpler and faster to train than classification models."
        ],
        answer: "Clustering is unsupervised (finds groups in unlabeled data), while Classification is supervised (assigns data to predefined labels).",
        explanation: "This is the key distinction. In **Classification**, the groups (labels) are known beforehand, and the goal is to learn how to assign new data to them. In **Clustering**, the groups are not known; the goal is to discover what the natural groups are based on the data's structure."
    },
    {
        question: "The output of a Principal Component Analysis (PCA) algorithm is a new set of features called **principal components**. What is the most important characteristic of the first principal component (PC1)?",
        options: [
            "It is the direction in the data that has the least amount of variance.",
            "It is always orthogonal (at a right angle) to the y-axis.",
            "It is the direction in the data that captures the maximum amount of variance.",
            "It is a straight line that connects the first and last data points."
        ],
        answer: "It is the direction in the data that captures the maximum amount of variance.",
        explanation: "PCA is designed to find the axes that best represent the data. The first principal component (PC1) is defined as the direction along which the data varies the most. PC2 is the next direction of maximum variance, orthogonal to PC1, and so on."
    },
    {
        question: "Which of the following problems is best suited for an **unsupervised clustering** algorithm like K-Means?",
        options: [
            "Predicting whether a bank transaction is `fraudulent` or `legitimate` based on a dataset of labeled past transactions.",
            "Forecasting the exact stock price of a company for tomorrow.",
            "Automatically grouping a large collection of news articles into topics like 'sports', 'politics', and 'technology' without any predefined labels.",
            "Determining the sale price of a house based on its size, location, and age using historical sales data."
        ],
        answer: "Automatically grouping a large collection of news articles into topics like 'sports', 'politics', and 'technology' without any predefined labels.",
        explanation: "Grouping news articles without knowing the topics beforehand is a classic clustering problem. The algorithm must discover the topics (clusters) based on the similarity of the words used in the articles. Options A and D are supervised learning problems (classification and regression, respectively), as they rely on labeled historical data. Option B is a time-series regression problem."
    }
];

export default week3Questions;

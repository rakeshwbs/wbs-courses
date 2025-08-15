const fullModuleQuestions = [
    // --- Week 1: Intro & Foundations ---
    {
        question: "According to the 'Rational Agent' approach, what are an agent's 'sensors'?",
        options: [
            "The components it uses to act upon its environment.",
            "The components it uses to perceive its environment.",
            "The specific goals or objectives it is trying to achieve.",
            "The algorithm that makes the decisions."
        ],
        answer: "The components it uses to perceive its environment.",
        explanation: "Sensors (like cameras, microphones, GPS) are the tools an agent uses to gather information about its environment. Actuators are used to act upon it."
    },
    {
        question: "Which of the following best describes the primary role of the Pandas library in the AI workflow?",
        options: [
            "Performing high-speed numerical computations on arrays.",
            "Structuring, manipulating, and analyzing tabular data with DataFrames.",
            "Building and training deep learning models.",
            "Creating interactive data visualizations and plots."
        ],
        answer: "Structuring, manipulating, and analyzing tabular data with DataFrames.",
        explanation: "Pandas is the cornerstone of data preparation, providing the DataFrame object to handle spreadsheet-like data, which is the starting point for most AI projects. NumPy is for numerical computations."
    },
    // --- Week 2: Supervised Learning (Regression) ---
    {
        question: "A model that predicts the exact selling price of a house in Mauritius is performing what type of task?",
        options: [
            "Classification",
            "Clustering",
            "Regression",
            "Reinforcement Learning"
        ],
        answer: "Regression",
        explanation: "Regression is a supervised learning task where the goal is to predict a continuous, numerical value (like a price, temperature, or quantity)."
    },
    {
        question: "What is the 'Golden Rule' of machine learning that necessitates splitting data into training and testing sets?",
        options: [
            "Always use the most complex model possible.",
            "Never evaluate a model on the same data it was trained on.",
            "Ensure all data is perfectly clean before starting.",
            "Train the model for as many epochs as possible."
        ],
        answer: "Never evaluate a model on the same data it was trained on.",
        explanation: "This rule is crucial to get an unbiased estimate of the model's performance on new, unseen data. Testing on training data can be misleading as the model may have just memorized the answers."
    },
    {
        question: "In the scikit-learn workflow, which method is used to train a model on the data?",
        options: [
            ".predict()",
            ".evaluate()",
            ".fit()",
            ".transform()"
        ],
        answer: ".fit()",
        explanation: "The .fit(X_train, y_train) method is the core training step where the model learns the relationship between the features (X) and the target (y) from the training data."
    },
    // --- Week 3: Unsupervised Learning ---
    {
        question: "What is the primary goal of a clustering algorithm like K-Means?",
        options: [
            "To predict a continuous value for each data point.",
            "To assign each data point to a predefined category.",
            "To automatically discover natural groupings in unlabeled data.",
            "To reduce the number of features in the dataset."
        ],
        answer: "To automatically discover natural groupings in unlabeled data.",
        explanation: "Clustering is an unsupervised learning task. Its goal is to find inherent structures or clusters in data without having any prior labels to guide it."
    },
    {
        question: "The Elbow Method is a heuristic used to help determine what?",
        options: [
            "The optimal learning rate for a neural network.",
            "The number of features to use in a model.",
            "The best evaluation metric for a classification problem.",
            "A suitable number of clusters (K) for the K-Means algorithm."
        ],
        answer: "A suitable number of clusters (K) for the K-Means algorithm.",
        explanation: "The Elbow Method helps find an appropriate 'K' by plotting the model's inertia for different K values and identifying the 'elbow' point of diminishing returns."
    },
    {
        question: "Principal Component Analysis (PCA) is a technique used for...",
        options: [
            "Classification",
            "Regression",
            "Dimensionality Reduction",
            "Clustering"
        ],
        answer: "Dimensionality Reduction",
        explanation: "PCA reduces the number of features (dimensions) in a dataset while retaining as much of the original data's variance as possible. It is used to simplify data and mitigate the 'Curse of Dimensionality'."
    },
    // --- Week 4: Trees & Ensembles ---
    {
        question: "A Decision Tree that perfectly classifies every single sample in the training set but performs poorly on the test set is likely suffering from what?",
        options: [
            "Underfitting",
            "Overfitting",
            "The Curse of Dimensionality",
            "A low learning rate"
        ],
        answer: "Overfitting",
        explanation: "A large gap between training performance (very high) and testing performance (significantly lower) is the classic sign of overfitting. The model has memorized the training data, including its noise."
    },
    {
        question: "What is the core principle of Ensemble Learning, which powers Random Forests?",
        options: [
            "A single, deep, complex model is always the best choice.",
            "Models should only be trained on data that has no noise.",
            "Combining many diverse, simpler models often creates a single, more robust and accurate model.",
            "The most important feature in the dataset should be used to make all decisions."
        ],
        answer: "Combining many diverse, simpler models often creates a single, more robust and accurate model.",
        explanation: "This is the 'wisdom of the crowd' principle. By averaging the predictions of many different trees, a Random Forest reduces the risk of overfitting and improves generalization."
    },
    {
        question: "How does a Random Forest ensure the trees in its 'forest' are diverse?",
        options: [
            "By using a different algorithm for each tree.",
            "By training each tree on a random sample of data and using a random subset of features at each split.",
            "By pruning each tree to a different maximum depth.",
            "By training each tree on the exact same data but with different random initializations."
        ],
        answer: "By training each tree on a random sample of data and using a random subset of features at each split.",
        explanation: "This two-part randomization (bagging and random feature subsets) is the key to creating a diverse set of trees, which is essential for the ensemble's success."
    },
    // --- Week 5: SVM & Evaluation ---
    {
        question: "What is the primary objective of a Support Vector Machine (SVM)?",
        options: [
            "To find the hyperplane that passes through the most data points.",
            "To find the hyperplane that creates the maximum possible margin between classes.",
            "To create a tree-based model of if-then-else rules.",
            "To find the natural clusters in a dataset."
        ],
        answer: "To find the hyperplane that creates the maximum possible margin between classes.",
        explanation: "The core idea of an SVM is to find the most robust decision boundary by maximizing the 'street' or margin between the closest points of the different classes (the support vectors)."
    },
    {
        question: "A model is designed to detect a rare disease. It incorrectly tells a sick patient they are healthy. What type of error is this?",
        options: [
            "True Positive (TP)",
            "False Positive (FP)",
            "True Negative (TN)",
            "False Negative (FN)"
        ],
        answer: "False Negative (FN)",
        explanation: "This is a False Negative (Type II Error). The model predicted 'Negative' (healthy), but the actual class was 'Positive' (sick). This is often the most dangerous type of error in medical applications."
    },
    {
        question: "The Recall metric is calculated as TP / (TP + FN). A model with high recall is good at what?",
        options: [
            "Avoiding false alarms (minimizing False Positives).",
            "Being correct when it predicts the positive class.",
            "Finding all of the actual positive cases in the dataset (minimizing False Negatives).",
            "Achieving a high overall accuracy score."
        ],
        answer: "Finding all of the actual positive cases in the dataset (minimizing False Negatives).",
        explanation: "Recall measures the model's ability to 'find' or 'recall' all the true positive samples. It is critical in scenarios where missing a positive case is very costly."
    },
    // --- Week 6: NLP ---
    {
        question: "What is the process of converting a sentence into a list of individual words called?",
        options: [
            "Lemmatization",
            "Vectorization",
            "Tokenization",
            "Stop-Word Removal"
        ],
        answer: "Tokenization",
        explanation: "Tokenization is the foundational step in NLP where a string of text is broken down into smaller units, or tokens (usually words)."
    },
    {
        question: "How does TF-IDF improve upon the Bag-of-Words (BoW) model?",
        options: [
            "It considers the order of words in the sentence.",
            "It gives a higher weight to words that are important to a specific document but rare across all documents.",
            "It captures the semantic meaning of words.",
            "It is a form of deep learning."
        ],
        answer: "By giving a higher weight to words that are important to a specific document but rare across all documents.",
        explanation: "TF-IDF's key innovation is the Inverse Document Frequency component, which penalizes common words and boosts the importance of unique, descriptive words."
    },
    {
        question: "The ability to represent words in a way that `vector('King') - vector('Man') + vector('Woman')` results in a vector close to `vector('Queen')` is a hallmark of what technique?",
        options: [
            "TF-IDF",
            "Bag-of-Words",
            "Word Embeddings",
            "Stemming"
        ],
        answer: "Word Embeddings",
        explanation: "This demonstrates that Word Embedding models (like Word2Vec) capture the semantic relationships and analogies between words in their vector representations."
    },
    // --- Week 7: ANNs ---
    {
        question: "What is the primary role of an **activation function** in a neuron?",
        options: [
            "To calculate the weighted sum of inputs.",
            "To introduce non-linearity, allowing the network to learn complex patterns.",
            "To determine the number of neurons in a layer.",
            "To update the weights during backpropagation."
        ],
        answer: "To introduce non-linearity, allowing the network to learn complex patterns.",
        explanation: "Without non-linear activation functions, a deep network would be mathematically equivalent to a single linear layer. Functions like ReLU allow the network to model complex, non-linear relationships."
    },
    {
        question: "What is the purpose of the **Backpropagation** algorithm?",
        options: [
            "To pass input data forward through the network to get a prediction.",
            "To randomly initialize the weights of the network.",
            "To calculate the error contribution of each weight, working backward from the final loss.",
            "To select the best model architecture."
        ],
        answer: "To calculate the error contribution of each weight, working backward from the final loss.",
        explanation: "Backpropagation is the core training algorithm that efficiently calculates the gradients (error contributions) needed to update the network's weights via an optimizer like gradient descent."
    },
    {
        question: "The **Softmax** activation function is typically used in which layer of a network?",
        options: [
            "The Input Layer",
            "All Hidden Layers",
            "The Output Layer of a multi-class classification network.",
            "The Output Layer of a regression network."
        ],
        answer: "The Output Layer of a multi-class classification network.",
        explanation: "Softmax is ideal for the output layer of a multi-class classifier because it converts the raw scores into a probability distribution where all outputs sum to 1."
    },
    // --- Week 8: CNNs ---
    {
        question: "What is the main advantage of a Convolutional Neural Network (CNN) over a standard MLP for image tasks?",
        options: [
            "CNNs have fewer layers.",
            "CNNs preserve the spatial relationship between pixels.",
            "CNNs can only be used for grayscale images.",
            "CNNs do not require an activation function."
        ],
        answer: "CNNs preserve the spatial relationship between pixels.",
        explanation: "By using filters that scan over the 2D image, CNNs maintain the spatial hierarchy, allowing them to learn features like edges and textures. MLPs destroy this information by flattening the image."
    },
    {
        question: "What is the function of a **Max Pooling** layer in a CNN?",
        options: [
            "To apply a filter to detect features.",
            "To increase the size of the image.",
            "To introduce non-linearity into the network.",
            "To downsample the feature maps, reducing their spatial dimensions."
        ],
        answer: "To downsample the feature maps, reducing their spatial dimensions.",
        explanation: "Max Pooling reduces the width and height of the feature maps, making the network more computationally efficient and robust to small shifts in the input."
    },
    {
        question: "The hierarchical learning in a CNN means that...",
        options: [
            "The final layers learn simple features like edges, and the first layers learn complex objects.",
            "The first layers learn simple features like edges, which are combined by later layers to form complex objects.",
            "Each layer works independently of the others.",
            "The network can only learn a fixed, predefined hierarchy."
        ],
        answer: "The first layers learn simple features like edges, which are combined by later layers to form complex objects.",
        explanation: "This is the essence of deep learning for vision. The network builds complexity, learning simple patterns first and combining them into more abstract representations in deeper layers."
    },
    // --- Week 9: Generative AI (LLMs) ---
    {
        question: "What is the key difference between a **generative** and a **discriminative** model?",
        options: [
            "Generative models create new data, while discriminative models classify existing data.",
            "Generative models are always unsupervised, while discriminative models are always supervised.",
            "Generative models use Decision Trees, while discriminative models use Neural Networks.",
            "There is no fundamental difference."
        ],
        answer: "Generative models create new data, while discriminative models classify existing data.",
        explanation: "A discriminative model learns a boundary to distinguish between classes (e.g., cat vs. dog). A generative model learns the underlying distribution of the data to create new samples (e.g., create a new image of a cat)."
    },
    {
        question: "In a Generative Adversarial Network (GAN), what is the role of the **Discriminator**?",
        options: [
            "To create new, fake data from random noise.",
            "To act as a critic that tries to distinguish between real and fake data.",
            "To guide the Generator with a text prompt.",
            "To calculate the final loss for both networks."
        ],
        answer: "To act as a critic that tries to distinguish between real and fake data.",
        explanation: "The Discriminator is the 'art critic' that learns to tell real data apart from the Generator's fakes. Its feedback is used to train the Generator to get better."
    },
    {
        question: "What was the key innovation of the **Transformer** architecture that powers modern LLMs?",
        options: [
            "The use of convolutional filters.",
            "The ability to run without a GPU.",
            "The **self-attention mechanism**.",
            "A new type of activation function."
        ],
        answer: "The **self-attention mechanism**.",
        explanation: "Attention allows the model to weigh the importance of different words in the input when processing a sentence, overcoming the long-term memory issues of older architectures."
    },
    {
        question: "The skill of carefully crafting text inputs to guide a generative model toward a desired output is called...",
        options: [
            "Feature Engineering",
            "Model Compiling",
            "Prompt Engineering",
            "Data Augmentation"
        ],
        answer: "Prompt Engineering",
        explanation: "Prompt Engineering is the critical skill of designing effective prompts to control the output of pre-trained generative models."
    },
    // --- Week 10: Generative AI (Vision) ---
    {
        question: "How does a **Diffusion Model** generate a new image?",
        options: [
            "By playing a game between a Generator and a Discriminator.",
            "By starting with random noise and iteratively removing the predicted noise over many steps.",
            "By finding a similar image in its training set and modifying it.",
            "By directly converting a text prompt into pixels in a single step."
        ],
        answer: "By starting with random noise and iteratively removing the predicted noise over many steps.",
        explanation: "The core of a Diffusion Model is a trained 'denoiser' that works backward from pure static, step-by-step, to create a coherent image."
    },
    {
        question: "In a text-to-image diffusion model, what is the purpose of the **text encoder** (like CLIP)?",
        options: [
            "To check the prompt for grammar errors.",
            "To generate the final pixels of the image.",
            "To convert the text prompt into a numerical embedding that guides the denoising process.",
            "To add the initial noise to the canvas."
        ],
        answer: "To convert the text prompt into a numerical embedding that guides the denoising process.",
        explanation: "The text embedding provides the 'conditioning' or 'guidance' that steers the denoising process towards creating an image that matches the prompt's meaning."
    },
    {
        question: "Using a `negative_prompt` like 'blurry, cartoon' helps to do what?",
        options: [
            "Add these styles to the final image.",
            "Make the generation process faster.",
            "Force the model to only generate cartoons.",
            "Guide the model away from producing images with these undesirable qualities."
        ],
        answer: "Guide the model away from producing images with these undesirable qualities.",
        explanation: "A negative prompt acts as an 'anti-guidance' signal, telling the model to avoid common failure modes or specific styles, which often improves the quality of the final image."
    },
    // --- Week 11 & 12: Ethics & Future ---
    {
        question: "What is the primary cause of **algorithmic bias** in AI?",
        options: [
            "The use of complex neural networks.",
            "The mathematical formulas used in the algorithms.",
            "Biases present in the historical data used to train the model.",
            "The choice of programming language."
        ],
        answer: "Biases present in the historical data used to train the model.",
        explanation: "AI models learn from data. If the data reflects societal or historical biases, the model will learn and often amplify those biases in its predictions."
    },
    {
        question: "The field of **Explainable AI (XAI)** aims to address what problem?",
        options: [
            "The high cost of training AI models.",
            "The 'black box' nature of complex models like deep neural networks.",
            "The need for more training data.",
            "The slow speed of model inference."
        ],
        answer: "The 'black box' nature of complex models like deep neural networks.",
        explanation: "XAI is focused on transparency. Its goal is to create techniques that can interpret and explain *why* a model made a specific decision, which is crucial for trust and accountability."
    },
    {
        question: "The future trend of **Multimodal AI** refers to models that can...",
        options: [
            "Be deployed in multiple different countries.",
            "Run on multiple different types of hardware.",
            "Understand and process information from multiple data types at once (e.g., text, images, sound).",
            "Generate multiple different outputs from a single prompt."
        ],
        answer: "Understand and process information from multiple data types at once (e.g., text, images, sound).",
        explanation: "Multimodal AI integrates different 'senses' to build a more holistic understanding, allowing it to perform tasks like describing an image in text or answering questions about a video."
    },
    {
        question: "What is meant by an **AI Agent**?",
        options: [
            "A person who sells AI software.",
            "An AI system that can take actions in an environment to achieve a goal.",
            "A specific type of neural network layer.",
            "A cloud platform for training models."
        ],
        answer: "An AI system that can take actions in an environment to achieve a goal.",
        explanation: "An AI Agent is proactive. It perceives its environment (physical or digital) and takes actions to achieve its objectives, moving beyond simple prediction or generation."
    },
    // --- Bonus Comprehensive Questions ---
    {
        question: "A CNN is typically used for a Computer Vision task. This task falls under which broader AI paradigm?",
        options: [
            "Unsupervised Learning",
            "Reinforcement Learning",
            "Supervised Learning",
            "Generative AI"
        ],
        answer: "Supervised Learning",
        explanation: "Standard image classification with a CNN is a supervised learning task because the network is trained on a dataset of images that have been pre-labeled with the correct categories."
    },
    {
        question: "A model that learns to play a video game by receiving a 'reward' for a high score and a 'penalty' for losing is an example of what?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
//            "Reinforcement Learning",
            "Generative AI"
        ],
        answer: "Reinforcement Learning",
        explanation: "Reinforcement Learning is defined by an agent learning to make a sequence of decisions in an environment by receiving feedback in the form of rewards or penalties."
    },
    {
        question: "Why is it necessary to scale features before training an SVM?",
        options: [
            "SVMs cannot handle negative 02-numbers.",
            "SVMs are distance-based and sensitive to the scale of the features.",
            "Scaling converts categorical features to numerical ones.",
            "Scaling is only necessary for the test data."
        ],
        answer: "SVMs are distance-based and sensitive to the scale of the features.",
        explanation: "Because SVMs calculate distances to find the maximum margin, a feature with a large scale (e.g., income) can dominate a feature with a small scale (e.g., number of children). Scaling ensures all features contribute fairly."
    },
    {
        question: "A model's high performance on a test set is only meaningful if...",
        options: [
            "The model is a deep neural network.",
            "The test set was kept completely separate from the training set.",
            "The model also achieved 100% accuracy on the training set.",
            "The test set is smaller than the training set."
        ],
        answer: "The test set was kept completely separate from the training set.",
        explanation: "The integrity of the test set is paramount. It must represent new, unseen data to provide a valid, unbiased estimate of the model's generalization ability."
    },
    {
        question: "Which of these models is NOT a generative model?",
        options: [
            "Generative Adversarial Network (GAN)",
            "Diffusion Model",
            "Large Language Model (LLM) like GPT",
            "Support Vector Machine (SVM)"
        ],
        answer: "Support Vector Machine (SVM)",
        explanation: "An SVM is a discriminative model. Its purpose is to find a boundary to classify existing data, not to generate new data samples."
    }
];

export default fullModuleQuestions;
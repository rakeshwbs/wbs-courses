const week7Questions = [
    {
        question: "What is the primary role of the **activation function** in an artificial neuron?",
        options: [
            "To calculate the sum of all weighted inputs.",
            "To adjust the weights during the training process.",
            "To determine the final output signal of the neuron based on the summed inputs.",
            "To store the input feature values."
        ],
        answer: "To determine the final output signal of the neuron based on the summed inputs.",
        explanation: "After the neuron calculates the weighted sum of its inputs, the activation function processes this sum to decide the neuron's final output. It introduces non-linearity, allowing the network to learn complex patterns."
    },
    {
        question: "In the context of a Multi-Layer Perceptron (MLP), what does the **Input Layer** do?",
        options: [
            "It performs the final classification or regression prediction.",
            "It learns the most abstract and complex features from the data.",
            "It receives the raw feature values from the dataset and passes them to the first hidden layer.",
            "It applies the ReLU activation function to normalize the data."
        ],
        answer: "It receives the raw feature values from the dataset and passes them to the first hidden layer.",
        explanation: "The Input Layer is the entry point of the network. It doesn't perform any computation; its role is simply to take in the raw data, with one neuron typically representing one feature."
    },
    {
        question: "What is the most popular activation function for **hidden layers** in modern neural networks due to its simplicity and efficiency?",
        options: [
            "Step Function",
            "Sigmoid",
            "Softmax",
            "ReLU (Rectified Linear Unit)"
        ],
        answer: "ReLU (Rectified Linear Unit)",
        explanation: "ReLU is the default choice for hidden layers. It is computationally very efficient (outputting 0 for negative inputs, and the input itself for positive inputs) and helps mitigate some problems like the vanishing gradient issue."
    },
    {
        question: "What is the conceptual purpose of the **Backpropagation** algorithm?",
        options: [
            "To pass the input data forward through the network to get a prediction.",
            "To calculate the error contribution of each weight in the network, working backward from the final loss.",
            "To randomly initialize the weights of the network before training begins.",
            "To select the best optimizer for the model."
        ],
        answer: "To calculate the error contribution of each weight in the network, working backward from the final loss.",
        explanation: "Backpropagation is the core algorithm for training neural networks. It efficiently calculates how much 'blame' each weight should get for the overall error, which is essential for knowing how to adjust the weights to improve the model."
    },
    {
        question: "In the Keras lab, what was the purpose of the `keras.layers.Flatten` layer?",
        options: [
            "To train the neural network.",
            "To convert the 28x28 pixel image into a 1D vector of 784 pixels.",
            "To apply the final softmax activation function.",
            "To make the image grayscale."
        ],
        answer: "To convert the 28x28 pixel image into a 1D vector of 784 pixels.",
        explanation: "The dense (fully connected) layers of an MLP expect a 1D vector as input. The `Flatten` layer performs the crucial preprocessing step of 'unrolling' the 2D image grid into a single, flat array so it can be fed into the first hidden layer."
    },
    {
        question: "When we compile a Keras model, we define a `loss` function. What is the role of this function?",
        options: [
            "It adjusts the learning rate of the optimizer.",
            "It measures how wrong the model's prediction is compared to the true label.",
            "It defines the number of neurons in the hidden layers.",
            "It determines how many epochs the model will train for."
        ],
        answer: "It measures how wrong the model's prediction is compared to the true label.",
        explanation: "The loss function calculates a single number that quantifies the error between the predicted output and the actual target. The entire goal of training is to adjust the model's weights to minimize this loss value."
    },
    {
        question: "What is an **epoch** in the context of training a neural network?",
        options: [
            "A single data point from the training set.",
            "The process of making one prediction on a new image.",
            "One complete pass of the training algorithm through the entire training dataset.",
            "The final accuracy score of the model on the test set."
        ],
        answer: "One complete pass of the training algorithm through the entire training dataset.",
        explanation: "Training a neural network is an iterative process. An epoch represents one full cycle where the model has seen and learned from every sample in the training data once."
    },
    {
        question: "The **Softmax** activation function is typically used in which layer of a multi-class classification network?",
        options: [
            "The Input Layer",
            "The first Hidden Layer",
            "All Hidden Layers",
            "The Output Layer"
        ],
        answer: "The Output Layer",
        explanation: "Softmax is ideal for the output layer of a multi-class classifier because it takes the raw scores from the final layer and converts them into a probability distribution, where each output represents the probability of the input belonging to that class and all outputs sum to 1."
    },
    {
        question: "What is the primary role of an **optimizer** (like 'sgd' or 'adam') during the model compilation step?",
        options: [
            "To define the architecture of the neural network.",
            "To calculate the loss between the prediction and the true label.",
            "To implement the algorithm that updates the model's weights based on the results of backpropagation.",
            "To split the data into training and validation sets."
        ],
        answer: "To implement the algorithm that updates the model's weights based on the results of backpropagation.",
        explanation: "The optimizer is the specific algorithm (e.g., Stochastic Gradient Descent, Adam) that uses the gradients calculated by backpropagation to perform the weight updates. It controls *how* the model learns."
    },
    {
        question: "A single Perceptron, the simplest form of an artificial neuron, is limited to solving what kind of problems?",
        options: [
            "Only regression problems.",
            "Only problems that are linearly separable.",
            "Only computer vision problems.",
            "Any problem a multi-layer network can solve."
        ],
        answer: "Only problems that are linearly separable.",
        explanation: "A single Perceptron can only learn to separate data with a single straight line (or hyperplane). It cannot solve non-linear problems, which was the key limitation that led to the development of multi-layer networks."
    }
];

export default week7Questions;
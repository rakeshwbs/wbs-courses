const week9Questions = [
    {
        question: "What is the fundamental difference between a **discriminative** AI model and a **generative** AI model?",
        options: [
            "Discriminative models create new data, while generative models classify existing data.",
            "Discriminative models learn the boundary between classes, while generative models learn the underlying distribution of the data itself.",
            "Discriminative models are only used for regression, while generative models are only used for classification.",
            "Discriminative models are unsupervised, while generative models are supervised."
        ],
        answer: "Discriminative models learn the boundary between classes, while generative models learn the underlying distribution of the data itself.",
        explanation: "This is the key distinction. A discriminative model learns to predict a label (y) given an input (X), effectively finding a decision boundary. A generative model learns the 'essence' of the data, allowing it to create new data samples."
    },
    {
        question: "In a Generative Adversarial Network (GAN), what is the primary role of the **Generator** network?",
        options: [
            "To accurately classify whether an image is real or fake.",
            "To learn the underlying patterns of the real data and create new, fake data that looks realistic.",
            "To provide the training data for the Discriminator network.",
            "To calculate the final loss value and perform backpropagation."
        ],
        answer: "To learn the underlying patterns of the real data and create new, fake data that looks realistic.",
        explanation: "The Generator is the 'art forger' in the GAN setup. Its goal is to produce synthetic data that is so convincing it can fool the Discriminator."
    },
    {
        question: "What is the primary role of the **Discriminator** network in a GAN?",
        options: [
            "To generate new, realistic-looking images from random noise.",
            "To act as an expert critic that distinguishes between real data and the fake data created by the Generator.",
            "To provide the creative input or prompt for the Generator.",
            "To store the entire training dataset in its memory."
        ],
        answer: "To act as an expert critic that distinguishes between real data and the fake data created by the Generator.",
        explanation: "The Discriminator is the 'art critic'. Its sole job is to get better and better at telling real data apart from the Generator's fakes, which in turn forces the Generator to improve."
    },
    {
        question: "What was the key innovation of the **Transformer** architecture that revolutionized Natural Language Processing?",
        options: [
            "The use of Convolutional layers to process text.",
            "The ability to run on much smaller datasets.",
            "The **self-attention mechanism**, which allows the model to weigh the importance of different words in the input.",
            "A new type of loss function called 'generative loss'."
        ],
        answer: "The **self-attention mechanism**, which allows the model to weigh the importance of different words in the input.",
        explanation: "Attention allows the model to dynamically focus on the most relevant parts of the input sequence when processing a particular word, overcoming the long-term memory problems of older architectures like RNNs."
    },
    {
        question: "How are Large Language Models (LLMs) like GPT typically trained on a fundamental level?",
        options: [
            "By classifying sentences as grammatically correct or incorrect.",
            "By repeatedly trying to predict the next word in a sentence from a massive text dataset.",
            "By memorizing a dictionary of all known words and their definitions.",
            "By playing an adversarial game against a Discriminator model."
        ],
        answer: "By repeatedly trying to predict the next word in a sentence from a massive text dataset.",
        explanation: "This simple, self-supervised task, when performed on a vast corpus of text, forces the model to learn grammar, context, facts, and reasoning abilities in order to make accurate predictions."
    },
    {
        question: "The practice of carefully designing the input text to guide a generative model towards a desired output is known as...",
        options: [
            "Model Compiling",
            "Feature Engineering",
            "Prompt Engineering",
            "Backpropagation"
        ],
        answer: "Prompt Engineering",
        explanation: "Prompt Engineering is the critical skill of crafting effective prompts to steer a pre-trained model's behavior. The way a question or command is phrased can dramatically change the quality and relevance of the generated output."
    },
    {
        question: "In the lab, why did we use a pre-trained model from Hugging Face instead of training our own language model from scratch?",
        options: [
            "Training a large language model from scratch is computationally inexpensive and fast.",
            "Pre-trained models are less accurate but easier to use.",
            "Training a large language model from scratch is extremely expensive and time-consuming, requiring massive datasets and compute power.",
            "Hugging Face models are the only ones that can generate code."
        ],
        answer: "Training a large language model from scratch is extremely expensive and time-consuming, requiring massive datasets and compute power.",
        explanation: "Training foundational models costs millions of dollars and can take weeks or months. Leveraging pre-trained models is the standard, practical approach for almost all developers and companies."
    },
    {
        question: "The adversarial training process in a GAN ends when...",
        options: [
            "The Generator achieves 100% accuracy in fooling the Discriminator.",
            "The Discriminator achieves 100% accuracy in detecting fakes.",
            "The Generator's fakes are so realistic that the Discriminator is only correct about 50% of the time (it is essentially guessing).",
            "The loss function of the Generator becomes zero."
        ],
        answer: "The Generator's fakes are so realistic that the Discriminator is only correct about 50% of the time (it is essentially guessing).",
        explanation: "This point is called the Nash equilibrium. The Generator has become so good that the Discriminator can no longer find any reliable patterns to distinguish real from fake, meaning its performance is no better than random chance."
    },
    {
        question: "Which of the following tasks is a direct application of **Generative AI**, not discriminative AI?",
        options: [
            "Predicting a patient's risk of heart disease based on their medical history.",
            "Classifying an image as containing a 'cat' or a 'dog'.",
            "Creating a new, photorealistic image of a Mauritian sunset from a text description.",
            "Identifying if a credit card transaction is fraudulent."
        ],
        answer: "Creating a new, photorealistic image of a Mauritian sunset from a text description.",
        explanation: "Creating new, original content (an image) that did not exist before is a generative task. The other options are all discriminative tasks, as they involve predicting a label for existing data."
    },
    {
        question: "What is the primary role of the `pipeline` function from the Hugging Face `transformers` library?",
        options: [
            "To train a new language model from scratch.",
            "To clean and preprocess the text data before training.",
            "To provide an easy, high-level interface that handles the complexity of loading a pre-trained model and its tokenizer for a specific task.",
            "To visualize the architecture of a neural network."
        ],
        answer: "To provide an easy, high-level interface that handles the complexity of loading a pre-trained model and its tokenizer for a specific task.",
        explanation: "The `pipeline` function is a powerful abstraction. It simplifies the process of using a pre-trained model for a standard task (like 'text-generation') down to just a few lines of code."
    }
];

export default week9Questions;
const week11Questions = [
    {
        question: "What is the primary cause of **algorithmic bias** in an AI model?",
        options: [
            "The model's algorithm is mathematically flawed from the start.",
            "The model learns and often amplifies the historical and societal biases present in its training data.",
            "The model is too simple and does not have enough hidden layers to understand fairness.",
            "The model was written in a programming language that is not suited for ethical considerations."
        ],
        answer: "The model learns and often amplifies the historical and societal biases present in its training data.",
        explanation: "AI models are a reflection of the data they are trained on. If the data contains biases (e.g., historical hiring practices that favored one gender), the model will learn these biases as a valid pattern, leading to unfair or discriminatory outcomes."
    },
    {
        question: "The acronym **FAT** is often used in the context of responsible AI. What does it stand for?",
        options: [
            "Features, Algorithms, and Training.",
            "Fast, Accurate, and Thorough.",
            "For All Times.",
            "Fairness, Accountability, and Transparency."
        ],
        answer: "Fairness, Accountability, and Transparency.",
        explanation: "Fairness, Accountability, and Transparency are considered the three key pillars for developing responsible and trustworthy AI systems."
    },
    {
        question: "Why would a model that is 99.9% accurate be considered a failure if its task is to detect a rare disease that affects 0.1% of the population?",
        options: [
            "Because the accuracy score is too high to be believable.",
            "Because the model is likely just predicting 'No Disease' every time, making it useless for finding sick patients.",
            "Because 99.9% accuracy is not perfect and 100% is required for medical applications.",
            "Because the dataset is too small to achieve such a high accuracy."
        ],
        answer: "Because the model is likely just predicting 'No Disease' every time, making it useless for finding sick patients.",
        explanation: "This is a classic example of the 'accuracy paradox' in imbalanced datasets. A model can achieve very high accuracy by simply always predicting the majority class, completely failing at its actual purpose, which is to identify the rare but critical minority class."
    },
    {
        question: "What is the primary goal of **Explainable AI (XAI)**?",
        options: [
            "To make AI models 100% accurate.",
            "To create techniques that can interpret and explain the decisions of 'black box' models like deep neural networks.",
            "To automatically generate documentation and user manuals for AI systems.",
            "To ensure that AI models are built using only simple, easy-to-understand algorithms like Decision Trees."
        ],
        answer: "To create techniques that can interpret and explain the decisions of 'black box' models like deep neural networks.",
        explanation: "XAI is focused on transparency. Its goal is to provide insight into *why* a model made a specific prediction, which is crucial for building trust, debugging, and ensuring fairness, especially in high-stakes applications."
    },
    {
        question: "Which of the following is an ethical challenge specifically associated with **Generative AI**?",
        options: [
            "The model might show bias against certain demographic groups.",
            "The model could be used to generate realistic but fake images and text, spreading misinformation.",
            "The model's decisions might be difficult to understand.",
            "The model could be used to predict customer churn."
        ],
        answer: "The model could be used to generate realistic but fake images and text, spreading misinformation.",
        explanation: "While other issues apply to AI in general, the ability to create new, convincing content at scale introduces unique risks like deepfakes and mass-produced misinformation, which are a primary concern for generative models."
    },
    {
        question: "A bank's loan-approval AI is found to have a much higher rejection rate for applicants from a specific neighborhood, even with similar financial profiles. This is a failure of which ethical principle?",
        options: [
            "Accountability",
            "Fairness",
            "Transparency",
            "Model Performance"
        ],
        answer: "Fairness",
        explanation: "Fairness requires that a model's outcomes do not create discriminatory or unjust results for different groups. In this case, the model is producing an unfair outcome based on the neighborhood, which is a violation of this principle."
    },
    {
        question: "When a self-driving car causes an accident, the question of who is legally responsible (the owner, the manufacturer, the software developer) is a problem of...",
        options: [
            "Fairness",
            "Explainability",
            "Bias",
            "Accountability"
        ],
        answer: "Accountability",
        explanation: "Accountability is the principle of establishing who is responsible for the actions and outcomes of an AI system. Determining liability in the case of an error is a core challenge in this area."
    },
    {
        question: "For your final project, if you choose the **'Visionary'** track, what kind of task would you be undertaking?",
        options: [
            "Using a pre-trained LLM to generate a story.",
            "Building a model to predict hotel booking cancellations.",
            "Training a CNN to classify different types of local Mauritian fruits from images.",
            "Analyzing a dataset to find hidden customer segments."
        ],
        answer: "Training a CNN to classify different types of local Mauritian fruits from images.",
        explanation: "The 'Visionary' track is focused on Computer Vision, which involves building models to 'see' and interpret visual data, such as classifying images."
    },
    {
        question: "What is the primary purpose of the Week 11 lab session?",
        options: [
            "To learn a new, complex algorithm for AI ethics.",
            "To take the Mid-Term Exam.",
            "To provide a step-by-step guide for building a specific project.",
            "To act as a workshop for students to brainstorm, plan, and get help starting their final projects."
        ],
        answer: "To act as a workshop for students to brainstorm, plan, and get help starting their final projects.",
        explanation: "The lab for this week shifts from a guided, step-by-step format to a self-directed workshop, where the goal is to help students kickstart their own unique final projects."
    },
    {
        question: "Considering AI ethics, why is it important to know the **provenance** (origin and history) of a model's training data?",
        options: [
            "To ensure the data is stored in the most efficient file format.",
            "To check for potential biases and to ensure that the data was sourced ethically and legally (e.g., without violating copyright).",
            "To calculate the total size of the dataset in gigabytes.",
            "To ensure the data is perfectly balanced between all possible classes."
        ],
        answer: "To check for potential biases and to ensure that the data was sourced ethically and legally (e.g., without violating copyright).",
        explanation: "Understanding data provenance is crucial for responsible AI. It helps identify potential sources of bias (e.g., was the data collected from only one demographic?) and addresses legal/ethical issues, such as whether copyrighted material was used for training without permission."
    }
];

export default week11Questions;

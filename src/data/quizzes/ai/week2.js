const week2Questions = [
    {
        question: "What is the fundamental characteristic that defines a machine learning problem as supervised?",
        options: [
            "The algorithm is monitored by a data scientist during training.",
            "The data used for training includes \"correct answers\" or labels.",
            "The model can only predict two possible outcomes.",
            "The algorithm uses a complex, multi-layered neural network."
        ],
        answer: "The data used for training includes \"correct answers\" or labels.",
        explanation: "Supervised Learning is defined by the use of **labeled data**. The algorithm learns the relationship between the input features and the known output labels (the correct answers) in the training set."
    },
    {
        question: "In the \"Property Guru\" lab, we built a model to predict the `Price_MUR` of a property based on its `Area_sq_ft`. In this context, what are the 'Feature (X)' and the 'Target (y)'?",
        options: [
            "Feature is `Price_MUR`, Target is `Area_sq_ft`.",
            "Feature is `Area_sq_ft`, Target is `Price_MUR`.",
            "Both `Area_sq_ft` and `Price_MUR` are features.",
            "The feature is the linear regression model itself."
        ],
        answer: "Feature is `Area_sq_ft`, Target is `Price_MUR`.",
        explanation: "The feature (X) is the input variable we use to make a prediction (`Area_sq_ft`). The target (y) is the output variable we are trying to predict (`Price_MUR`)."
    },
    {
        question: "Which of the following is a classification problem, not a regression problem?",
        options: [
            "Predicting the amount of rainfall in millimeters for tomorrow.",
            "Estimating the total number of tourists that will visit Mauritius next year.",
            "Forecasting a company's stock price for next week.",
            "Determining whether an email is `spam` or `not spam`."
        ],
        answer: "Determining whether an email is `spam` or `not spam`.",
        explanation: "Classification problems involve predicting a discrete category or class. `Spam` and `not spam` are distinct categories. The other options all involve predicting a continuous numerical value, making them regression problems."
    },
    {
        question: "What is the primary reason for splitting our dataset into a **training set** and a **testing set**?",
        options: [
            "To make the model train faster by using less data.",
            "To have a backup of the data in case the original is corrupted.",
            "To get an unbiased evaluation of how well the model generalizes to new, unseen data.",
            "To use one set for regression tasks and the other for classification tasks."
        ],
        answer: "To get an unbiased evaluation of how well the model generalizes to new, unseen data.",
        explanation: "This is the \"Golden Rule\" of machine learning. The testing set provides an honest, unbiased measure of the model's ability to **generalize** its learning to data it has never encountered before."
    },
    {
        question: "What is the purpose of the `.fit(X_train, y_train)` method in the `scikit-learn` workflow?",
        options: [
            "It makes predictions on the new, unseen data.",
            "It calculates the final performance metric of the model.",
            "It splits the data into training and testing sets.",
            "It trains the machine learning model by learning patterns from the training data."
        ],
        answer: "It trains the machine learning model by learning patterns from the training data.",
        explanation: "The `.fit()` method is the core \"learning\" step. The model analyzes `X_train` and `y_train` to adjust internal parameters and learn the underlying patterns."
    },
    {
        question: "In the final evaluation step of our lab's workflow, on which dataset do we call the `.predict()` method?",
        options: [
            "`X_train` (the training features)",
            "`X_test` (the testing features)",
            "`y_train` (the training labels)",
            "The entire original DataFrame before splitting."
        ],
        answer: "`X_test` (the testing features)",
        explanation: "To get an unbiased evaluation, we must make predictions on the data the model has **not** seen during training. Therefore, we use the trained model to predict the outcomes for `X_test`."
    },
    {
        question: "In our regression lab, we calculated the Mean Squared Error (MSE). What does a **low** MSE value signify?",
        options: [
            "The model's predictions are, on average, very close to the actual values.",
            "The model has over-learned from the training data and will perform poorly.",
            "The dataset has very few features.",
            "The model's predictions are, on average, far from the actual values."
        ],
        answer: "The model's predictions are, on average, very close to the actual values.",
        explanation: "The Mean Squared Error measures the average of the squares of the errors (the difference between predicted and actual values). A smaller error means the predictions are more accurate, so a low MSE is desirable."
    },
    {
        question: "What does the following line of code from the lab accomplish? `model = LinearRegression()`",
        options: [
            "It trains the linear regression model.",
            "It makes predictions using the linear regression model.",
            "It creates an instance (or object) of the linear regression algorithm, but does not train it yet.",
            "It loads the dataset into a variable named `model`."
        ],
        answer: "It creates an instance (or object) of the linear regression algorithm, but does not train it yet.",
        explanation: "This line **instantiates** the model. It creates a blank version of the `LinearRegression` algorithm, ready to be trained using `.fit()`. No learning has occurred yet."
    },
    {
        question: "In the final visualization from the lab, what does the straight red line plotted over the blue data points represent?",
        options: [
            "The average price of all houses in the dataset.",
            "A random line drawn for comparison.",
            "The relationship that our trained model has learned between area and price.",
            "The actual prices from the test set."
        ],
        answer: "The relationship that our trained model has learned between area and price.",
        explanation: "The red line is the visual representation of our model. It shows the predictions the model would make for any given `Area_sq_ft`. It is the line of best fit from training."
    },
    {
        question: "Which of the following correctly orders the first three steps of the standard machine learning workflow?",
        options: [
            "1. Train Model, 2. Choose Model, 3. Prepare Data",
            "1. Prepare Data, 2. Train Model, 3. Evaluate Model",
            "1. Prepare Data, 2. Choose Model, 3. Train Model",
            "1. Choose Model, 2. Evaluate Model, 3. Prepare Data"
        ],
        answer: "1. Prepare Data, 2. Choose Model, 3. Train Model",
        explanation: "The correct order is: Prepare the data, Choose an appropriate algorithm, then Train the model. Evaluation follows afterward."
    }
];

export default week2Questions;

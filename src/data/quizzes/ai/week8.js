const week8Questions = [
    {
        question: "What is the primary reason that a standard Multi-Layer Perceptron (MLP) is not ideal for image classification tasks?",
        options: [
            "MLPs cannot use the ReLU activation function.",
            "The initial 'Flatten' layer destroys the spatial relationship between pixels.",
            "MLPs can only handle grayscale images, not color images.",
            "MLPs are a form of unsupervised learning."
        ],
        answer: "The initial 'Flatten' layer destroys the spatial relationship between pixels.",
        explanation: "This is the core problem. By unrolling a 2D image into a 1D vector, the MLP loses all information about which pixels were next to each other, making it hard to learn features like edges and shapes."
    },
    {
        question: "In a Convolutional Neural Network (CNN), what is the main function of a **Convolutional Layer**?",
        options: [
            "To reduce the width and height of the feature maps to save computation.",
            "To convert the final feature maps into a 1D vector for the classifier head.",
            "To apply learnable filters to the input image to detect specific features like edges, corners, or textures.",
            "To assign a final class probability to the image."
        ],
        answer: "To apply learnable filters to the input image to detect specific features like edges, corners, or textures.",
        explanation: "This is the primary purpose of a convolutional layer. It uses filters (kernels) to scan the image and create feature maps that highlight the presence of specific patterns."
    },
    {
        question: "What is the primary purpose of a **Max Pooling** layer in a CNN?",
        options: [
            "To increase the number of features detected by the network.",
            "To apply a non-linear activation function like ReLU.",
            "To progressively reduce the spatial size (width and height) of the feature maps.",
            "To learn the values of the filter weights through backpropagation."
        ],
        answer: "To progressively reduce the spatial size (width and height) of the feature maps.",
        explanation: "This is the main goal. By downsampling the feature maps, it makes the network more computationally efficient and helps make the detected features more robust to small shifts in position."
    },
    {
        question: "The hierarchical learning process in a CNN means that...",
        options: [
            "The final layer learns simple features like edges, and the first layer learns complex objects like faces.",
            "The first layers learn simple features like edges, which are combined by later layers to detect complex objects like faces.",
            "Every layer in the network learns to detect the same set of features independently.",
            "The network can only learn to classify objects in a specific, predefined hierarchy."
        ],
        answer: "The first layers learn simple features like edges, which are combined by later layers to detect complex objects like faces.",
        explanation: "This correctly describes the hierarchical nature of CNNs. Each layer builds upon the features detected by the previous one, creating increasingly abstract and complex representations."
    },
    {
        question: "What is a 'filter' or 'kernel' in a convolutional layer?",
        options: [
            "The final output prediction of the entire network.",
            "A small matrix of learnable weights that slides over the input image to detect a specific feature.",
            "The downsampled image produced by a pooling layer.",
            "The activation function used after the convolution operation."
        ],
        answer: "A small matrix of learnable weights that slides over the input image to detect a specific feature.",
        explanation: "This is the correct definition. Each filter learns to become a detector for a particular pattern (like a vertical line or a specific texture)."
    },
    {
        question: "In a typical CNN architecture, what is the role of the 'Classifier Head'?",
        options: [
            "To extract low-level features like edges and corners from the raw input image.",
            "To take the high-level features learned by the convolutional base and perform the final classification.",
            "To reduce the spatial dimensions of the feature maps.",
            "To normalize the pixel values of the input image to be between 0 and 1."
        ],
        answer: "To take the high-level features learned by the convolutional base and perform the final classification.",
        explanation: "This is correct. After the convolutional layers have extracted meaningful features, the classifier head (a standard MLP) uses these features to make the final prediction."
    },
    {
        question: "In the lab, the input data for the CIFAR-10 dataset had a shape of (num_samples, 32, 32, 3). What does the '3' represent?",
        options: [
            "The three types of layers in the network: Conv, Pool, and Dense.",
            "The three primary colors: Red, Green, and Blue (RGB color channels).",
            "The model can only make three predictions.",
            "The kernel size used in the first convolutional layer."
        ],
        answer: "The three primary colors: Red, Green, and Blue (RGB color channels).",
        explanation: "This is correct. Unlike the grayscale Fashion MNIST dataset (which had one channel), CIFAR-10 consists of color images, which are represented by three channels."
    },
    {
        question: "What is the key advantage of **parameter sharing** in convolutional layers?",
        options: [
            "It allows the model to only classify one object at a time.",
            "It dramatically reduces the total number of learnable parameters in the network, making it more efficient.",
            "It forces every layer to share the exact same weights, preventing any learning.",
            "It ensures that the model can only be trained on square images."
        ],
        answer: "It dramatically reduces the total number of learnable parameters in the network, making it more efficient.",
        explanation: "This is the core benefit. The same small filter (e.g., 3x3 with 9 weights) is used across the entire image, drastically reducing the number of parameters compared to an MLP where every input pixel would need a unique weight."
    },
    {
        question: "Which layer is responsible for converting the final 3D feature maps from the convolutional base into a 1D vector that can be fed to the dense classifier head?",
        options: [
            "The MaxPooling2D layer",
            "The Conv2D layer",
            "The Flatten layer",
            "The Softmax layer"
        ],
        answer: "The Flatten layer",
        explanation: "This is the precise role of the Flatten layer. It takes the final block of feature maps and unrolls it into a single long vector, acting as the bridge between the convolutional base and the classifier."
    },
    {
        question: "A typical pattern in the convolutional base of a CNN is `CONV -> RELU -> POOL`. Why is the ReLU activation function applied after the convolution?",
        options: [
            "To introduce non-linearity into the model, allowing it to learn more complex features.",
            "To increase the number of channels in the feature map.",
            "To reduce the spatial dimensions of the feature map.",
            "To convert the image to grayscale."
        ],
        answer: "To introduce non-linearity into the model, allowing it to learn more complex features.",
        explanation: "This is correct. Without a non-linear activation function like ReLU, stacking multiple convolutional layers would be mathematically equivalent to just a single convolutional layer, preventing the network from learning complex, hierarchical patterns."
    }
];

export default week8Questions;
import week2Questions from "./week2";

const week1Questions = [
    {
        question:
            "According to the lecture notes, what is the primary goal of the field of Artificial Intelligence?",
        options: [
            "To create computers that can think exactly like humans.",
            "To build systems that can perform tasks normally requiring human intelligence.",
            "To replace all human jobs with robots.",
            "To make computers and hardware faster."
        ],
        answer: "To build systems that can perform tasks normally requiring human intelligence.",
        explanation:
            "The academically accepted definition provided states that AI is concerned with creating systems to perform tasks like learning, reasoning, and problem-solving that usually require human intelligence."
    },
    {
        question:
            "An AI system that excels at one specific task, such as playing chess or recommending movies, but cannot perform tasks outside of that domain, is classified as:",
        options: [
            "Artificial General Intelligence (AGI)",
            "Artificial Superintelligence (ASI)",
            "Artificial Narrow Intelligence (ANI)",
            "Self-Aware AI"
        ],
        answer: "Artificial Narrow Intelligence (ANI)",
        explanation:
            "ANI, or Narrow AI, is defined as AI that specializes in one task only. Most of the AI we use today, like chatbots and recommendation engines, falls into this category."
    },
    {
        question:
            "IBM's Deep Blue chess computer evaluates the current board and makes a move without any memory of past games. This is a classic example of which AI functionality category?",
        options: [
            "Limited Memory",
            "Theory of Mind",
            "Reactive Machines",
            "Self-Aware AI"
        ],
        answer: "Reactive Machines",
        explanation:
            "Reactive Machines are the most basic AI type. They act purely based on the present situation and have no memory of the past, as described in the example of Deep Blue."
    },
    {
        question:
            "An AI agent learns to master a complex video game by performing actions and receiving digital rewards for success and penalties for failure. What is this trial-and-error learning method called?",
        options: [
            "Deep Learning",
            "Reinforcement Learning",
            "Generative AI",
            "Fuzzy Logic"
        ],
        answer: "Reinforcement Learning",
        explanation:
            "Reinforcement Learning is defined as the method where an AI agent learns by trial and error, optimizing its actions to maximize a cumulative reward."
    },
    {
        question:
            "A modern car's driver-assist feature uses cameras to identify lane markings on the road and alert the driver if the car begins to drift. This is a direct application of which AI discipline?",
        options: [
            "Natural Language Processing (NLP)",
            "Computer Vision",
            "Robotics",
            "Expert Systems"
        ],
        answer: "Computer Vision",
        explanation:
            "Computer Vision is the field that trains computers to 'see' and interpret the visual world. Analyzing camera feeds to detect lane markings is a perfect example of this."
    },
    {
        question:
            "An artist uses a tool like DALL-E by typing the prompt 'a photo of an astronaut riding a horse on Mars' to create a new, original image. This AI falls under which advanced category?",
        options: [
            "Cognitive Computing",
            "Generative AI",
            "Expert Systems",
            "Machine Learning"
        ],
        answer: "Generative AI",
        explanation:
            "Generative AI is defined as the branch that focuses on creating new, original content, such as text, images, or music, based on user prompts."
    },
    {
        question:
            "Virtual assistants like Siri and Alexa can understand and respond to spoken commands. What core AI discipline is primarily responsible for this capability?",
        options: [
            "Computer Vision",
            "Robotics",
            "Natural Language Processing (NLP)",

            "Fuzzy Logic"
        ],
        answer: "Natural Language Processing (NLP)",
        explanation:
            "NLP gives computers the ability to understand, interpret, and generate human language. Speech recognition, a key part of virtual assistants, is a subfield of NLP."
    },
    {
        question:
            "A bank's AI system automatically flags a credit card transaction in a foreign country as potential fraud because it deviates from your typical spending pattern. This is a common use-case of AI in which domain?",
        options: [
            "Healthcare",
            "Transportation",
            "Entertainment & E-commerce",
            "Business & Finance"
        ],
        answer: "Business & Finance",
        explanation:
            "The 'Common Use-cases' section lists 'Fraud Detection' under the 'Business & Finance' tab, where AI learns typical patterns to spot anomalies."
    },
    {
        question:
            "Self-driving cars use data about the recent speed and position of other vehicles to inform their immediate actions. The ability to use short-lived past data places them in which AI functionality category?",
        options: [
            "Reactive Machines",
            "Limited Memory",
            "Theory of Mind",
            "Self-Aware AI"
        ],
        answer: "Limited Memory",
        explanation:
            "Limited Memory AI can look into the past to make better decisions, but the memory is not stored long-term. The example of self-driving cars observing other cars is used in the notes to describe this category."
    },
    {
        question:
            "What is the key technology that powers deep learning, inspired by the structure of the human brain and composed of interconnected nodes?",
        options: [
            "Fuzzy Logic systems",
            "If-then rule engines",
            "Artificial Neural Networks",
            "Reactive Machines"
        ],
        answer: "Artificial Neural Networks",
        explanation:
            "The notes define Neural Networks as computing systems inspired by the brain, made of interconnected 'neurons,' and state they are the fundamental structure behind deep learning."
    }
];
export default week1Questions;
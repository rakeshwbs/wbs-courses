const week6Questions = [
    {
        "question": "In the context of measurement, what does 'reliability' refer to?",
        "options": [
            "The accuracy of the measurement.",
            "The consistency and stability of the measurement.",
            "The complexity of the measurement tool.",
            "The popularity of the measurement scale."
        ],
        "answer": "The consistency and stability of the measurement.",
        "explanation": "Reliability is about whether a tool produces the same results under the same conditions. A reliable scale is dependable and consistent."
    },
    {
        "question": "Cronbach's Alpha (α) is a statistic used to measure what?",
        "options": [
            "The average score of a scale.",
            "The correlation between two different variables.",
            "The internal consistency of a multi-item scale.",
            "The statistical significance of the results."
        ],
        "answer": "The internal consistency of a multi-item scale.",
        "explanation": "Cronbach's Alpha assesses how closely related a set of items are as a group, checking if they are all consistently measuring the same underlying construct."
    },
    {
        "question": "What is the generally accepted rule of thumb for a minimum acceptable Cronbach's Alpha value in research?",
        "options": [
            "α > 0.50",
            "α > 0.70",
            "α > 0.95",
            "α < 0.20"
        ],
        "answer": "α > 0.70",
        "explanation": "A value of 0.70 or higher is typically considered to indicate acceptable reliability, meaning the items on the scale are consistently measuring the same thing."
    },
    {
        "question": "Which of the following is the highest level of measurement, featuring a true, meaningful zero?",
        "options": [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
        ],
        "answer": "Ratio",
        "explanation": "Ratio scales have all the properties of interval scales but also have a true zero point, which allows for meaningful ratio comparisons (e.g., 'twice as old')."
    },
    {
        "question": "A survey question asks respondents to rank their favorite brands of soda (1st, 2nd, 3rd). This is an example of what level of measurement?",
        "options": [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
        ],
        "answer": "Ordinal",
        "explanation": "This is an Ordinal scale because there is a clear rank order (1st is better than 2nd), but the 'distance' in preference between 1st and 2nd may not be the same as between 2nd and 3rd."
    },
    {
        "question": "When interpreting SPSS output for a reliability analysis, what does the 'Cronbach's Alpha if Item Deleted' column tell you?",
        "options": [
            "Which item is the most popular.",
            "The new overall alpha value if you remove a specific item from the scale.",
            "The average score for each item.",
            "Whether the item is statistically significant."
        ],
        "answer": "The new overall alpha value if you remove a specific item from the scale.",
        "explanation": "This column is crucial for identifying 'bad' items. If removing an item causes the overall alpha to increase, that item is likely not consistent with the rest of the scale."
    },
    {
        "question": "A survey question that asks respondents to rate their agreement with a statement from 'Strongly Disagree' to 'Strongly Agree' is an example of a...?",
        "options": [
            "Nominal Scale",
            "Ratio Scale",
            "Likert Scale",
            "Semantic Differential Scale"
        ],
        "answer": "Likert Scale",
        "explanation": "The Likert scale is one of the most common scaling techniques, used to measure attitudes by asking respondents to rate their level of agreement with a statement."
    },
    {
        "question": "What is the key difference between an Interval scale and a Ratio scale?",
        "options": [
            "An Interval scale has no order.",
            "A Ratio scale has no order.",
            "An Interval scale has a true, meaningful zero.",
            "A Ratio scale has a true, meaningful zero."
        ],
        "answer": "A Ratio scale has a true, meaningful zero.",
        "explanation": "The presence of a true zero (representing a complete absence of the variable) is the defining feature that distinguishes a Ratio scale (e.g., height, weight) from an Interval scale (e.g., temperature in Celsius)."
    },
    {
        "question": "The survey question 'Do you think our company's products are high quality and affordable?' is a poor question because it is a...",
        "options": [
            "Leading question",
            "Double-barreled question",
            "Nominal question",
            "Ratio question"
        ],
        "answer": "Double-barreled question",
        "explanation": "This question is asking about two separate concepts (quality and affordability) at once. A respondent might think the products are high quality but not affordable, making it impossible to give a single valid answer."
    },
    {
        "question": "A variable representing a person's country of origin would be measured on what scale?",
        "options": [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
        ],
        "answer": "Nominal",
        "explanation": "This is a Nominal scale because the categories (e.g., USA, Germany, Japan) are just labels with no inherent rank or order."
    }
];

export default week6Questions;
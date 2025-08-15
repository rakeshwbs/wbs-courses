const week9Questions = [
    {
        "question": "In hypothesis testing, what does the p-value represent?",
        "options": [
            "The probability that the alternative hypothesis is true.",
            "The probability of observing your result (or something more extreme) if the null hypothesis were true.",
            "The statistical power of the test.",
            "The size of the sample."
        ],
        "answer": "The probability of observing your result (or something more extreme) if the null hypothesis were true.",
        "explanation": "The p-value is the probability of a 'fluke.' A small p-value indicates that your observed data is very unlikely if there's no real effect, leading you to reject the null hypothesis."
    },
    {
        "question": "Using the standard alpha level of 0.05, a p-value of 0.03 would lead a researcher to what conclusion?",
        "options": [
            "Fail to reject the null hypothesis because the result is not significant.",
            "Reject the null hypothesis because the result is statistically significant.",
            "Accept the null hypothesis as proven true.",
            "Redo the experiment because the p-value is too low."
        ],
        "answer": "Reject the null hypothesis because the result is statistically significant.",
        "explanation": "Since the p-value (0.03) is less than or equal to the alpha level (0.05), the result is considered statistically significant, and we reject the null hypothesis."
    },
    {
        "question": "Which statistical test is most appropriate for comparing the average test scores of two completely different groups of students (e.g., Group A vs. Group B)?",
        "options": [
            "Paired-Samples t-Test",
            "Independent-Samples t-Test",
            "Chi-Square Test",
            "Cronbach's Alpha"
        ],
        "answer": "Independent-Samples t-Test",
        "explanation": "The Independent-Samples t-Test is specifically designed to compare the means of two independent, unrelated groups."
    },
    {
        "question": "A researcher wants to know if a new diet plan is effective. They measure the weight of 50 people before and after the 3-month diet. Which test should they use?",
        "options": [
            "Independent-Samples t-Test",
            "Chi-Square Test",
            "Descriptive Statistics",
            "Paired-Samples t-Test"
        ],
        "answer": "Paired-Samples t-Test",
        "explanation": "The Paired-Samples t-Test is used when you have two related measurements for the same group of subjects, such as in a pre-test/post-test design."
    },
    {
        "question": "The Chi-Square (χ²) Test of Independence is used to determine if there is a significant association between...",
        "options": [
            "Two continuous variables.",
            "Two categorical variables.",
            "The mean and the standard deviation.",
            "A sample and a population."
        ],
        "answer": "Two categorical variables.",
        "explanation": "The Chi-Square test is used for categorical (nominal or ordinal) data to see if the distribution of one variable is dependent on the distribution of the other."
    },
    {
        "question": "If a statistical test yields a p-value of 0.24, what is the correct course of action for the researcher?",
        "options": [
            "Reject the null hypothesis.",
            "Conclude the alternative hypothesis is true.",
            "Fail to reject the null hypothesis.",
            "Claim the result is highly significant."
        ],
        "answer": "Fail to reject the null hypothesis.",
        "explanation": "Since the p-value (0.24) is greater than the standard alpha of 0.05, the result is not statistically significant. This means we lack sufficient evidence to reject the null hypothesis."
    },
    {
        "question": "What does it mean to 'reject the null hypothesis'?",
        "options": [
            "You have proven the null hypothesis is false.",
            "You have found that the results were due to random chance.",
            "You have found enough statistical evidence to support your alternative hypothesis.",
            "You need to collect more data."
        ],
        "answer": "You have found enough statistical evidence to support your alternative hypothesis.",
        "explanation": "Rejecting the null means the p-value was low enough to conclude that the observed effect is unlikely to be a fluke, thus lending support to the idea that a real effect exists (the alternative hypothesis)."
    },
    {
        "question": "A researcher wants to know if there is an association between a person's favorite movie genre (Action, Comedy, Drama) and their preferred snack (Popcorn, Candy, Nachos). Which test is appropriate?",
        "options": [
            "Paired-Samples t-Test",
            "Independent-Samples t-Test",
            "Chi-Square Test",
            "Cronbach's Alpha"
        ],
        "answer": "Chi-Square Test",
        "explanation": "Since both variables ('Movie Genre' and 'Snack Preference') are categorical, the Chi-Square test is the correct choice to see if they are associated."
    },
    {
        "question": "In an Independent-Samples t-Test, the 'Grouping Variable' in SPSS refers to the...",
        "options": [
            "Dependent Variable (the outcome).",
            "Independent Variable (the variable that defines the two groups).",
            "p-value.",
            "Standard deviation."
        ],
        "answer": "Independent Variable (the variable that defines the two groups).",
        "explanation": "The Grouping Variable is the categorical variable that splits the data into the two independent groups you want to compare."
    },
    {
        "question": "Inferential statistics allow a researcher to...",
        "options": [
            "Only describe the characteristics of the sample.",
            "Use data from a sample to draw conclusions about a larger population.",
            "Create histograms and bar charts.",
            "Calculate the mean, median, and mode of the sample."
        ],
        "answer": "Use data from a sample to draw conclusions about a larger population.",
        "explanation": "The key purpose of inferential statistics is to 'infer'—to make an educated guess or conclusion about the population based on the evidence collected from a smaller sample."
    }
];

export default week9Questions;
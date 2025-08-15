const week10Questions = [
    {
        "question": "What is the primary purpose of a One-Way ANOVA?",
        "options": [
            "To compare the means of two related groups.",
            "To compare the means of three or more independent groups.",
            "To predict an outcome from a single continuous variable.",
            "To test the association between two categorical variables."
        ],
        "answer": "To compare the means of three or more independent groups.",
        "explanation": "ANOVA (Analysis of Variance) is an extension of the t-test used specifically when you want to compare the average scores of three or more groups simultaneously."
    },
    {
        "question": "Why is it generally better to use ANOVA instead of running multiple t-tests to compare three or more groups?",
        "options": [
            "ANOVA is faster to calculate by hand.",
            "Multiple t-tests increase the risk of a Type I error (a false positive).",
            "t-tests cannot compare means.",
            "ANOVA requires a smaller sample size."
        ],
        "answer": "Multiple t-tests increase the risk of a Type I error (a false positive).",
        "explanation": "Each t-test has a 5% chance of a false positive. Performing multiple tests compounds this risk, making it more likely you'll find a 'significant' difference just by chance. ANOVA avoids this by using a single test."
    },
    {
        "question": "If a One-Way ANOVA test yields a statistically significant result (p ≤ .05), what does this tell the researcher?",
        "options": [
            "All groups are significantly different from each other.",
            "The first group is significantly different from the last group.",
            "At least one group mean is significantly different from at least one other group mean.",
            "The null hypothesis is true."
        ],
        "answer": "At least one group mean is significantly different from at least one other group mean.",
        "explanation": "A significant ANOVA result is an 'omnibus' test. It tells you there's a difference somewhere among the groups, but it doesn't specify which particular groups differ."
    },
    {
        "question": "After finding a significant result in an ANOVA, what is the purpose of running a 'Post-Hoc Test' like Tukey's HSD?",
        "options": [
            "To re-check the p-value of the ANOVA.",
            "To determine which specific groups are significantly different from each other.",
            "To calculate the R-squared value.",
            "To test the reliability of the measurement scale."
        ],
        "answer": "To determine which specific groups are significantly different from each other.",
        "explanation": "Post-hoc tests are follow-up tests that perform pairwise comparisons (e.g., Group A vs. B, A vs. C, B vs. C) to pinpoint exactly where the significant differences lie."
    },
    {
        "question": "The primary goal of Simple Linear Regression is to...",
        "options": [
            "Compare the means of different groups.",
            "Test for an association between categorical variables.",
            "Model the relationship between two continuous variables to make predictions.",
            "Check the internal consistency of a scale."
        ],
        "answer": "Model the relationship between two continuous variables to make predictions.",
        "explanation": "Regression is a predictive tool. It finds the 'line of best fit' to describe how one variable can be used to predict another."
    },
    {
        "question": "In a regression analysis, an R-squared (R²) value of 0.72 means what?",
        "options": [
            "The correlation between the variables is 0.72.",
            "The result is not statistically significant.",
            "72% of the variance in the dependent variable can be explained by the independent variable.",
            "The slope of the regression line is 0.72."
        ],
        "answer": "72% of the variance in the dependent variable can be explained by the independent variable.",
        "explanation": "R-squared is a measure of the 'goodness of fit' of the model. It represents the proportion of the dependent variable's variability that can be accounted for by the model."
    },
    {
        "question": "In the regression equation Y = b₀ + b₁X, what does the b₁ coefficient represent?",
        "options": [
            "The predicted value of Y when X is 0 (the intercept).",
            "The p-value of the model.",
            "The change in Y for a one-unit change in X (the slope).",
            "The R-squared value."
        ],
        "answer": "The change in Y for a one-unit change in X (the slope).",
        "explanation": "The slope (b₁) is a crucial part of the equation, as it quantifies the nature and magnitude of the relationship between the two variables."
    },
    {
        "question": "A researcher wants to know if there is a difference in the average job satisfaction scores among employees in three different departments (Sales, Marketing, HR). Which test is most appropriate?",
        "options": [
            "Simple Linear Regression",
            "Chi-Square Test",
            "Paired-Samples t-Test",
            "One-Way ANOVA"
        ],
        "answer": "One-Way ANOVA",
        "explanation": "This question involves comparing the mean of a continuous variable (satisfaction score) across three independent groups (the departments), which is the exact purpose of a One-Way ANOVA."
    },
    {
        "question": "A real estate agent wants to see if they can predict a house's price (in dollars) based on its size (in square feet). Which analysis should they use?",
        "options": [
            "One-Way ANOVA",
            "Simple Linear Regression",
            "Chi-Square Test",
            "Independent-Samples t-Test"
        ],
        "answer": "Simple Linear Regression",
        "explanation": "This involves testing the relationship between two continuous variables (price and size) with the goal of prediction, which is the exact purpose of regression."
    },
    {
        "question": "What is the F-statistic in ANOVA used for?",
        "options": [
            "To calculate the R-squared value.",
            "To compare the variance between groups to the variance within groups.",
            "To determine the slope of a line.",
            "To measure the correlation between variables."
        ],
        "answer": "To compare the variance between groups to the variance within groups.",
        "explanation": "The F-statistic, or F-ratio, is the core calculation in ANOVA. A large F-value suggests that the variation between groups is much larger than the variation within them, indicating a significant difference."
    }
];

export default week10Questions;
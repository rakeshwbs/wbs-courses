const week8Questions = [
    {
        "question": "Which branch of statistics is used to summarize and describe the main features of a dataset?",
        "options": [
            "Inferential Statistics",
            "Descriptive Statistics",
            "Predictive Statistics",
            "Population Statistics"
        ],
        "answer": "Descriptive Statistics",
        "explanation": "Descriptive statistics focuses on describing and summarizing the sample data you have, using measures like mean, median, and standard deviation."
    },
    {
        "question": "Which measure of central tendency is most sensitive to extreme values or outliers?",
        "options": [
            "Mode",
            "Median",
            "Mean",
            "Range"
        ],
        "answer": "Mean",
        "explanation": "Because the mean is calculated using every value in the dataset, a single very high or very low value (an outlier) can significantly pull the average up or down."
    },
    {
        "question": "A researcher has a dataset of salaries. What does a low standard deviation indicate?",
        "options": [
            "The salaries are all very high.",
            "The salaries are spread out over a very wide range.",
            "The salaries tend to be clustered closely around the average salary.",
            "The dataset contains many errors."
        ],
        "answer": "The salaries tend to be clustered closely around the average salary.",
        "explanation": "A low standard deviation signifies low variability, meaning most data points are not far from the mean. The salaries are consistent."
    },
    {
        "question": "What is the median of a dataset?",
        "options": [
            "The most frequently occurring value.",
            "The average of all values.",
            "The middle value when the data is ordered from smallest to largest.",
            "The difference between the highest and lowest value."
        ],
        "answer": "The middle value when the data is ordered from smallest to largest.",
        "explanation": "The median is the physical midpoint of the data, making it a robust measure that is not affected by outliers."
    },
    {
        "question": "Which type of chart is most appropriate for visualizing the frequency distribution of a single continuous (Scale) variable, like age or income?",
        "options": [
            "Bar Chart",
            "Pie Chart",
            "Histogram",
            "Scatter Plot"
        ],
        "answer": "Histogram",
        "explanation": "Histograms are designed to show the shape of a continuous variable's distribution by grouping values into bins and displaying the frequency of each bin."
    },
    {
        "question": "The 'mode' is the only measure of central tendency that can be meaningfully used for which type of data?",
        "options": [
            "Nominal Data",
            "Ratio Data",
            "Interval Data",
            "Scale Data"
        ],
        "answer": "Nominal Data",
        "explanation": "For categorical data like favorite color or department, you cannot calculate a mean or median, but you can identify the most frequent category (the mode)."
    },
    {
        "question": "What is the relationship between Variance and Standard Deviation?",
        "options": [
            "They are the same thing.",
            "Variance is the square root of the Standard Deviation.",
            "Standard Deviation is the square root of the Variance.",
            "Variance is only used for nominal data."
        ],
        "answer": "Standard Deviation is the square root of the Variance.",
        "explanation": "Variance (s²) is calculated first, but because its units are squared, we take the square root to get the Standard Deviation (s), which is more easily interpreted."
    },
    {
        "question": "Which chart is most appropriate for comparing the number of employees across different departments (a categorical variable)?",
        "options": [
            "Histogram",
            "Bar Chart",
            "Normal Curve",
            "Scatter Plot"
        ],
        "answer": "Bar Chart",
        "explanation": "Bar charts are ideal for displaying and comparing the frequencies or counts of distinct categories."
    },
    {
        "question": "When running the 'Frequencies' command in SPSS for a continuous variable like 'Age', why is it often recommended to uncheck 'Display frequency tables'?",
        "options": [
            "Because it makes SPSS run faster.",
            "Because the table is usually too long and not very informative, as each age might appear only once.",
            "Because SPSS cannot create frequency tables for continuous variables.",
            "Because it prevents you from getting charts."
        ],
        "answer": "Because the table is usually too long and not very informative, as each age might appear only once.",
        "explanation": "For continuous data, a long list of every single value and its frequency (often just '1') is not a useful summary. The descriptive statistics table and histogram are much more valuable."
    },
    {
        "question": "The standard deviation is a measure of the...",
        "options": [
            "most common value in a dataset.",
            "average value of a dataset.",
            "total range of a dataset.",
            "average distance of each data point from the mean."
        ],
        "answer": "average distance of each data point from the mean.",
        "explanation": "This is the core definition of standard deviation. It quantifies the typical amount of spread or variability in the data."
    }
];

export default week8Questions;
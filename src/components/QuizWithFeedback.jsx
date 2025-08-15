import React, { useState } from 'react';
import './QuizWithFeedback.css';

/* Inline, theme-aware SVG icon set (no external assets).
   Pass one of: 'ml' | 'nlp' | 'cv' | 'robotics' | 'ethics' | 'code' | undefined */
const QIcon = ({ type = 'default' }) => {
    const svgProps = {
        width: 64,
        height: 64,
        viewBox: '0 0 48 48',
        role: 'img',
        'aria-label': `${type} illustration`,
        className: 'quiz-illust-svg',
    };

    switch (type) {
        case 'ml': // Machine Learning: nodes + edges
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="4"/><circle cx="36" cy="12" r="4"/>
                        <circle cx="12" cy="36" r="4"/><circle cx="36" cy="36" r="4"/>
                        <circle cx="24" cy="24" r="4"/>
                        <path d="M16 12h16M12 16v16M36 16v16M16 36h16M14 14l8 8M34 14l-8 8M14 34l8-8M34 34l-8-8"/>
                    </g>
                </svg>
            );
        case 'nlp': // NLP: bubbles
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 10h22a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H20l-8 6v-6h-4a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6z"/>
                        <path d="M28 28h8a6 6 0 0 0 6-6v-2"/>
                        <circle cx="16" cy="20" r="1.4"/><circle cx="22" cy="20" r="1.4"/><circle cx="28" cy="20" r="1.4"/>
                    </g>
                </svg>
            );
        case 'cv': // Computer Vision: lens
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="10" width="36" height="28" rx="6"/>
                        <circle cx="24" cy="24" r="9"/>
                        <path d="M24 15v18M15 24h18M18.5 18.5l11 11M29.5 18.5l-11 11"/>
                    </g>
                </svg>
            );
        case 'robotics': // robot head
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="10" y="14" width="28" height="22" rx="4"/>
                        <circle cx="18" cy="24" r="3"/><circle cx="30" cy="24" r="3"/>
                        <path d="M24 14V8M24 8l3-3M24 8l-3-3M14 34h20"/>
                    </g>
                </svg>
            );
        case 'ethics': // scales
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M24 8v28M14 14h20"/>
                        <path d="M14 14l-6 10h12l-6-10zM34 14l-6 10h12l-6-10z"/>
                        <path d="M10 24a6 3 0 0 0 12 0M30 24a6 3 0 0 0 12 0"/>
                        <path d="M18 36h12"/>
                    </g>
                </svg>
            );
        case 'code': // angle brackets
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10l-10 14 10 14M30 10l10 14-10 14"/>
                    </g>
                </svg>
            );
        default: // framed question mark
            return (
                <svg {...svgProps}>
                    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="24" cy="24" r="18"/>
                        <path d="M18.5 20a5.5 5.5 0 0 1 11 0c0 5-5.5 4.5-5.5 9"/>
                        <circle cx="24" cy="34" r="1.6"/>
                    </g>
                </svg>
            );
    }
};

export default function QuizWithFeedback({ questions }) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);
    const [results, setResults] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (option) => {
        if (selected !== null) return;

        setSelected(option);
        const isCorrect = option === questions[current].answer;
        const explanation = questions[current].explanation;

        if (isCorrect) {
            setScore(score + 1);
            setFeedback('✅ Correct: ' + explanation);
        } else {
            setFeedback(`❌ Incorrect. ${explanation}`);
        }

        setResults((prev) => [
            ...prev,
            {
                question: questions[current].question,
                selected: option,
                correct: questions[current].answer,
                result: isCorrect ? 'Correct' : 'Incorrect',
            },
        ]);
    };

    const handleNext = () => {
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
            setFeedback('');
        } else {
            setShowResult(true);
        }
    };

    const downloadResults = () => {
        const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quiz-results.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div
            className="quiz-container"
            style={{ '--q-progress': `${((current + 1) / questions.length) * 100}%` }}
        >
            {!showResult ? (
                <div>
                    <div className="quiz-progress">
                        Question {current + 1} of {questions.length} — Score: {score}
                    </div>

                    <div className="quiz-header">
                        <div className="quiz-illust" aria-hidden="true">
                            <QIcon type={questions[current].type} />
                        </div>
                        <div className="quiz-title-wrap">
                            <div className="quiz-meta">
                                {questions[current].topic && <span className="q-chip">{questions[current].topic}</span>}
                                {questions[current].difficulty && (
                                    <span className={`q-chip q-${String(questions[current].difficulty).toLowerCase()}`}>
          {questions[current].difficulty}
        </span>
                                )}
                            </div>
                            <h3 className="quiz-question">{questions[current].question}</h3>
                        </div>
                    </div>


                    <ul className="quiz-options">
                        {questions[current].options.map((option, idx) => (
                            <li key={idx}>
                                <button
                                    className={`quiz-button ${
                                        selected === option
                                            ? option === questions[current].answer
                                                ? 'correct'
                                                : 'incorrect'
                                            : ''
                                    }`}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={selected !== null}
                                >
                                    <span className="sr-only">{String.fromCharCode(65 + idx)}. </span>{option}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {feedback && <div className="quiz-feedback">{feedback}</div>}

                    {selected && (
                        <button className="quiz-next" onClick={handleNext}>
                            {current + 1 === questions.length ? 'Finish' : 'Next'}
                        </button>
                    )}
                </div>
            ) : (
                <div className="quiz-result">
                    <h2>Quiz Completed</h2>
                    <p>
                        Your Score: <strong>{score} / {questions.length}</strong>
                    </p>
                    <button onClick={downloadResults} className="quiz-download">
                        Download Results
                    </button>
                </div>
            )}
        </div>
    );
}

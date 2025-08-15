import React from 'react';
import './RecipeCard.css'; // We'll create the styling next

export default function RecipeCard({
                                       title,
                                       description,
                                       prerequisites,
                                       steps,
                                       result,
                                   }) {
    return (
        <div className="recipe-card">
            <div className="recipe-card-header">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="recipe-card-body">
                {prerequisites && (
                    <div className="recipe-section">
                        <h3> Layer</h3>
                        <ul>
                            {prerequisites.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {steps && (
                    <div className="recipe-section">
                        <h3> Description</h3>
                        <ol>
                            {steps.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>

            {result && (
                <div className="recipe-card-footer">
                    <h3> Note</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}
// src/components/DefinitionBox.js
import React from 'react';
import './DefinitionBox.css'; // We'll create this next

export default function DefinitionBox({ term, children }) {
    return (
        <div className="definition-box">
            <div className="definition-box-title">
                {/* We use an SVG icon for a sharper, more modern look */}
                <svg
                    className="definition-box-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
                {term}
            </div>
            <div className="definition-box-content">{children}</div>
        </div>
    );
}
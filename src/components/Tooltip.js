import React from 'react';
import './Tooltip.css'; // We'll create the styling next

/**
 * A component that shows a tooltip on hover.
 * @param {React.ReactNode} children - The text that will trigger the tooltip.
 * @param {string} text - The content to display inside the tooltip.
 */
export default function Tooltip({ children, text }) {
    return (
        <span className="tooltip-container">
      {children}
            <span className="tooltip-text">{text}</span>
    </span>
    );
}
import React, { useState } from 'react';
import './Accordion.css'; // We'll create this CSS file next

// This is the component for a single accordion item
function AccordionItem({ title, children }) {
    // 'useState' hook to keep track of whether the item is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state when the title is clicked
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            {/* The clickable header. Note the 'aria-expanded' for accessibility. */}
            <button
                className="accordion-title"
                onClick={handleToggle}
                aria-expanded={isOpen}
            >
                {/* The '+' or '-' icon changes based on the 'isOpen' state */}
                <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
                {title}
            </button>

            {/* The content is only rendered if 'isOpen' is true */}
            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
}

// This is the main component that you will use in your MDX files
export default function Accordion({ items }) {
    return (
        <div className="accordion-container">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
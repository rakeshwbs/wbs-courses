import React from 'react';
// Import the specific Bootstrap component you want to use
import Alert from 'react-bootstrap/Alert';

// This component will accept a 'variant' prop (e.g., 'success', 'warning')
// and a 'children' prop for the content.
export default function BootstrapAlert({ variant = 'primary', children }) {
    return (
        <Alert variant={variant} className="mt-4 mb-4">
            {children}
        </Alert>
    );
}
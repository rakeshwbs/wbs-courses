import React from 'react';
import styles from './CenteredImage.module.css'; // Import the CSS Module

export default function CenteredImage({ src, alt, width }) {
    // Inline style for dynamic width
    const imageStyle = {
        width: width || 'auto',
    };

    return (
        <div className={styles.container}>
            <img
                src={src}
                alt={alt}
                style={imageStyle}
                className={styles.image} // Apply styles from the CSS module
            />
        </div>
    );
}
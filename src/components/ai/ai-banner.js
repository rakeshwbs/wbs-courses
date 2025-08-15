import React from 'react';
import styles from '../Banner.module.css';

function AiBanner() {
    return (
        <div className={styles.bannerContainer}>
            <img
                src="/img/banners/AI-Banner.png"
                alt="AI Banner"
                className={styles.bannerImage}
            />
        </div>
    );
}

export default AiBanner;

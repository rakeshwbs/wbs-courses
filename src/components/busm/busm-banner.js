// src/components/busm-banner.js

import React from 'react';
import styles from '../Banner.module.css'; // You could create a separate CSS module if needed.

function BusmBanner() {
    return (
        <div className={styles.bannerContainer}>
            <img
                src="/img/banners/BUSM-Banner.png" // Use the path to your DSA image
                alt="BRM Banner"
                className={styles.bannerImage}
            />
        </div>
    );
}

export default BusmBanner;
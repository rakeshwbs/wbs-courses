import React from 'react';
import styles from '../Banner.module.css';

function ArtBanner() {
    return (
        <div className={styles.bannerContainer}>
            <img
                src="/img/banners/ART-Banner.png"
                alt="ART Banner"
                className={styles.bannerImage}
            />
        </div>
    );
}

export default ArtBanner;

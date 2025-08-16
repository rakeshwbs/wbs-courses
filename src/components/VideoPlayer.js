// src/components/VideoPlayer.js
import React, { useState } from 'react';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ videoId, title }) {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (showVideo) {
    return (
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className={styles.thumbnailContainer}
      onClick={() => setShowVideo(true)}
      style={{ backgroundImage: `url(${thumbnailUrl})` }}
    >
      <div className={styles.playButton}></div>
    </div>
  );
}

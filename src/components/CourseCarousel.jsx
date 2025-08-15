// src/components/CourseCarousel.js

import React from 'react';
import Link from '@docusaurus/Link';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles. This is crucial.
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const courses = [
    {
        title: 'Artificial Intelligence',
        author: 'Rakesh Sonea',
        href: '/ai/module-description',
        img: '/img/module-cards/ai-card.png',
        subtitle: "Don't just use it, create!",
    },
    {
        title: 'Data Structure & Algorithms',
        author: 'Rakesh Sonea',
        href: '/dsa/module-description',
        img: '/img/module-cards/dsa-card.png',
        subtitle: 'Learning Algorithms',
    },
    {
        title: 'Business Research Methodology',
        author: 'Rakesh Sonea',
        href: '/brm/module-description',
        img: '/img/module-cards/brm-card.png',
        subtitle: 'Prepare yourself for Research',
    },
    {
        title: 'Business Mathematics',
        author: 'Rakesh Sonea',
        href: '/busm/module-description',
        img: '/img/module-cards/busm-card.png',
        subtitle: 'Learn Maths',
    },
    {
        title: 'Advanced Routing Techniques',
        author: 'Rakesh Sonea',
        href: '/art/module-description',
        img: '/img/module-cards/art-card.png',
        subtitle: 'Without Routing - No Internet',
    },

];

export default function CourseCarousel() {
    return (
        // The container now just holds the Swiper component
        <div className="container" style={{padding: '2rem 0'}}>
            <Swiper
                // --- Essential Modules ---
                modules={[Grid, Navigation, Pagination]}

                // --- Core Carousel Settings ---
                // This creates the 2-row layout
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                spaceBetween={30} // Space between cards
                navigation={true} // Enables Next/Prev arrows
                pagination={{ clickable: true }} // Enables clickable dots

                // --- Responsive Breakpoints ---
                // This makes the carousel adapt to screen sizes
                breakpoints={{
                    // For mobile screens
                    320: {
                        slidesPerView: 1, // 1 column
                        slidesPerGroup: 1, // Move 1 column at a time
                        grid: { rows: 2, fill: 'row' },
                    },
                    // For tablet screens
                    768: {
                        slidesPerView: 2, // 2 columns
                        slidesPerGroup: 2,
                        grid: { rows: 2, fill: 'row' },
                    },
                    // For desktop screens
                    1024: {
                        slidesPerView: 3, // 3 columns
                        slidesPerGroup: 3,
                        grid: { rows: 2, fill: 'row' },
                    },
                }}

                // Add a class for custom styling if needed
                className="course-swiper"
            >
                {/* Your original mapping logic is placed inside Swiper */}
                {courses.map((c) => (
                    // Each item must be wrapped in a SwiperSlide component
                    <SwiperSlide key={c.title}>
                        <article className="card card--full-height">
                            <Link to={c.href} className="carousel__link">
                                <div className="card__image">
                                    <img src={c.img} alt={c.title} loading="lazy" />
                                </div>
                                {/* --- ADD THIS NEW ELEMENT --- */}
                                <div className="card__overlay-text">View Module →</div>
                                {/* --------------------------- */}
                                <div className="card__body">
                                    <h4 className="margin--none">{c.title}</h4>
                                    <p className="carousel__subtitle">{c.subtitle}</p>
                                    <p className="carousel__meta">{c.author}</p>
                                </div>
                            </Link>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
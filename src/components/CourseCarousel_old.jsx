import React, {useRef} from 'react';
import Link from '@docusaurus/Link';

const courses = [
    {
        title: 'Artificial Intelligence',
        author: 'Rakesh Sonea',
        href: '/ai/module-description',               // change to your doc/page
        img: '/img/module-cards/ai-card.png',
        subtitle: 'Don\'t just use it, create!',
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
];

export default function CourseCarousel() {
    const railRef = useRef(null);
    const scrollBy = (delta) => railRef.current?.scrollBy({left: delta, behavior: 'smooth'});

    return (
        <div className="carousel container">
            <button
                className="carousel__nav carousel__nav--prev"
                aria-label="Previous"
                onClick={() => scrollBy(-600)}
            >
                ‹
            </button>

            <div className="carousel__rail" ref={railRef}>
                {courses.map((c) => (
                    <article key={c.title} className="card carousel__card">
                        <Link to={c.href} className="carousel__link">
                            <div className="card__image">
                                <img src={c.img} alt={c.title} loading="lazy" />
                            </div>
                            <div className="card__body">
                                <h4 className="margin--none">{c.title}</h4>
                                <p className="carousel__subtitle">{c.subtitle}</p>
                                <p className="carousel__meta">{c.author}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            <button
                className="carousel__nav carousel__nav--next"
                aria-label="Next"
                onClick={() => scrollBy(600)}
            >
                ›
            </button>
        </div>
    );
}

import React from 'react';
import Layout from '@theme/Layout';
import CourseCarousel from '../components/CourseCarousel';

export default function Home() {
    return (
        <Layout title="WBS" description="Modules">
            <main>
                <section className="margin-top--xl">
                    <div className="container">
                        <h2 className="margin-bottom--lg">Modules</h2>
                    </div>
                    <CourseCarousel />
                </section>
            </main>
        </Layout>
    );
}

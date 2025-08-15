// src/components/EvaluationPage.js
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from '@docusaurus/router';

export default function EvaluationPage({
                                           // Optional overrides, but normally not required:
                                           moduleName: moduleNameProp,
                                           weekId: weekIdProp,
                                           heading = 'Quiz - Test your Knowledge',
                                           className = '',
                                       }) {
    const { pathname } = useLocation();

    // Example: /docs/dsa/topic12/evaluation-mcq  -> ["docs","dsa","topic12","evaluation-mcq"]
    const segments = useMemo(
        () => pathname.replace(/\/+$/, '').split('/').filter(Boolean),
        [pathname]
    );

    const detectedWeekId  = segments.length >= 2 ? segments[segments.length - 2] : undefined;
    const detectedModule  = segments.length >= 3 ? segments[segments.length - 3] : undefined;

    const moduleName = moduleNameProp ?? detectedModule;
    const weekId     = weekIdProp     ?? detectedWeekId;

    const [Questions, setQuestions] = useState(null);
    const [ModuleBanner, setModuleBanner] = useState(() => () => null);
    const [QuizWithFeedback, setQuizWithFeedback] = useState(() => () => null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!moduleName || !weekId) return;

        let mounted = true;

        (async () => {
            try {
                const [{ default: questions },
                    { default: Banner },
                    { default: Quiz }] = await Promise.all([
                    import(/* webpackMode: "lazy" */ `@site/src/data/quizzes/${moduleName}/${weekId}`),
                    import(/* webpackMode: "lazy" */ `@site/src/components/${moduleName}/${moduleName}-banner`),
                    import(/* webpackMode: "lazy" */ '@site/src/components/QuizWithFeedback'),
                ]);

                if (!mounted) return;
                setQuestions(questions);
                setModuleBanner(() => Banner);
                setQuizWithFeedback(() => Quiz);
            } catch (e) {
                if (mounted) setError(e);
            }
        })();

        return () => { mounted = false; };
    }, [moduleName, weekId]);

    if (!moduleName || !weekId) {
        return (
            <pre style={{ color: 'crimson', whiteSpace: 'pre-wrap' }}>
        Unable to detect module/week from the URL.
        Ensure the path is /docs/&lt;moduleName&gt;/&lt;weekId&gt;/&lt;page&gt;,
        or pass overrides: &lt;EvaluationPage moduleName="dsa" weekId="week1" /&gt;.
      </pre>
        );
    }

    if (error) {
        return (
            <pre style={{ color: 'crimson', whiteSpace: 'pre-wrap' }}>
        Failed to load assets for {moduleName}/{weekId}.
        Expected banner at: src/components/{moduleName}/{moduleName}-banner.js
        Error: {String(error)}
      </pre>
        );
    }

    if (!Questions || !QuizWithFeedback) return <div>Loading…</div>;

    return (
        <section className={className}>
            <ModuleBanner />
            <h3>{heading}</h3>
            <QuizWithFeedback questions={Questions} />
        </section>
    );
}

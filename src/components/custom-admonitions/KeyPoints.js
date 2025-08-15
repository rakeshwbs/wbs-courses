// src/components/KeyPoints.jsx
import React from "react";
import "./KeyPoints.css";

/**
 * <KeyPoints> wraps a definition list.
 * <KP term="..."> ...children... </KP> renders one item (dt + dd).
 *
 * Usage in .mdx:
 * import { KeyPoints, KP } from '@site/src/components/KeyPoints';
 * <KeyPoints variant="primary" icon="❖">
 *   <KP term="Generality and Power">Text…</KP>
 *   <KP term="Clear Engineering Objective">Text…</KP>
 *   <KP term="Scientific and Measurable">Text…</KP>
 * </KeyPoints>
 */

export function KeyPoints({ children, variant = "primary", icon = "❖" }) {
    return (
        <dl className={`key-points key-points--${variant}`} data-icon={icon}>
            {children}
        </dl>
    );
}

// Single item
export function KP({ term, children }) {
    return (
        <>
            <dt className="key-points__title">{term}</dt>
            <dd className="key-points__content">{children}</dd>
        </>
    );
}

export default KeyPoints;

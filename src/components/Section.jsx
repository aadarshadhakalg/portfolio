import React from 'react';

const Section = ({ title, children, id, bgVariant }) => {
    return (
        <section id={id} style={{
            backgroundColor: bgVariant ? 'var(--header-bg)' : 'transparent',
            borderTop: bgVariant ? '1px solid var(--border-color)' : 'none',
            borderBottom: bgVariant ? '1px solid var(--border-color)' : 'none',
        }}>
            <div style={{ marginBottom: '3rem' }}>
                <h2 className="serif" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
                    {title}
                </h2>
                <div className="hr" style={{ margin: '0.5rem 0' }}></div>
            </div>
            <div>
                {children}
            </div>
        </section>
    );
};

export default Section;

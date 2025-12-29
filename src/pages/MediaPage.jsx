import React from 'react';
import Section from '../components/Section';
import AnimationWrapper from '../components/AnimationWrapper';

const MediaPage = () => {
    const videos = [
        {
            title: "Compliance Made Easy - Aadarsha Dhakal | UbuCon Asia 2025",
            id: "xVFT_ZEFNp8"
        },
        {
            title: "Demystifying Widget Rendering in Flutter",
            id: "fx1BG-Mudko"
        },
        {
            title: "Getting started with Vim",
            id: "9e-R4zM3XhA"
        },
        {
            title: "Hangman Game using OpenGL C++",
            id: "PWmDAbPxPXE"
        }
    ];

    return (
        <AnimationWrapper delay={0.1}>
            <Section title="Media & Presentations" id="media">
                <div>
                    <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Videos</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="media-grid">
                        {videos.map((vid, idx) => (
                            <div key={idx} style={{ background: '#fff', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '1rem' }}>
                                    <iframe
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        src={`https://www.youtube.com/embed/${vid.id}`}
                                        title={vid.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h4 className="serif" style={{ fontSize: '1.2rem' }}>{vid.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @media (max-width: 768px) {
                        .media-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </Section>
        </AnimationWrapper>
    );
};

export default MediaPage;


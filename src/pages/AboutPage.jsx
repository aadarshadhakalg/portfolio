import React from 'react';
import Section from '../components/Section';
import AnimationWrapper from '../components/AnimationWrapper';

const AboutPage = () => {
    return (
        <AnimationWrapper delay={0.2}>
            <Section title="The About Side" id="about">
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap' }} className="about-header">
                    <div className="pixelated-container" style={{ flexShrink: 0 }}>
                        <img src="/avatar.jpeg" alt="Aadarsha Dhakal" className="pixelated-image" />
                        <div className="pixel-overlay"></div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                            Self-motivated Infrastructure Engineer with a strong foundation in Linux Virtualization and Cloud Orchestration. My current focus lies in building and maintaining highly available storage and compute environments using Ceph and Openstack.
                        </p>
                    </div>
                </div>
                <p className="secondary-text">
                    With a professional background in Mobile App Development (Dart/Flutter), I bring a unique "dev-first" perspective to infrastructure, focusing on automation, scalability, and developer experience. Having navigated different software companies, I've developed deep problem-solving skills and a strong commitment to work ethics. I am dedicated to architecting systems that not only serve the company but provide robust, scalable platforms for everyone.
                </p>

                <div style={{ marginTop: '4rem' }}>
                    <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Education</h3>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div>
                            <h4 className="serif" style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>Bachelor of Engineering in Computer Engineering</h4>
                            <p className="mono" style={{ textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Kathmandu University — 2019-2023</p>
                            <p className="secondary-text">Dhulikhel-4, Kavre, Nepal</p>
                        </div>
                        <div>
                            <h4 className="serif" style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>High School (+2 Science)</h4>
                            <p className="mono" style={{ textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Aroma College — 2017-2019</p>
                            <p className="secondary-text">Bharatpur 10, Chitwan, Nepal</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Achievements & Community</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                        {[
                            "Best Project: #30daysofappwrite Challenge (Dart Online Compiler)",
                            "Huawei Seeds for the Future Selection",
                            "Executive Member @ Kathmandu University Computer Club (2020/2021)",
                            "Dart Community Coordinator @ KUOSC (Led 10+ Workshops)",
                            "Coordinator @ Kathmandu University Open Source Community",
                            "Head of Technology @ KU Hackfest 2022 (MLH Hackathon)",
                            "Design Lead @ Ackuaint (Trans-disciplinary Journal)",
                            "Organizer @ Flutter Kathmandu Meetup Group",
                            "Event Manager @ IT Meet (National Level Tech Event)",
                            "Organizer @ UbuCon Asia 2025",
                            "Speaker @ Ubucon Asia 2025",
                            "Speaker @ Wordcamp Bharatpur 2025",
                            "Organizer @ CNCF Kathmandu Chapter"
                        ].map((item, idx) => (
                            <li key={idx} style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--text-secondary)' }}>—</span>
                                <span className="mono" style={{ fontSize: '0.95rem' }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <style>{`
                    @media (max-width: 768px) {
                        .about-header {
                            flex-direction: column;
                            align-items: center !important;
                            text-align: center;
                        }
                        .about-header > div:last-child {
                            flex: none !important;
                        }
                    }
                `}</style>
            </Section>
        </AnimationWrapper>
    );
};

export default AboutPage;


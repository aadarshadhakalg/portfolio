import React from 'react';
import Section from '../components/Section';
import AnimationWrapper from '../components/AnimationWrapper';

const AboutPage = () => {
    return (
        <AnimationWrapper delay={0.2}>
            <Section title="The About Side" id="about">
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap' }}>
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
            </Section>
        </AnimationWrapper>
    );
};

export default AboutPage;

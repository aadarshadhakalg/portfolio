import React from 'react';
import AnimationWrapper from './AnimationWrapper';

const Hero = () => {
    return (
        <section id="hero" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }} className="hero-avatar-container">
                <div className="pixelated-container">
                    <img
                        src="/avatar.jpeg"
                        alt="Aadarsha Dhakal"
                        className="pixelated-image"
                        width="120"
                        height="120"
                        fetchpriority="high"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className="pixel-overlay"></div>
                </div>
            </div>
            <h1 className="serif reveal-text" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '2rem' }}>
                The Infrastructure Engineer who builds resilient systems, scales virtualization, and automates hard things.
            </h1>
            <p className="secondary-text" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                Specializing in Linux Virtualization, Ceph, Proxmox, and Openstack. Previously a Mobile App Developer, now focused on architecting cloud-native infrastructure.
            </p>
            <a
                href="https://calendar.app.google/KKPeMQb2TdQyUg9q8"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
            >
                Book a time with me
            </a>

            <style>{`
                @media (max-width: 768px) {
                    #hero {
                        padding-top: 3rem !important;
                        text-align: center;
                    }
                    #hero p {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;


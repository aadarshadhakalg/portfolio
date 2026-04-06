import React from 'react';
import Hero from '../components/Hero';
import AnimationWrapper from '../components/AnimationWrapper';
import Section from '../components/Section';

const Home = () => {
    return (
        <>
            <AnimationWrapper delay={0.1}>
                <Hero />
            </AnimationWrapper>

            <AnimationWrapper delay={0.3}>
                <Section title="Engineering Philosophy" id="philosophy">
                    <div style={{ maxWidth: '800px' }}>
                        <p className="serif" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            I believe in building systems that are not just functional, but resilient and observable. 
                            Infrastructure should be treated as code, and complexity should be managed through automation.
                        </p>
                        <p className="secondary-text" style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                            Working at the intersection of virtualization and storage, I specialize in architecting clouds from the ground up. 
                            Whether it's managing petabytes of data on Ceph or orchestrating thousands of VMs on OpenStack, 
                            my focus is always on reliability, performance, and scalability. 
                            I'm passionate about open-source technologies and the communities that build them.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h4 className="mono" style={{ fontSize: '1rem', marginBottom: '0.5rem', opacity: 0.7 }}>CLOUD NATIVE</h4>
                                <p>Standardizing deployments with Kubernetes and modern orchestrators.</p>
                            </div>
                            <div>
                                <h4 className="mono" style={{ fontSize: '1rem', marginBottom: '0.5rem', opacity: 0.7 }}>LINUX FIRST</h4>
                                <p>Leveraging the power of the open-source kernel for maximum security and performance.</p>
                            </div>
                            <div>
                                <h4 className="mono" style={{ fontSize: '1rem', marginBottom: '0.5rem', opacity: 0.7 }}>AUTOMATION</h4>
                                <p>Eliminating toil through Ansible, Terraform, and custom tooling.</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </AnimationWrapper>
        </>
    );
};

export default Home;

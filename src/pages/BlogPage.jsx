import React from 'react';
import Section from '../components/Section';
import BlogSection from '../components/BlogSection';
import AnimationWrapper from '../components/AnimationWrapper';

const BlogPage = () => {
    return (
        <Section title="Inside the Infrastructure" id="blog">
            <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
                <p className="secondary-text" style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
                    Welcome to my technical blog. Here, I document and share my ongoing explorations into 
                    cloud infrastructure, virtualization, storage architectures, and open-source systems engineering. 
                    From deep dives into Ceph performance to tutorials on automating Proxmox clusters, 
                    this space is dedicated to the 'how' and 'why' of modern infrastructure.
                </p>
                <div style={{ marginTop: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <p className="mono" style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>
                        Keywords: Ceph, OpenStack, Proxmox, Linux, Virtualization, Automation, Infrastructure as Code
                    </p>
                </div>
            </div>
            <BlogSection />
        </Section>
    );
};

export default BlogPage;

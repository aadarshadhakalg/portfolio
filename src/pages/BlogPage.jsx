import React from 'react';
import Section from '../components/Section';
import BlogSection from '../components/BlogSection';
import AnimationWrapper from '../components/AnimationWrapper';

const BlogPage = () => {
    return (
        <Section title="My Blog Posts" id="blog">
            <BlogSection />
        </Section>
    );
};

export default BlogPage;

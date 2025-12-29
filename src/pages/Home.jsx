import React from 'react';
import Hero from '../components/Hero';
import AnimationWrapper from '../components/AnimationWrapper';

const Home = () => {
    return (
        <AnimationWrapper delay={0.1}>
            <Hero />
        </AnimationWrapper>
    );
};

export default Home;

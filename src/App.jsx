import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SEO from './components/SEO';
import AdSense from './components/AdSense';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const Unsubscribe = lazy(() => import('./pages/Unsubscribe'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));

function App() {
    return (
        <Layout>
            <SEO />
            <AdSense />
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogDetailPage />} />
                    <Route path="/media" element={<MediaPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/unsubscribe" element={<Unsubscribe />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;

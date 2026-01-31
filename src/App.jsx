import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import MediaPage from './pages/MediaPage';
import Unsubscribe from './pages/Unsubscribe';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/unsubscribe" element={<Unsubscribe />} />
            </Routes>
        </Layout>
    );
}

export default App;

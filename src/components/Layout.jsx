import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
            <footer style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #ddd' }}>
                <p className="mono secondary-text">© 2025 Aadarsha Dhakal.</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                    <a href="https://github.com/aadarshadhakalg" className="mono">GitHub</a>
                    <a href="https://linkedin.com/in/aadarshadhakalg" className="mono">LinkedIn</a>
                    <a href="https://twitter.com/aadarshadhakalg" className="mono">Twitter</a>
                    <a href="https://instagram.com/aadarshadhakalg" className="mono">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

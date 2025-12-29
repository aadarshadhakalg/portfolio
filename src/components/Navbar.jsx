import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrambleText from './ScrambleText';

const Navbar = () => {
    const location = useLocation();
    const navItems = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT ME', href: '/about' },
        { label: 'EXPERIENCE', href: '/experience' },
        { label: 'BLOG', href: '/blog' },
        { label: 'MEDIA', href: '/media' },
        { label: 'PROJECTS', href: '/projects' },
    ];

    return (
        <nav style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="mono" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <ScrambleText text="Aadarsha Dhakal" duration={1000} />
                </Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.href}
                        className="mono"
                        style={{
                            fontSize: '0.8rem',
                            letterSpacing: '0.05rem',
                            textDecoration: location.pathname === item.href ? 'underline' : 'none',
                            color: location.pathname === item.href ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

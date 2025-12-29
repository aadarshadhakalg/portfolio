import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrambleText from './ScrambleText';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT ME', href: '/about' },
        { label: 'EXPERIENCE', href: '/experience' },
        { label: 'BLOG', href: '/blog' },
        { label: 'MEDIA', href: '/media' },
        { label: 'PROJECTS', href: '/projects' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div className="mono" style={{ fontSize: '0.9rem', fontWeight: 'bold', zIndex: 1001 }}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={closeMenu}>
                    <ScrambleText text="Aadarsha Dhakal" duration={1000} />
                </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
                onClick={toggleMenu}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    zIndex: 1001,
                    flexDirection: 'column',
                    gap: '4px'
                }}
                className="hamburger-menu"
                aria-label="Toggle menu"
            >
                <span style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
                }}></span>
                <span style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    opacity: isMenuOpen ? 0 : 1
                }}></span>
                <span style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                }}></span>
            </button>

            {/* Desktop Navigation */}
            <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem' }}>
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

            {/* Mobile Navigation */}
            <div
                className="mobile-nav"
                style={{
                    display: 'none',
                    position: 'fixed',
                    top: 0,
                    right: isMenuOpen ? 0 : '-100%',
                    width: '70%',
                    maxWidth: '300px',
                    height: '100vh',
                    backgroundColor: 'var(--bg-color)',
                    boxShadow: isMenuOpen ? '-2px 0 10px rgba(0,0,0,0.1)' : 'none',
                    transition: 'right 0.3s ease',
                    zIndex: 1000,
                    padding: '5rem 2rem 2rem',
                    flexDirection: 'column',
                    gap: '2rem'
                }}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.href}
                        onClick={closeMenu}
                        className="mono"
                        style={{
                            fontSize: '1rem',
                            letterSpacing: '0.05rem',
                            textDecoration: location.pathname === item.href ? 'underline' : 'none',
                            color: location.pathname === item.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                            padding: '0.5rem 0'
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    onClick={closeMenu}
                    style={{
                        display: 'none',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 999
                    }}
                    className="mobile-overlay"
                />
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .hamburger-menu {
                        display: flex !important;
                    }
                    .mobile-nav {
                        display: flex !important;
                    }
                    .mobile-overlay {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;


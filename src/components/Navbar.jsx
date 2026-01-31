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
        <>
            <nav style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1002
            }}>
                <div className="mono" style={{ fontSize: '0.9rem', fontWeight: 'bold', zIndex: 1003 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={closeMenu}>
                        <ScrambleText text="Aadarsha Dhakal" duration={1000} />
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    style={{
                        display: 'none', // Controlled by media query
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        zIndex: 1003,
                        flexDirection: 'column',
                        gap: '6px'
                    }}
                    className="hamburger-menu"
                    aria-label="Toggle menu"
                >
                    <span style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'var(--text-primary)',
                        transition: 'all 0.3s ease',
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
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
                        transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
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
            </nav>

            {/* Mobile Navigation */}
            <div
                className="mobile-nav"
                style={{
                    display: 'flex', // Always flex, visibility controlled by position
                    position: 'fixed',
                    top: 0,
                    right: isMenuOpen ? 0 : '-100%',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'var(--bg-color)',
                    transition: 'right 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    zIndex: 1001,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2.5rem',
                    visibility: isMenuOpen ? 'visible' : 'hidden' // Hide from screen readers/tab when closed
                }}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.href}
                        onClick={closeMenu}
                        className="mono"
                        style={{
                            fontSize: '1.5rem',
                            letterSpacing: '0.1rem',
                            textDecoration: 'none',
                            color: location.pathname === item.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                            opacity: isMenuOpen ? 1 : 0,
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                            position: 'relative'
                        }}
                    >
                        {item.label}
                        {location.pathname === item.href && (
                            <span style={{
                                position: 'absolute',
                                left: '-1.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--text-primary)'
                            }} />
                        )}
                    </Link>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .hamburger-menu {
                        display: flex !important;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOW_MESSAGES = [
    {
        text: "Are you sure? Everyone else is watching right now.",
        btn: "Yes, I'm sure"
    },
    {
        text: "You'll miss the reel that goes viral tomorrow!",
        btn: "I hate viral reels"
    },
    {
        text: "Unsubscribing causes bad luck for 7 years.",
        btn: "I'll take the risk"
    },
    {
        text: "Do you really want to be the only one not laughing?",
        btn: "Yes, I have no humor"
    },
    {
        text: "Fine. But you're breaking my heart 💔",
        btn: "Let me Unsubscribe!"
    }
];

const Certificate = ({ username }) => {
    const date = new Date().toLocaleDateString();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
                background: '#fff',
                padding: '2rem',
                border: '10px double var(--text-primary)',
                maxWidth: '600px',
                width: '100%',
                color: '#111',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                position: 'relative',
                margin: '0 auto'
            }}
        >
            <div style={{
                border: '2px solid #111',
                padding: '2rem',
                height: '100%'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🏳️‍🌈</span>
                    <h2 style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: '2.5rem',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Certificate of Gay
                    </h2>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontStyle: 'italic', marginBottom: '2rem', opacity: 0.7 }}>
                        Official Recognition
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>This document certifies that</p>
                    <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        borderBottom: '2px solid #111',
                        display: 'inline-block',
                        padding: '0 2rem 0.5rem',
                        marginBottom: '2rem'
                    }}>
                        {username || "The User"}
                    </h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Has officially admitted to being fabulous. <br />
                        Acceptance is the first step to greatness.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '4rem',
                    alignItems: 'end'
                }}>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ borderTop: '1px solid #111', width: '150px', paddingTop: '0.5rem' }}>{date}</p>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Date</span>
                    </div>

                    <motion.div
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, type: 'spring' }}
                        style={{
                            width: '80px',
                            height: '80px',
                            border: '3px solid red',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'red',
                            fontWeight: 'bold',
                            transform: 'rotate(-20deg)',
                            opacity: 0.8
                        }}>
                        VERIFIED
                    </motion.div>

                    <div style={{ textAlign: 'right' }}>
                        <p style={{ borderTop: '1px solid #111', width: '150px', paddingTop: '0.5rem' }}>The Internet</p>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Authorized Signature</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Unsubscribe = () => {
    const [step, setStep] = useState(0);
    const [username, setUsername] = useState('');
    const [showGayCheck, setShowGayCheck] = useState(false);
    const [admitted, setAdmitted] = useState(false);
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

    const containerRef = useRef(null);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); // Initialize with 0 to safely handle non-browser envs if needed

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight }); // Set correct size on mount

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (step < FLOW_MESSAGES.length) {
            setStep(prev => prev + 1);
        }
    };

    const handleUnsubscribeAttempt = () => {
        setShowGayCheck(true);
    };

    const handleNoEscape = () => {
        const currentX = noBtnPos.x;
        const currentY = noBtnPos.y;
        const maxDist = 300;

        // Generate random position
        let nextX = (Math.random() * maxDist * 2) - maxDist; // -300 to 300
        let nextY = (Math.random() * maxDist * 2) - maxDist;

        // Ensure minimum distance jump (100px) from current position
        if (Math.abs(nextX - currentX) < 100) {
            nextX = currentX + (nextX > currentX ? 100 : -100);
        }
        if (Math.abs(nextY - currentY) < 100) {
            nextY = currentY + (nextY > currentY ? 100 : -100);
        }

        setNoBtnPos({ x: nextX, y: nextY });
    }

    const isFinalStage = step === FLOW_MESSAGES.length;

    if (showGayCheck) {
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                fontFamily: 'var(--font-sans)',
                padding: '2rem'
            }}>
                <AnimatePresence mode="wait">
                    {!admitted ? (
                        <motion.div
                            key="question"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            style={{
                                textAlign: 'center',
                                width: '100%',
                                maxWidth: '600px'
                            }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-serif)',
                                fontWeight: 400
                            }}>
                                Are you a gay?
                            </h1>
                            <p style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                                Just checking security protocols.
                            </p>

                            <div style={{
                                position: 'relative',
                                height: '120px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem'
                            }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setAdmitted(true)}
                                    style={{
                                        padding: '1rem 3rem',
                                        background: 'var(--text-primary)',
                                        color: 'var(--bg-color)',
                                        border: 'none',
                                        fontSize: '1.2rem',
                                        fontFamily: 'var(--font-mono)',
                                        cursor: 'pointer',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    YES
                                </motion.button>

                                <motion.button
                                    animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                                    transition={{ type: "spring", stiffness: 500, damping: 15, mass: 0.5 }}
                                    onMouseEnter={handleNoEscape}
                                    onTouchStart={handleNoEscape}
                                    onClick={handleNoEscape}
                                    style={{
                                        padding: '1rem 3rem',
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--text-primary)',
                                        fontSize: '1.2rem',
                                        fontFamily: 'var(--font-mono)',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        letterSpacing: '1px',
                                        zIndex: 20 // Ensure it sits above other things if it moves
                                    }}
                                >
                                    NO
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <Certificate username={username} />
                    )}
                </AnimatePresence>
            </div>
        )
    }

    // MAIN UNSUBSCRIBE PAGE STYLES
    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                fontFamily: 'var(--font-sans)',
                padding: '1.5rem',
                overflow: 'hidden',
                textAlign: 'center'
            }}
        >
            <div style={{
                maxWidth: '600px',
                width: '100%',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '300px',
                justifyContent: 'center'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--text-primary)'
                    }}
                >
                    Unsubscribe? 😢
                </motion.h1>

                <AnimatePresence mode="wait">
                    {!isFinalStage ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%'
                            }}
                        >
                            <p style={{
                                marginBottom: '2.5rem',
                                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                                lineHeight: '1.6',
                                color: 'var(--text-secondary)'
                            }}>
                                {FLOW_MESSAGES[step].text}
                            </p>

                            <button
                                onClick={handleNext}
                                className="cta-button"
                                style={{
                                    marginTop: '0',
                                    border: '1px solid var(--text-primary)',
                                    cursor: 'pointer',
                                    width: '100%',
                                    maxWidth: '300px'
                                }}
                            >
                                {FLOW_MESSAGES[step].btn}
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="final-form"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ width: '100%' }}
                        >
                            <div style={{
                                marginBottom: '2rem',
                                textAlign: 'left',
                                background: 'white',
                                padding: '1.5rem',
                                border: '1px solid var(--border-color)',
                                width: '100%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                            }}>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    Confirm Instagram Username:
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="@instagram_hater_123"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'var(--bg-color)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        fontFamily: 'var(--font-mono)'
                                    }}
                                />
                            </div>

                            <motion.button
                                onMouseEnter={handleUnsubscribeAttempt}
                                onClick={handleUnsubscribeAttempt}
                                className="cta-button"
                                style={{
                                    width: '100%',
                                    marginTop: '0',
                                    backgroundColor: '#ff4d4d',
                                    border: '1px solid #ff4d4d',
                                    color: 'white'
                                }}
                            >
                                Unsubscribe Forever
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Unsubscribe;

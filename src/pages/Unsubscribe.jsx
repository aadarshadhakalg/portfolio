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

const Unsubscribe = () => {
    const [step, setStep] = useState(0);
    const [username, setUsername] = useState('');
    const [showGayCheck, setShowGayCheck] = useState(false);
    const [admitted, setAdmitted] = useState(false);
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

    // Unsubscribe button escaping is replaced by immediate "r u gay" trigger, 
    // but the request said "button should escape when user tried to hit it".
    // AND "show that message when user tries to unsubscribe".
    // I'll make it so after a few escapes, OR on the first try, it shows the message.
    // Let's make it trigger immediately on hover/click to ensure they see the message.

    const containerRef = useRef(null);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
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
        const padding = 50;
        const safeMargin = 80;
        const newX = Math.random() * (windowSize.width - 2 * safeMargin) - (windowSize.width / 2 - safeMargin);
        const newY = Math.random() * (windowSize.height - 2 * safeMargin) - (windowSize.height / 2 - safeMargin);

        setNoBtnPos({ x: newX, y: newY });
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
                backgroundColor: '#ff69b4', // Hot pink
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                fontFamily: 'var(--font-sans)'
            }}>
                <AnimatePresence mode="wait">
                    {!admitted ? (
                        <motion.div
                            key="question"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            style={{ textAlign: 'center' }}
                        >
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '3rem', fontWeight: 'bold' }}>
                                Are you a gay? 🏳️‍🌈
                            </h1>

                            <div style={{ position: 'relative', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setAdmitted(true)}
                                    style={{
                                        padding: '1rem 3rem',
                                        background: 'white',
                                        color: '#ff69b4',
                                        border: 'none',
                                        borderRadius: '50px',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Yes
                                </motion.button>

                                <motion.button
                                    animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    onMouseEnter={handleNoEscape}
                                    onClick={handleNoEscape} // Fallback for mobile
                                    style={{
                                        padding: '1rem 3rem',
                                        background: '#333',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50px',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        position: 'absolute', // To enable flying
                                        left: 'calc(50% + 80px)', // Initial offset
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    No
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="admitted"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ textAlign: 'center' }}
                        >
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>I knew it! ✨</h1>
                            <p style={{ fontSize: '1.5rem' }}>See? Acceptance is the first step.</p>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ loop: Infinity, duration: 2, ease: "linear" }}
                                style={{ fontSize: '5rem', marginTop: '2rem' }}
                            >
                                🏳️‍🌈
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#0a0a0a',
                color: '#f0f0f0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                fontFamily: 'var(--font-mono)',
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
                        color: '#ff4d4d'
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
                                color: '#e0e0e0'
                            }}>
                                {FLOW_MESSAGES[step].text}
                            </p>

                            <button
                                onClick={handleNext}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'transparent',
                                    border: '1px solid #ff4d4d',
                                    borderRadius: '50px',
                                    color: '#ff4d4d',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontFamily: 'var(--font-mono)',
                                    width: '100%',
                                    maxWidth: '300px'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = 'rgba(255, 77, 77, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = 'transparent';
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
                                background: '#1a1a1a',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                border: '1px solid #333',
                                width: '100%'
                            }}>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: '#888' }}>
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
                                        background: '#000',
                                        border: '1px solid #333',
                                        borderRadius: '8px',
                                        color: 'white',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        fontFamily: 'var(--font-mono)'
                                    }}
                                />
                            </div>

                            <motion.button
                                onMouseEnter={handleUnsubscribeAttempt}
                                onClick={handleUnsubscribeAttempt}
                                style={{
                                    padding: '1rem 2rem',
                                    background: '#ff4d4d',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(255, 77, 77, 0.4)',
                                }}
                            >
                                Unsubscribe Forever
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background floating elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,77,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)' }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,77,255,0.05) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)' }} />
            </div>
        </div>
    );
};

export default Unsubscribe;

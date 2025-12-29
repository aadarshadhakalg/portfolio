import React, { useState, useEffect, useCallback } from 'react';

const ScrambleText = ({ text, duration = 1500, interval = 50, triggerOnHover = true }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    const scramble = useCallback(() => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const maxIterations = duration / interval;

        const timer = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration / (maxIterations / text.length)) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= maxIterations) {
                clearInterval(timer);
                setDisplayText(text);
                setIsScrambling(false);
            }

            iteration += 1;
        }, interval);

        return () => clearInterval(timer);
    }, [text, duration, interval, isScrambling]);

    useEffect(() => {
        scramble();
    }, []); // Initial scramble on load

    return (
        <span
            onMouseEnter={triggerOnHover ? scramble : undefined}
            style={{ cursor: triggerOnHover ? 'pointer' : 'default' }}
        >
            {displayText}
        </span>
    );
};

export default ScrambleText;

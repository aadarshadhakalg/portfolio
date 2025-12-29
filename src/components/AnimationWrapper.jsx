import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrapper = ({ children, delay = 0, y = 20, masked = false }) => {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: y }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
        >
            {children}
        </motion.div>
    );

    if (masked) {
        return (
            <div style={{ overflow: 'hidden' }}>
                {content}
            </div>
        );
    }

    return content;
};

export default AnimationWrapper;

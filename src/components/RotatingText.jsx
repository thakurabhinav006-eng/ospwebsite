import React, { useState, useEffect } from 'react';

const RotatingText = ({ words, interval = 3000 }) => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(true); // Fade in new word
            }, 500); // Wait for fade out to complete
        }, interval);

        return () => clearInterval(timer);
    }, [words, interval]);

    return (
        <span style={{
            display: 'inline-block',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateY(0)' : 'translateY(10px)',
            minWidth: '220px', // Prevent layout shift
            textAlign: 'center'
        }} className="text-gradient-shimmer">
            {words[index]}
        </span>
    );
};

export default RotatingText;

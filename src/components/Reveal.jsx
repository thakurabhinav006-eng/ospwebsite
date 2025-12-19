import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', animation = 'animate-fade-in-up', delay = '0s', threshold = 0.1, style, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const combinedStyle = {
        animationDelay: delay,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out', // Fallback transition
        ...style
    };

    const combinedClassName = `${className} ${isVisible ? animation : ''}`;

    return (
        <div ref={ref} className={combinedClassName} style={combinedStyle} {...props}>
            {children}
        </div>
    );
};

export default Reveal;

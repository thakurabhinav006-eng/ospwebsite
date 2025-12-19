import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleHoverStart = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.card') || e.target.closest('.btn') || e.target.closest('input') || e.target.closest('textarea')) {
                setIsHovering(true);
            }
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', updatePosition);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        // Using mouseover/out for delegation
        document.addEventListener('mouseover', handleHoverStart);
        document.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleHoverStart);
            document.removeEventListener('mouseout', handleHoverEnd);
        };
    }, []);

    // Hide on mobile/touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
            overflow: 'hidden'
        }}>
            {/* Main Dot */}
            <div style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--primary-blue, #0056ff)',
                borderRadius: '50%',
                transform: `translate(-50%, -50%)`,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.2s',
            }}></div>

            {/* Trailing Circle */}
            <div style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '40px',
                height: '40px',
                border: '1px solid var(--primary-blue, #0056ff)',
                borderRadius: '50%',
                transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                opacity: isVisible ? 0.5 : 0,
                backgroundColor: isHovering ? 'rgba(0, 86, 255, 0.1)' : 'transparent',
                transition: 'transform 0.15s ease-out, opacity 0.2s, background-color 0.2s',
                willChange: 'transform, left, top' // Optimize performance
            }}></div>
        </div>
    );
};

export default CustomCursor;

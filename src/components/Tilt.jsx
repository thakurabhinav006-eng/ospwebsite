import React, { useRef, useState } from 'react';

const Tilt = ({ children, className = '', perspective = 1000, maxRotation = 15, scale = 1.05 }) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width; // 0 to 1
        const y = (e.clientY - top) / height; // 0 to 1

        const tiltX = (0.5 - y) * maxRotation; // Rotate around X axis (up/down)
        const tiltY = (x - 0.5) * maxRotation; // Rotate around Y axis (left/right)

        setStyle({
            transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
            transition: 'transform 0.1s ease-out',
            zIndex: 10
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
            transition: 'transform 0.5s ease-out',
            zIndex: 1
        });
    };

    return (
        <div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
};

export default Tilt;

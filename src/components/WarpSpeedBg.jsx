import React, { useEffect, useRef } from 'react';

const WarpSpeedBg = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let stars = [];
        const numStars = 1000;
        let speed = 2; // Base speed
        let mouseX = width / 2;
        let mouseY = height / 2;

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * width
            });
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            // Adjust "center" of warp based on mouse
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Increase speed when mouse is near center
            const dist = Math.sqrt(Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height / 2, 2));
            speed = 2 + (1 - Math.min(dist / (width / 2), 1)) * 10;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            // Semi-transparent black for trails
            ctx.fillStyle = 'rgba(11, 17, 32, 0.4)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = 'white';

            // Move origin to mouse position for interactive warp direction
            const cx = width / 2;
            const cy = height / 2;

            for (let i = 0; i < numStars; i++) {
                let star = stars[i];

                // Move star towards camera (z-axis)
                star.z -= speed;

                // Reset star if it passes camera
                if (star.z <= 0) {
                    star.z = width;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                }

                // Project 3D position to 2D
                // Perspective projection: x2d = x / z
                // Using (width / 2) as focal length approximation
                let x = (star.x / star.z) * width + cx;
                let y = (star.y / star.z) * height + cy;

                // Simple weak parallax based on mouse
                let offsetX = (mouseX - width / 2) * 0.05 * (width / star.z);
                let offsetY = (mouseY - height / 2) * 0.05 * (width / star.z);
                x += offsetX;
                y += offsetY;

                // Calculate size based on proximity
                let size = (1 - star.z / width) * 3;

                if (x >= 0 && x <= width && y >= 0 && y <= height) {
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: '#0b1120' // Fallback/Base color
            }}
        />
    );
};

export default WarpSpeedBg;

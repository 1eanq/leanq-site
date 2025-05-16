import React, { useEffect, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

function InteractiveGithubButton() {
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);
    const [scale, setScale] = useState(1);
    const buttonRef = useRef(null);

    // для throttling
    const lastUpdate = useRef(0);

    useEffect(() => {
        function handleOrientation(event) {
            const now = Date.now();
            if (now - lastUpdate.current < 50) return; // обновляем не чаще 50ms
            lastUpdate.current = now;

            if (typeof event.beta === 'number' && typeof event.gamma === 'number') {
                const tiltXAngle = event.beta * 0.7;
                const tiltYAngle = event.gamma * 1.2;
                setTiltX(tiltXAngle);
                setTiltY(tiltYAngle);
                setScale(1.05);
            }
        }

        function handleOrientationReset() {
            setTiltX(0);
            setTiltY(0);
            setScale(1);
        }

        window.addEventListener('deviceorientation', handleOrientation, true);
        window.addEventListener('deviceorientation', handleOrientationReset, false);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
            window.removeEventListener('deviceorientation', handleOrientationReset);
        };
    }, []);

    function handleMouseMove(e) {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const maxTilt = 15;
        const maxScale = 1.1;

        const tiltXAngle = -deltaY * maxTilt;
        const tiltYAngle = deltaX * maxTilt;

        setTiltX(tiltXAngle);
        setTiltY(tiltYAngle);
        setScale(maxScale);
    }

    function handleMouseLeave() {
        setTiltX(0);
        setTiltY(0);
        setScale(1);
    }

    return (
        <a
            href="https://github.com/1eanq/twitchannouncer"
            target="_blank"
            rel="noopener noreferrer"
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'inline-block',
                transform: `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
                transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)', // плавное ускорение/замедление
                fontSize: 50,
                color: '#333',
                userSelect: 'none',
                cursor: 'pointer',
                width: 80,
                height: 80,
                textAlign: 'center',
                lineHeight: '80px',
                borderRadius: 12,
                backgroundColor: '#f5f5f5',
                boxShadow: `${-tiltY}px ${tiltX}px 15px rgba(0, 0, 0, 0.2)`,
            }}
            aria-label="GitHub repository"
            title="GitHub repository"
        >
            <FaGithub />
        </a>
    );
}

export default InteractiveGithubButton;

import React, { useEffect, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

function InteractiveGithubButton() {
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);
    const [scale, setScale] = useState(1);
    const buttonRef = useRef(null);

    const lastUpdate = useRef(0);
    const resetTimeout = useRef(null);
    const [permissionGranted, setPermissionGranted] = useState(false);

    useEffect(() => {
        // Функция-обработчик ориентации
        function handleOrientation(event) {
            const now = Date.now();
            if (now - lastUpdate.current < 50) return; // throttling 50ms
            lastUpdate.current = now;

            if (typeof event.beta === 'number' && typeof event.gamma === 'number') {
                const tiltXAngle = Math.min(Math.max(event.beta, -30), 30) * 0.7;
                const tiltYAngle = Math.min(Math.max(event.gamma, -30), 30) * 1.2;

                setTiltX(tiltXAngle);
                setTiltY(tiltYAngle);
                setScale(1.05);

                if (resetTimeout.current) clearTimeout(resetTimeout.current);
                resetTimeout.current = setTimeout(() => {
                    setTiltX(0);
                    setTiltY(0);
                    setScale(1);
                }, 500);
            }
        }

        // Запрос разрешения на iOS Safari
        async function requestPermission() {
            if (
                typeof DeviceMotionEvent !== 'undefined' &&
                typeof DeviceMotionEvent.requestPermission === 'function'
            ) {
                try {
                    const response = await DeviceMotionEvent.requestPermission();
                    if (response === 'granted') {
                        setPermissionGranted(true);
                        window.addEventListener('deviceorientation', handleOrientation, true);
                    } else {
                        alert('Разрешение на доступ к датчикам движения отклонено.');
                    }
                } catch (error) {
                    alert('Ошибка при запросе разрешения к датчикам движения.');
                }
            } else {
                // Для браузеров без запроса разрешения (Chrome, Android)
                setPermissionGranted(true);
                window.addEventListener('deviceorientation', handleOrientation, true);
            }
        }

        // Запускаем запрос разрешения при монтировании
        requestPermission();

        // Чистим слушатель и таймер при размонтировании
        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
            if (resetTimeout.current) clearTimeout(resetTimeout.current);
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
        <>
            {!permissionGranted && (
                <button
                    onClick={() => {
                        // Повторный запрос разрешения при клике на кнопку
                        if (
                            typeof DeviceMotionEvent !== 'undefined' &&
                            typeof DeviceMotionEvent.requestPermission === 'function'
                        ) {
                            DeviceMotionEvent.requestPermission().then(response => {
                                if (response === 'granted') {
                                    setPermissionGranted(true);
                                    window.addEventListener('deviceorientation', e => {
                                        const now = Date.now();
                                        if (now - lastUpdate.current < 50) return;
                                        lastUpdate.current = now;
                                        if (typeof e.beta === 'number' && typeof e.gamma === 'number') {
                                            const tiltXAngle = Math.min(Math.max(e.beta, -30), 30) * 0.7;
                                            const tiltYAngle = Math.min(Math.max(e.gamma, -30), 30) * 1.2;
                                            setTiltX(tiltXAngle);
                                            setTiltY(tiltYAngle);
                                            setScale(1.05);
                                            if (resetTimeout.current) clearTimeout(resetTimeout.current);
                                            resetTimeout.current = setTimeout(() => {
                                                setTiltX(0);
                                                setTiltY(0);
                                                setScale(1);
                                            }, 500);
                                        }
                                    }, true);
                                } else {
                                    alert('Доступ к датчикам не предоставлен');
                                }
                            });
                        }
                    }}
                    style={{
                        fontSize: '1rem',
                        padding: '10px 20px',
                        margin: '20px',
                        cursor: 'pointer',
                    }}
                >
                    Разрешить доступ к датчикам движения
                </button>
            )}
            {permissionGranted && (
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
                        transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
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
            )}
        </>
    );
}

export default InteractiveGithubButton;

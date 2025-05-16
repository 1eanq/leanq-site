import React, { useEffect, useState } from 'react';

const GitHubButtonWithTilt = () => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleOrientation = (event) => {
            // event.beta - наклон вперед/назад, event.gamma - наклон влево/вправо
            let x = event.gamma || 0; // наклон по X
            let y = event.beta || 0;  // наклон по Y

            // Ограничиваем значения, чтобы не было сильных наклонов
            x = Math.min(Math.max(x, -30), 30);
            y = Math.min(Math.max(y, -30), 30);

            setTilt({ x, y });
        };

        if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                })
                .catch(console.error);
        } else {
            window.addEventListener('deviceorientation', handleOrientation);
        }

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    return (
        <a
            href="https://github.com/1eanq/twitchannouncer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                width: '80px',
                height: '80px',
                backgroundColor: '#24292e',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                color: 'white',
                fontSize: '40px',
                textAlign: 'center',
                lineHeight: '80px',
                transition: 'transform 0.3s ease',
                transform: `rotateX(${tilt.y / 2}deg) rotateY(${tilt.x / 2}deg)`,
            }}
            aria-label="GitHub Repository"
        >
            {/* Здесь можно вставить иконку GitHub из react-icons */}
            {/* Например: <FaGithub style={{verticalAlign: 'middle'}} /> */}
            &#x1F4BB;
        </a>
    );
};

export default GitHubButtonWithTilt;

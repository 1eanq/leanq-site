import React, { useEffect, useState } from 'react';
import Snowfall from './components/';

function App() {
    const [snowActive, setSnowActive] = useState(false);
    const shakeTimeout = React.useRef(null);

    useEffect(() => {
        function handleMotion(event) {
            const acc = event.accelerationIncludingGravity;
            if (!acc) return;

            const threshold = 15;

            if (
                Math.abs(acc.x) > threshold ||
                Math.abs(acc.y) > threshold ||
                Math.abs(acc.z) > threshold
            ) {
                if (shakeTimeout.current) {
                    clearTimeout(shakeTimeout.current);
                } else {
                    setSnowActive(true);
                }

                shakeTimeout.current = setTimeout(() => {
                    setSnowActive(false);
                    shakeTimeout.current = null;
                }, 3000);
            }
        }

        // Запрос разрешения для iOS Safari
        async function requestPermission() {
            if (
                typeof DeviceMotionEvent !== 'undefined' &&
                typeof DeviceMotionEvent.requestPermission === 'function'
            ) {
                try {
                    const response = await DeviceMotionEvent.requestPermission();
                    if (response === 'granted') {
                        window.addEventListener('devicemotion', handleMotion, true);
                    }
                } catch (error) {
                    console.warn('Permission denied for device motion');
                }
            } else {
                window.addEventListener('devicemotion', handleMotion, true);
            }
        }

        requestPermission();

        return () => {
            window.removeEventListener('devicemotion', handleMotion);
            if (shakeTimeout.current) clearTimeout(shakeTimeout.current);
        };
    }, []);

    return (
        <>
            {/* Твой основной UI */}
            <div>
                <h1>Потряси телефон, чтобы пошёл снег!</h1>
                {/* ...твой контент... */}
            </div>

            {/* Снег поверх страницы */}
            <Snowfall active={snowActive} />
        </>
    );
}

export default App;

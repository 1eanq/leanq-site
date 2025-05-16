import React, { useEffect, useState } from 'react';
import Snowfall from './components/Snowfall';

function App() {
    const [snowActive, setSnowActive] = useState(false);
    const shakeTimeout = React.useRef(null);
    const Header = styled.h1`
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
      color: #0a3d62;
      animation: ${fadeInUp} 0.7s ease forwards;
    
      @media (max-width: 480px) {
        font-size: 3rem;
      }
    `;
    const Container = styled.div`
      min-height: 100vh;
      background: #f0f2f5;
      color: #222;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
    `;

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
                }, 10000);
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
        <Container>
            <Header>
                leanq
            </Header>
            <Snowfall active={snowActive} />
        </Container>
    );
}

export default App;

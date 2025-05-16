import React, { useEffect, useRef } from 'react';

function Snowfall({ active }) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const snowflakes = useRef([]);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    setCanvasSize();

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Создаем снежинки
    snowflakes.current = Array.from({ length: 150 }).map(() => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      radius: random(1, 4),
      speedY: random(1, 3),
      speedX: random(-0.5, 0.5),
      opacity: random(0.3, 1),
    }));

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let flake of snowflakes.current) {
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > canvas.height) flake.y = 0;
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
      }

      animationFrameId.current = requestAnimationFrame(update);
    }

    update();

    window.addEventListener('resize', setCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
      }}
    />
  );
}

export default Snowfall;

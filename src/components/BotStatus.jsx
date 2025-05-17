import { useEffect, useState } from 'react';

export default function BotStatus() {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        fetch('https://leanq.ru/health')
            .then(res => {
                if (res.ok) {
                    setIsOnline(true);
                } else {
                    setIsOnline(false);
                }
            })
            .catch(() => setIsOnline(false));
    }, []);

    if (isOnline === null) return <p>Проверка статуса бота...</p>;

    return (
        <p>
            Бот статус:{" "}
            <span style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "работает ✅" : "не работает ❌"}
      </span>
        </p>
    );
}

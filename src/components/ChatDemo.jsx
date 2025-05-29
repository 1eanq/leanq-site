import React from 'react';
import './ChatDemo.css'

export default function ChatDemo() {
    const [messages, setMessages] = React.useState([]);
    const [typing, setTyping] = React.useState('');
    const stepIndex = React.useRef(0);
    const typingInterval = React.useRef(null);
    const nextTimeout = React.useRef(null);

    const steps = [
        { from: 'user', text: '/start' },
        { from: 'bot', text: 'Вас приветствует бот для автоматической отправки уведомлений о стримах.\n/help для просмотра доступных комманд!' },
        { from: 'user', text: '/new' },
        { from: 'bot', text: 'Напиши Twitch username:' },
        { from: 'user', text: 'leanqha' },
        { from: 'bot', text: 'Перешлите сообщение из канала\nКанал должен быть открытым!' },
        {
            from: 'user', text: 'Самый лучший канал', forwarded: {
                name: 'leanq',
                avatar: 'avatars/ChannelAvatar.png'
            }
        },
        { from: 'bot', text: 'Оповещения о стримах leanqha успешно добавлены в канал @leanqstreams' }
    ];

    React.useEffect(() => {
        function typeNext() {
            if (stepIndex.current >= steps.length) return;

            const current = steps[stepIndex.current];

            if (current.from === 'user') {
                let char = 0;
                setTyping('');
                typingInterval.current = setInterval(() => {
                    setTyping(current.text.slice(0, char));
                    char++;
                    if (char > current.text.length) {
                        clearInterval(typingInterval.current);
                        setTyping('');
                        setMessages(prev => [...prev, current]);
                        stepIndex.current++;
                        nextTimeout.current = setTimeout(typeNext, 600);
                    }
                }, 40);
            } else {
                setMessages(prev => [...prev, current]);
                stepIndex.current++;
                nextTimeout.current = setTimeout(typeNext, 1600);
            }
        }

        typeNext();

        // Очистка таймеров при размонтировании компонента
        return () => {
            if (typingInterval.current) clearInterval(typingInterval.current);
            if (nextTimeout.current) clearTimeout(nextTimeout.current);
        };
    }, []);

    return (
        <div className="chat-wrapper">
            <div className="chat-box">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-msg ${msg.from}`}>
                        <img
                            className="avatar"
                            src={msg.from === 'user' ? 'avatars/UserAvatar.png' : 'avatars/BotAvatar.png'}
                            alt="avatar"
                        />
                        <div className="bubble">
                            {msg.forwarded && (
                                <div className="forwarded">
                                    <img src={msg.forwarded.avatar} alt="fwd" className="fwd-avatar" />
                                    <span>Переслано от {msg.forwarded.name}</span>
                                </div>
                            )}
                            {msg.text.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="fake-input-area">
                <div className="fake-input">{typing}</div>
            </div>
        </div>
    );
}

import React from 'react';
import { FaTelegram, FaGithub, FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';
import ChatDemo from '../components/ChatDemo'

const TwitchAnnouncerPage = () => {
    return (
        <div className="container">
            <h1 className="header">TwitchAnnouncer</h1>
            <p className="subtitle">Лучший бот для своевременного оповещения о стримах на Twitch</p>

            <ChatDemo />

            <p className="subtitle" style={{ marginTop: 40 }}>подключение</p>
            <ol style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
                <li>
                    Найдите:
                    <br />
                    <a
                        href="https://t.me/Twitchmanannouncer_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#9147ff', fontWeight: 'bold' }}
                    >
                        @Twitchmanannouncer_bot
                    </a>
                </li>
                <li>Напишите /start</li>
                <li>Следуйте укзаниям бота, он поможет все настроить</li>
                <li>Готово! Теперь ваши зрители н епропустят ваш эфир</li>
            </ol>

            <div style={{ marginTop: 50 }}>
                <a
                    className="github-link"
                    href="https://github.com/1eanq/twitchannouncer"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub проекта"
                >
                    <FaGithub className="github-icon" />
                    <span style={{ marginTop: 12 }}>Исходный код на GitHub</span>
                </a>

            </div>

            <Link
                to="/"
                style={{
                    marginTop: 40,
                    padding: '14px 28px',
                    backgroundColor: '#9147ff',
                    color: '#fff',
                    borderRadius: 16,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    animation: 'fadeInUp 1.5s ease forwards',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#772ce8';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#9147ff';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                ⬅ на главную
            </Link>
        </div>
    );
};

export default TwitchAnnouncerPage;

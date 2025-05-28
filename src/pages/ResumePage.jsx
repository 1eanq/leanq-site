import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import DownloadResume from "../components/DownloadResume";

export default function ResumePage() {
    return (
        <div className="container">
            <h1 className="header" style={{ textAlign: 'center', marginBottom: 40 }}>
                Горинов Иван Дмитриевич
            </h1>

            <div style={{ marginBottom: 30, fontSize: '1.1rem', color: '#3c6382' }}>
                <p>📞 +7 (995) 893-43-65</p>
                <p>📧 leanqha@gmail.com</p>
                <p>
                    🐙 GitHub:{' '}
                    <a href="https://github.com/1eanq" target="_blank" rel="noopener noreferrer" style={{ color: '#0a3d62' }}>
                        github.com/1eanq
                    </a>
                </p>
                <p>
                    💬 Telegram:{' '}
                    <a href="https://t.me/leanqha" target="_blank" rel="noopener noreferrer" style={{ color: '#0a3d62' }}>
                        @leanqha
                    </a>
                </p>
            </div>

            <section style={{ marginBottom: 30 }}>
                <h2 style={{ color: '#0a3d62', fontWeight: 700, fontSize: '1.6rem', marginBottom: 10 }}>Junior Go-разработчик</h2>
                <p>
                    Junior Go-разработчик с опытом создания сервисов с использованием Go, gRPC, PostgreSQL, Docker и сторонних API.
                    Применяю практики тестирования, CI/CD, контейнеризации и работы с микросервисной архитектурой.
                </p>
                <p style={{ marginTop: 8 }}>
                    Имею практический опыт написания CLI-инструментов, gRPC-сервисов и телеграм-ботов с автоматическим развертыванием.
                </p>
            </section>

            <section style={{ marginBottom: 30 }}>
                <h2 style={{ color: '#0a3d62', fontWeight: 700, fontSize: '1.6rem', marginBottom: 10 }}>Навыки</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: 20, color: '#3c6382', fontSize: '1.1rem' }}>
                    <li>Языки: Go, SQL, Bash</li>
                    <li>Технологии: REST, gRPC, PostgreSQL, Docker, docker-compose</li>
                    <li>Инструменты: Git, GitHub Actions, Make, Linux, .env, CI/CD</li>
                    <li>Тестирование: testing, httptest, unit-тесты</li>
                    <li>Прочее: Telegram Bot API, Twitch API</li>
                    <li>Английский язык: Intermediate (читаю документацию, общаюсь письменно)</li>
                </ul>
            </section>

            <section style={{ marginBottom: 30 }}>
                <h2 style={{ color: '#0a3d62', fontWeight: 700, fontSize: '1.6rem', marginBottom: 10 }}>Проекты</h2>

                <div style={{ marginBottom: 20 }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1.3rem' }}>TwitchAnnouncer</h3>
                    <p>
                        Телеграм-бот для уведомлений о стримах на Twitch —{' '}
                        <a
                            href="https://github.com/1eanq/twitchannouncer"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0a3d62' }}
                        >
                            GitHub
                        </a>
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, color: '#3c6382' }}>
                        <li>Интеграция с Twitch API (авторизация, обновление токена)</li>
                        <li>Хранение данных в PostgreSQL</li>
                        <li>Отправка уведомлений через Telegram Bot API</li>
                        <li>Docker и docker-compose для сборки и запуска</li>
                        <li>Настроен CI/CD: GitHub Actions выполняет тесты и автосборку</li>
                        <li>Написаны модульные тесты</li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.3rem' }}>GRPC_Calc</h3>
                    <p>
                        Клиент-серверное приложение для вычислений через gRPC —{' '}
                        <a
                            href="https://github.com/1eanq/GRPC_Calc"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0a3d62' }}
                        >
                            GitHub
                        </a>
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, color: '#3c6382' }}>
                        <li>gRPC-сервер на Go с методами Add, Subtract, Multiply, Divide</li>
                        <li>CLI-клиент на Go</li>
                        <li>Описание протокола в .proto и генерация через protoc</li>
                        <li>Модульная структура и Makefile</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 style={{ color: '#0a3d62', fontWeight: 700, fontSize: '1.6rem', marginBottom: 10 }}>Цель</h2>
                <p>
                    Получить позицию Junior Go-разработчика в команде, где смогу развиваться в разработке
                    высоконагруженных и масштабируемых сервисов.
                </p>
            </section>

            <DownloadResume/>
            {/* Кнопка возврата на главную */}
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Link
                    to="/"
                    style={{
                        padding: '14px 28px',
                        backgroundColor: '#0a3d62',
                        color: '#fff',
                        borderRadius: 16,
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#0366d6';
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = '#0a3d62';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    На главную
                </Link>
            </div>
        </div>
    );
}

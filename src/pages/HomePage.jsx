import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';


const HomePage = () => {
    return (
        <div className="container">
            переезд
            <h1 className="header">leanq</h1>
            <p className="subtitle">backend-developer</p>

            <Link
                to="/twitchannouncer"
                style={{
                    marginTop: 40,
                    padding: '14px 28px',
                    backgroundColor: '#333',
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
            >
                twitchannouncer →
            </Link>

            <p className="subtitle" style={{ marginTop: 40 }}>contact me</p>

            <a
                className="telegram-link"
                href="https://t.me/leanqha"
                target="_blank"
                rel="noopener noreferrer"
                title="telegram личные сообщения"
            >
                <FaTelegram className="telegram-icon" />
                <span style={{ marginTop: 12 }}>@leanqha</span>
            </a>



            <Link
                to="/resume"
                style={{
                    marginTop: 40,
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
                    animation: 'fadeInUp 1.5s ease forwards',
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
                Resume
            </Link>
        </div>
    );
};

export default HomePage;

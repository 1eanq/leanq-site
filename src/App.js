import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './App.css';

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="header">leanq</h1>
            <p className="subtitle">backend-developer</p>
            <a
                className="github-link"
                href="https://github.com/1eanq/twitchannouncer"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub репозиторий Telegram бота"
            >
                <FaGithub className="github-icon" />
            </a>
            <p className={""}>twitchannouncer</p>
        </div>
    );
};

export default HomePage;

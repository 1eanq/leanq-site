import React from 'react';
import { FaGithub , FaTelegram} from 'react-icons/fa';
import './App.css';
import BotStatus from "./components/BotStatus";

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
            <BotStatus/>
            <p className={"subtitle"}>contact me</p>
            <a
                className="telegram-link"
                href={"https://t.me/leanqha"}
                target="_blank"
                rel="noopener noreferrer"
                title="telegram личные сообщения"
            >
                <FaTelegram className="telegram-icon" />
            </a>
            <p className="">@leanqha</p>
        </div>
    );
};

export default HomePage;

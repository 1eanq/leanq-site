import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import TwitchAnnouncerPage from './pages/TwitchAnnouncerPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/twitchannouncer" element={<TwitchAnnouncerPage />} />
            </Routes>
        </Router>
    );
}

export default App;

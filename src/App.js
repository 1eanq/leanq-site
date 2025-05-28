import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // путь к твоей главной странице
import ResumePage from './pages/ResumePage'; // импорт страницы с резюме

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
        </Router>
    );
}

export default App;

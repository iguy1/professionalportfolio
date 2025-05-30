import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/Home.js">Home</a></li>
                <li><a href="/Quiz.js">Quiz</a></li>
                <li><a href="/">To-Do List</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

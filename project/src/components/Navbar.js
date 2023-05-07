import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/quiz">Quiz</a></li>
                <li><a href="/todo">To-Do List</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
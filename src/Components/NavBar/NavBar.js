import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/amount">Create Amount</Link></li>
                <li><Link to="/log">Log Liquids</Link></li>
                <li><Link to="/list">List of Liquids</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

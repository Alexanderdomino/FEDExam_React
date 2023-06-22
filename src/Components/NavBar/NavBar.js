import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/amount">Create Amount</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;

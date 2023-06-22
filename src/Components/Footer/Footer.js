import React from 'react';

const Footer = () => (
    <footer style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#6c757d',
        color: 'white',
        textAlign: 'center',
        padding: '10px'
    }}>
        {new Date().getFullYear()} This App was made by Alexander Thougaard Domino
    </footer>
);

export default Footer;

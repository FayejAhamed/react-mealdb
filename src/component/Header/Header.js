import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <a href="/home">Home</a>
                <a href="/about">About us</a>
                <a href="/food">Food</a>
                <a href="/hungry">Hungry</a>
            </nav>
        </div>
    );
};

export default Header;
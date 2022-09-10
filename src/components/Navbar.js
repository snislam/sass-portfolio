import React from 'react';
import '../styles/css/navbar.min.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <a href="/">PORTFOLIO</a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import './styles.css';

const Navbar = ({ links }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {links.map((link, index) => (
                    <li key={index} className="navbar-item">
                        <a href={link.url} className="navbar-link">{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

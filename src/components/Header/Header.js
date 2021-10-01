import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <nav className='nav'>
                <a href="/shop">Shop</a>
                <a href="/shop">Oeder Review</a>
                <a href="/shop">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;
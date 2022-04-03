import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <input className='search' type="text" placeholder='Search...' />
        </header>
    );
};

export default Header;
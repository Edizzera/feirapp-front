import React from 'react';
import logoImage from '../market (2).png'
import './Header.css'

const Header = () => {
    return (
      <header>
        <div className="header-content"> 
          <h1>FeirApp</h1>
          <img src={logoImage} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header;
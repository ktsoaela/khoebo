// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Search from './Search'; 

const HeaderSection = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo}  className='logo-image' alt="company-logo"></img>  
                        <span className='logo-text'>SaaS</span>
                    </Link>
                </div>
                <div className='links'>
                    <ul className='navlink'>
                        <li className='navitem'><Link to='/products'>Products</Link></li>
                        <li className='navitem'><Link to="/solutions">Solutions</Link></li>
                        <li className='navitem'><Link to="/partners">Partners</Link></li>
                        <li className='navitem'><Link to="/news">News</Link></li>
                        <li className='navitem'><Link to="/support">Support</Link></li>
                        <li className='navitem'><Link to="/training">Training</Link></li>
                    </ul>
                    <ul className='utilities'>
                        <Search />
                        <li className='navitem'><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default HeaderSection;

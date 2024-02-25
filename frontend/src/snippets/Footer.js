import React from "react";
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const FooterSection = () => {
  return (
    <footer className="footer">
        <div className="footer-column">
        <Link to="/">
            <img src={logo}  className='logo-image' alt="company-logo"></img>  
            <span className='logo-text'>SaaS</span>
        </Link>
      </div>
      <div className="footer-column">
        <h3>Column 1</h3>
        
        <ul>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Column 2</h3>
        <ul>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Column 3</h3>
        <ul>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Column 4</h3>
        <ul>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linkitem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
         <li className='linktem'><Link to='/'>Link </Link></li>
        </ul>
      </div>
      
    </footer>
  );
};

export default FooterSection;

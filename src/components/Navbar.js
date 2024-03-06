import iconImage from '../assets/icon.png';
import { useState } from 'react';

function Navbar(){

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
           <div className='icon-container'>
                <img  className="nav-icon" src={iconImage} alt="Icon" />
           </div>

           <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <li><a className="nav-link">Crypto Taxes</a></li>
                <li><a className="nav-link">Free Tools</a></li>
                <li><a className="nav-link">Resource Center</a></li>
                <li><a className="nav-link primary-btn">Get Started</a></li>
           </ul>

           <div className="hamburger-menu" onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
           </div>
          
        </nav>
    )
}

export default Navbar
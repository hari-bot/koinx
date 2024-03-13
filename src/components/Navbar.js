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
                <li><button className="nav-link">Crypto Taxes</button></li>
                <li><button className="nav-link">Free Tools</button></li>
                <li><button className="nav-link">Resource Center</button></li>
                <li><button className="nav-link primary-btn">Get Started</button></li>
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
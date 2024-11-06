import React, { useState, useEffect } from 'react';
import LogoLetter from '../assets/logo-letter.png';
import Logo from '../assets/logo.png';
import { navLinks } from '../constants';
import { HeaderStyles, TextStyles } from '../styles/styles';
import { useDeviceType } from '../utils/DevicesTypes';

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [activate, setActivate] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useDeviceType();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);
      setScrolling(currentScrollY > 50);

      // Show header when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > 100) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActivate(id);
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Remove default behavior
    setMobileMenuOpen(!isMobileMenuOpen); // Change state to open/close mobile menu
  };

  const renderLogo = () => {
    if (isMobile) {
      return (
        <a href="#home" onClick={() => handleNavClick('home')}>
          <img src={LogoLetter} alt="Logo Letter" className={HeaderStyles.logoLetter} />
        </a>
      );
    } else {
      return (
        <>
          <a href="#home" className="flex items-center space-x-3" onClick={() => handleNavClick('home')}>
            <img src={LogoLetter} alt="Logo" className={HeaderStyles.logoLetter} />
          </a>
          <div className={`hidden md:flex flex-grow justify-center`}>
            <ul className={`flex space-x-6 ${scrolling ? 'text-gray-900' : 'text-gray-200'}`}>
              {navLinks.map((link: { id: string; title: string }) => (
                <li key={link.id} className={`font-square ${HeaderStyles.navLink} ${scrolling ? 'text-blue-950' : 'text-white'} ${TextStyles.paragraph}`}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="focus:outline-none bg-transparent border-none"
                    style={{ backgroundColor: 'transparent', padding: 0 }}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <a href="#home" onClick={() => handleNavClick('home')}>
            <img src={Logo} alt="Logo Letter" className={HeaderStyles.logo} />
          </a>
        </>
      );
    }
  };

  return (
    <nav className={`${HeaderStyles.header} ${scrolling ? HeaderStyles.scrollBackground : HeaderStyles.background} ${isHeaderVisible ? HeaderStyles.visible : HeaderStyles.hidden}`}>
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-4">
        {renderLogo()}
        {/* Mobile button */}
        <button onClick={toggleMobileMenu} className={HeaderStyles.mobileMenuButton}>
          <svg className={HeaderStyles.menuIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Mobile colum*/}
        {isMobileMenuOpen && (
          <div className="absolute top-0 right-0 z-50 bg-[#111b3f] rounded-xl p-4">
            <button onClick={toggleMobileMenu} className="bg-transparent absolute top-0 right-0">
              <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col space-y-2 w-full">
              {navLinks.map((link: { id: string; title: string }) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-white bg-transparent  ${HeaderStyles.navLink}`}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

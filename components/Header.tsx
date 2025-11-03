
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-2xl font-bold text-slate-800 transition-colors hover:text-slate-900">
          Sahithya
        </a>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium text-lg">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
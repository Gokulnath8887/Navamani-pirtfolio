import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useActiveSection } from '../hooks/useScrollReveal';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-navy-900" 
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Navamathi RK
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-all relative py-2 ${
                  activeSection === link.id
                    ? 'text-royal-600'
                    : 'text-navy-600 hover:text-royal-600'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-royal-600 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="/assets/resume.jpeg"
              download
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-royal-600 border border-transparent rounded-full hover:bg-royal-700 shadow-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-600 hover:text-royal-600 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="px-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-royal-600 bg-royal-50'
                  : 'text-navy-600 hover:text-royal-600 hover:bg-navy-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/resume.jpeg"
            download
            className="mt-4 flex items-center justify-center px-5 py-3 text-base font-medium text-white transition-all bg-royal-600 rounded-full hover:bg-royal-700 w-full"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-white">Navamathi R.K.</h3>
            <p className="text-navy-300 text-sm mt-1">Computer Science Engineering Student</p>
            <p className="text-navy-400 text-sm mt-3 max-w-xs">
              Passionate about web development, UI/UX design, and building innovative solutions.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-300 mb-4">Quick Links</h4>
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleScroll(e, link.id)}
                    className="text-navy-400 hover:text-white transition text-sm block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-300 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com/in/navamathi-rk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-400 hover:text-white transition text-sm">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>linkedin.com/in/navamathi-rk</span>
                </a>
              </li>

              <li>
                <a href="mailto:navamathirk20@gmail.com" className="flex items-center gap-2 text-navy-400 hover:text-white transition text-sm">
                  <Mail className="w-4 h-4" />
                  <span>navamathirk20@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:8667286539" className="flex items-center gap-2 text-navy-400 hover:text-white transition text-sm">
                  <Phone className="w-4 h-4" />
                  <span>8667286539</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            © 2026 Navamathi R.K. All rights reserved.
          </p>
          <p className="text-navy-400 text-sm">
            Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

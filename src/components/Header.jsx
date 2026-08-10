import React, { useState } from 'react';
import Logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 mx-10 md:mx-20 rounded-xl p-[2px] 
      bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-rotate-border">

      <div className="bg-black/30 backdrop-blur-md rounded-xl px-4 md:px-6 py-2 flex items-center justify-between border border-transparent">

        <div className="flex items-center cursor-pointer">
          <a href="#home" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-3" />
            <span className="logo-text text-white font-bold text-lg md:text-xl">
              Lokesh Khadse
            </span>
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-200">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="mailto:lokeshkhadse19@gmail.com">
            <button type="button" className="button">
              <span className="fold"></span>
              <div className="points_wrapper">
                {Array.from({ length: 10 }).map((_, i) => (
                  <i key={i} className="point"></i>
                ))}
              </div>
              <span className="inner">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Say Hello
              </span>
            </button>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-black/50 backdrop-blur-md rounded-xl mt-2 p-4 flex flex-col space-y-3 animate-fade-in">
          {['about','experience','skills','projects','education','contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-200 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a href="mailto:lokeshkhadse19@gmail.com">
            <button type="button" className="button w-full mt-2">
              <span className="fold"></span>
              <div className="points_wrapper">
                {Array.from({ length: 10 }).map((_, i) => (
                  <i key={i} className="point"></i>
                ))}
              </div>
              <span className="inner">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Say Hello
              </span>
            </button>
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar flex items-center justify-between p-4 bg-black text-white fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl md:text-2xl">
        <span className="text-orange-500">Web</span> Developer
      </h1>
      <div className={`nav-links flex-col md:flex-row md:gap-10 md:flex md:static bg-black md:bg-transparent left-0 top-full w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <a href="#home" className="nav-link text-lg md:text-base p-1.5 hover:bg-orange-600 hover:rounded-lg transition duration-300">Home</a>
        <a href="#about" className="nav-link text-lg md:text-base p-1.5 hover:bg-orange-600 hover:rounded-lg transition duration-300">About</a>
        <a href="#skills" className="nav-link text-lg md:text-base p-1.5 hover:bg-orange-600 hover:rounded-lg transition duration-300">Skills</a>
        <a href="#projects" className="nav-link text-lg md:text-base p-1.5 hover:bg-orange-600 hover:rounded-lg transition duration-300">Projects</a>
        <a href="#contact" className="nav-link text-lg md:text-base p-1.5 hover:bg-orange-600 hover:rounded-lg transition duration-300">Contact</a>
      </div>
      <div className="hamburger md:hidden cursor-pointer" onClick={handleToggle}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="orange" />
      </div>
    </div>
  );
};

export default NavBar;


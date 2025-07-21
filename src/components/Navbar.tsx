import React, { useState } from 'react';
import Logo from '../assets/images/learners-vault-logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-900 fixed w-full z-10 top-0'>
      <nav className="bg-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-slate-900 text-lg font-bold">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={Logo} alt="Logo" className='w-32' />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex text-slate-900 space-x-4">
              <Link 
                to="/" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
              >
                Our Courses
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Demo Class Button - Desktop */}
            <button className="hidden md:block bg-amber-600 text-white rounded-full p-3 text-sm hover:bg-slate-900 transition-colors duration-300">
              FREE DEMO CLASS
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-900 focus:outline-none mr-4"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-2 bg-white p-4 rounded-lg shadow-lg">
              <Link 
                to="/" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Our Courses
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-gray-200 hover:bg-slate-900 hover:rounded-xl px-2 py-1 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button className="bg-amber-600 text-white rounded-full p-2 text-sm hover:bg-slate-900 transition-colors duration-300 mt-2">
                FREE DEMO CLASS
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
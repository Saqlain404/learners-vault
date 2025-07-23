import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/images/learners-vault-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "AI Marketplace", path: "/ai-marketplace" },
    { name: "Our Courses", path: "/courses" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className={`fixed w-full z-50 top-0 transition-all bg-white duration-500 ${scrolled ? 'bg-white  shadow-xl' : ''}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with Holographic Effect */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            
            <Link to="/" className="text-white font-bold text-2xl">
             <img src={Logo} alt="" className='w-1/2' />
            </Link>
           
          </motion.div>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="relative px-4 py-2 text-black group transition-all duration-300"
                >
                  
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Futuristic CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <span>FREE DEMO</span>
            <FaArrowRight className="text-sm" />
          </motion.button>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-black focus:outline-none z-50"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="text-2xl text-cyan-400" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </motion.button>

          {/* Animated Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg pt-24 px-6 z-40"
              >
                <div className="flex flex-col  space-y-6">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        className="text-2xl text-white font-medium flex items-center space-x-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3"
                  >
                    <span>FREE DEMO CLASS</span>
                    <FaArrowRight />
                  </motion.button>
                </div>

                {/* Futuristic Decorative Elements */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-3 h-3 rounded-full bg-cyan-400 opacity-70"
                    ></motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
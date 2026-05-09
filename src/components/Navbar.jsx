import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import yaso_logo from '../assets/yaso_logo.png';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
 const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'brand' },
  { label: 'Categories', id: 'categories' },
  { label: 'Products', id: 'products' },
  
  { label: 'Community', id: 'nutrition' },
  { label: 'App', id: 'app' },
  { label: 'Contact', id: 'contact' }
];

  return (
    <motion.header
      className="navbar glassy"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="nav-inner">
  <div className="nav-logo" onClick={() => scrollToSection('home')}>
  <img src={yaso_logo} alt="Yasodha Dairy" style={{ height: "55px" }} />
</div>
        <nav className="nav-links">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              type="button"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn-primary nav-cta"
          onClick={() => scrollToSection('app')}
        >
          Download App
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;


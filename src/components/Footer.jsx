import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-inner glassy"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-column">
          <div className="nav-logo">
            <div className="nav-logo-mark">YD</div>
            <div className="nav-logo-text">
              <span>Yasodha</span>
              <span>Dairy</span>
            </div>
          </div>
          <p className="footer-tagline">
            Premium farm-fresh dairy delivered chilled every morning within a 15km radius.
          </p>
          <div className="footer-social">
            <button type="button" aria-label="Instagram" className="social-icon">
              IG
            </button>
            <button type="button" aria-label="Facebook" className="social-icon">
              FB
            </button>
            <button type="button" aria-label="Twitter" className="social-icon">
              X
            </button>
          </div>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">Story</a>
            </li>
            <li>
              <a href="#nutrition">Nutrition</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>Fresh Milk</li>
            <li>Paneer</li>
            <li>Butter & Ghee</li>
            <li>Milk Sweets</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get the App</h4>
          <button type="button" className="store-badge">
            <span className="store-label">GET IT ON</span>
            <span className="store-name">Google Play(Coming Soon)</span>
          </button>
          <button type="button" className="store-badge store-badge-outline">
            <span className="store-label">Download on the</span>
            <span className="store-name">App Store(Coming Soon)</span>
          </button>
        </div>
      </motion.div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Yasodha Dairy. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;


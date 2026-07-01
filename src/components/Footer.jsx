import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import appQr from '../assets/app_qr.png';

const Footer = () => {
  

  return (
    <>
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
              Premium fresh dairy products delivered chilled every morning within a 5km radius.
            </p>

            <div className="footer-social">
              <a href="https://instagram.com/yasodairies1986" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
              <a href="https://facebook.com/YashodhaDairies" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">Story</a></li>
              <li><a href="#nutrition">Community</a></li>
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
  <h4>Download Our App</h4>

  <img
    src={appQr}
    alt="QR Code"
    className="footer-qr"
  />

  <a
    href="https://play.google.com/store/apps/details?id=com.yashodhadairies.app"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
    style={{ marginTop: "12px" }}
  >
    Google Play
  </a>
</div>

        </motion.div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Yasodha Dairy. All rights reserved.A Unit Of MOHAN RAJ GAYATHRI DEVI
          </span>
        </div>

        {/* 🔥 BUTTON */}
        <div className="footer-bottom">
         <Link to="/privacy" className="policy-btn">
  Privacy & Refund Policy
</Link>
        </div>
      </footer>

    
    </>
  );
};

export default Footer;
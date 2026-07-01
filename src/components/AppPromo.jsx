import React from 'react';
import appHome from '../assets/app_home.png';
import { motion } from 'framer-motion';

const AppPromo = () => {
  return (
    <section className="section app-promo-section">
      <motion.div
        className="app-promo glassy"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="app-promo-text">
          <h2><h2>Download Our App 🚀</h2></h2>
        <p>
  Order fresh dairy products, manage subscriptions, track deliveries,
  and enjoy a seamless shopping experience with the Yasodha Dairies App.
  Download now and get fresh dairy delivered to your doorstep.
</p>

          {/* COMING SOON BUTTON */}
   <div className="app-download-row">
  <a
    href="https://play.google.com/store/apps/details?id=com.yashodhadairies.app"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary"
  >
    Download on Play Store
  </a>
</div>
        </div>

        {/* PHONE MOCK */}
        <motion.div
          className="app-phone-mock glassy"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="phone-screen">
           

          <div className="phone-body app-screenshot-container">
  <img
    src={appHome}
    alt="Yasodha Dairies App"
    className="app-screenshot"
  />
</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppPromo;
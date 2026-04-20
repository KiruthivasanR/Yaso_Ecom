import React from 'react';
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
          <h2>Our App is Coming Soon 🚀</h2>
          <p>
            We are working on a smart dairy management app that will help you
            manage subscriptions, track deliveries, and handle payments easily.
            Stay tuned for the launch!
          </p>

          {/* COMING SOON BUTTON */}
          <div className="app-download-row">
            <button type="button" className="btn btn-primary" disabled>
              Coming Soon on Play Store & App Store
            </button>
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
            <div className="phone-header">
              <span>Yasodha Dairy App</span>
            </div>

            <div className="phone-body">
              <div className="phone-card">
                <span className="phone-card-title">🚀 Coming Soon</span>
                <p>Smart dairy management at your fingertips</p>
              </div>

              <div className="phone-card phone-card-secondary">
                <span className="phone-card-title">Stay Updated</span>
                <p>Launching soon on Android & iOS</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AppPromo;
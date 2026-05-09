import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [open, setOpen] = useState(false);

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
          <span>
            © {new Date().getFullYear()} Yasodha Dairy. All rights reserved.A Unit Of MOHAN RAJ GAYATHRI DEVI
          </span>
        </div>

        {/* 🔥 BUTTON */}
        <div className="footer-bottom">
          <button className="policy-btn" onClick={() => setOpen(true)}>
            Privacy & Refund Policy
          </button>
        </div>
      </footer>

      {/* 🔥 POPUP */}
      {open && (
        <div className="policy-modal">
          <div className="policy-content">
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

<h2>Privacy Policy</h2>

<h4>1. Information We Collect</h4>
<p>
We collect basic personal details such as name, phone number, email address, delivery address, and payment details when you register or place orders on our app or website.
</p>

<h4>2. How We Use Your Information</h4>
<p>
Your information is used to:
</p>
<ul>
  <li>Process and deliver orders</li>
  <li>Manage subscriptions (milk, paneer, etc.)</li>
  <li>Improve our services</li>
  <li>Send updates, offers, and notifications</li>
</ul>

<h4>3. Data Collection Methods</h4>
<ul>
  <li>Account registration</li>
  <li>Order placement</li>
  <li>Customer support interactions</li>
  <li>App usage (device & location for delivery)</li>
</ul>

<h4>4. Sharing of Information</h4>
<p>We do not sell your personal data. We may share data only with:</p>
<ul>
  <li>Delivery partners</li>
  <li>Payment gateways</li>
  <li>Service providers (app/website operations)</li>
</ul>

<h4>5. Data Security</h4>
<p>
We use secure servers and encryption to protect your personal data from unauthorized access, loss, or misuse.
</p>

<h4>6. Cookies & Tracking</h4>
<p>
Our website/app may use cookies and analytics tools to improve user experience and understand customer preferences.
</p>

<h4>7. User Rights</h4>
<ul>
  <li>Access your data</li>
  <li>Update or correct information</li>
  <li>Request account deletion</li>
  <li>Opt out of marketing messages</li>
</ul>

<h4>8. Data Retention</h4>
<p>
We keep your data only as long as necessary for providing services and legal/accounting requirements.
</p>

<h4>9. Third-Party Links</h4>
<p>
Our app or website may contain links to third-party services. We are not responsible for their privacy practices.
</p>

<h4>10. Policy Updates & Contact</h4>
<p>
We may update this Privacy Policy from time to time.
</p>
<p>📧 yasodairies@gmail.com</p>
<p>📞 +91 95979 51766</p>

<hr />

<h2>Refund Policy</h2>
<p>
Due to the perishable nature of dairy products, all orders are non-refundable and non-returnable. Please report any quality concerns at the time of delivery.
</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
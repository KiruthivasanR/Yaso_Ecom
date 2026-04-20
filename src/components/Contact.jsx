import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.currentTarget.querySelector('#name')?.value?.trim() ?? '';
    const mobile = e.currentTarget.querySelector('#mobile')?.value?.trim() ?? '';
    const message = e.currentTarget.querySelector('#message')?.value?.trim() ?? '';

    try {
      if (!window.emailjs) throw new Error('EmailJS not loaded');

      await window.emailjs.send('service_cfycau6', 'template_7xv6ox9', {
        first_name: name,
        mobile,
        message
      });

      alert('Message sent successfully');
      e.currentTarget.reset();
    } catch {
      alert('Failed to send message');
    }
  };

  return (
    <section className="section contact-section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Have questions about our milk, delivery, or app? We&apos;d love to hear from you.</p>
      </div>
      <div className="contact-grid">
        <motion.div
          className="contact-card glassy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Reach Us</h3>
          <p className="contact-detail">
            <strong>Address:</strong> 101, Anna Salai, J C K Nagar, Chengalpattu, Hanumanthai, Tamil Nadu 603001
          </p>
          <p className="contact-detail">
            <strong>Phone:</strong> +91-7200451986
          </p>
          <p className="contact-detail">
            <strong>Email:</strong> yasodairies@gmail.com
          </p>
          <div className="map-embed glassy">
            <iframe
              title="Yasodha Dairy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3213091335633!2d79.97749809999999!3d12.6924393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fdefe928bb27%3A0xfc6d93e4d2ee458d!2sYashodha%20Dairies!5e0!3m2!1sen!2sin!4v1776668900548!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
        <motion.form
          className="contact-form glassy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <h3>Send a Message</h3>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-row">
            <label htmlFor="mobile">Phone</label>
            <input id="mobile" type="tel" placeholder="Enter your phone number" required />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us how we can help you"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;


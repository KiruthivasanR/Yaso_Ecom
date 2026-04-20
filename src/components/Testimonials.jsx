import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Working Mom, Coimbatore',
    quote: 'Freshest milk I have ever tasted. Always delivered before 6 AM – my kids love it.',
    avatar: 'PS'
  },
  {
    name: 'Rahul Verma',
    role: 'Fitness Enthusiast',
    quote:
      'High protein paneer and clean label products. The app makes it super easy to manage my diet.',
    avatar: 'RV'
  },
  {
    name: 'Lakshmi Iyer',
    role: 'Home Chef',
    quote:
      'Their ghee and butter have changed the way my sweets taste. Pure, aromatic and consistent.',
    avatar: 'LI'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="section">
      <div className="section-header">
        <h2>What Our Customers Say</h2>
        <p>Loved by thousands of families who start their day with Yasodha Dairy.</p>
      </div>
      <div className="testimonials-wrapper glassy">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            className="testimonial-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonial-header">
              <div className="avatar-circle">{current.avatar}</div>
              <div>
                <h3>{current.name}</h3>
                <span className="testimonial-role">{current.role}</span>
              </div>
            </div>
            <p className="testimonial-quote">“{current.quote}”</p>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={String(i)}
                  type="button"
                  className={`dot ${i === index ? 'dot-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;


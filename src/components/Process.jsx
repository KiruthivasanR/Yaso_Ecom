import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Milk collected from healthy cows',
    description: 'We source milk from well-fed, stress-free cows on our own partner farms.'
  },
  {
    title: 'Quality tested in lab',
    description:
      'Every batch is checked for adulteration, antibiotics, and temperature before processing.'
  },
  {
    title: 'Packed hygienically',
    description: 'Milk is pasteurised and packed in fully automated, contactless lines.'
  },
  {
    title: 'Delivered within 5km radius',
    description:
      'Insulated delivery partners bring chilled milk to your doorstep every morning.'
  }
];

const Process = () => {
  return (
    <section className="section section-muted">
      <div className="section-header">
        <h2>From Farm to Your Doorstep</h2>
        <p>Every step is designed to keep your milk as pure as it is on the farm.</p>
      </div>
      <div className="process-timeline">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="process-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="process-icon glassy">
              <span>{index + 1}</span>
            </div>
            <div className="process-content glassy">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="process-line" />
      </div>
    </section>
  );
};

export default Process;


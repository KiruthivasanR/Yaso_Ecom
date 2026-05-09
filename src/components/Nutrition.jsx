import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Yokesh',
    position: 'Government Employee',
    location: 'Perungalathur',
    review:
      'The freshness and consistency are really good. Daily delivery has been smooth and reliable.',
    accent: 'milk'
  },
  {
    name: 'Ananthi R',
    position: 'Home Maker',
    location: 'Tambaram',
    review:
      'Packaging quality and overall product experience are impressive. Perfect for our regular requirements.',
    accent: 'paneer'
  },
  {
    name: 'Gayathri',
    position: 'Homemaker',
    location: 'Velachery',
    review:
      'Very satisfied with the service and product quality. Everything feels clean and professionally handled.',
    accent: 'butter'
  },
  {
    name: 'Ravi prashanth',
    position: 'TCS Working Professional',
    location: 'Sozhinganallur',
    review:
      'Ordering and delivery experience has been excellent. Consistent quality every time.',
    accent: 'ghee'
  }
];

const Nutrition = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Trusted by Everyday Customers</h2>

        <p>
          Genuine experiences shared by customers who regularly choose
          Yashodha Dairies products and delivery service.
        </p>
      </div>

      <div className="nutrition-grid">
        {testimonials.map((card, index) => (
          <motion.article
            key={card.name}
            className={`nutrition-card glassy nutrition-${card.accent}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '18px'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '20px',
                  boxShadow: '0 10px 20px rgba(34,197,94,0.25)'
                }}
              >
                {card.name.charAt(0)}
              </div>

              <div>
                <h3
                  style={{
                    marginBottom: '4px'
                  }}
                >
                  {card.name}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: '14px',
                    color: '#22c55e',
                    fontWeight: 600
                  }}
                >
                  {card.position}
                </p>

                <p
                  style={{
                    fontSize: '13px',
                    opacity: 0.7,
                    margin: '2px 0 0 0'
                  }}
                >
                  {card.location}
                </p>
              </div>
            </div>

            <p
              style={{
                lineHeight: '1.9',
                fontSize: '16px',
                color: '#64748b',
                minHeight: '120px'
              }}
            >
              “{card.review}”
            </p>

            <div className="nutrition-bar">
              <div className="nutrition-bar-fill" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Nutrition;
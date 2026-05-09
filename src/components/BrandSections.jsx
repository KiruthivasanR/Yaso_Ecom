import React from 'react';
import { motion } from 'framer-motion';

const serviceCards = [
  {
    icon: '📦',
    title: 'Place Order',
    description:
      'Customers can order products easily through our Application.'
  },
  {
    icon: '🧼',
    title: 'Prepared Carefully',
    description:
      'Products are packed carefully with cleanliness and consistency in mind.'
  },
  {
    icon: '🚚',
    title: 'Quick Delivery',
    description:
      'Orders are dispatched efficiently for smooth doorstep delivery with in 2 days.'
  },
  {
    icon: '⭐',
    title: 'Customer Support',
    description:
      'Our team stays connected to ensure a smooth customer experience.'
  }
];

const BrandSections = () => {
  return (
    <>
      {/* ================= BRAND STORY ================= */}

      <section className="section">
        <div className="section-header">
          <h2>Our Brand Story</h2>

          <p>
            A journey built with consistency, customer trust, and modern
            delivery convenience.
          </p>
        </div>

        <motion.article
          className="nutrition-card glassy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px'
          }}
        >
          <div
            style={{
              fontSize: '50px',
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            ✨
          </div>

          <h3
            style={{
              textAlign: 'center',
              marginBottom: '24px',
              fontSize: '28px'
            }}
          >
            From a Small Beginning to Trusted Daily Service
          </h3>

          <p
            style={{
              lineHeight: '2',
              fontSize: '17px',
              color: '#64748b',
              textAlign: 'center'
            }}
          >
            Yashodha Dairies started with a simple goal — to make everyday
            dairy products more accessible, reliable, and convenient for
            customers.

            <br /><br />

            What began as a small initiative gradually grew through customer
            trust, consistent service, and quality-focused operations.

            <br /><br />

            Today, Yashodha Dairies continues serving households and businesses
            through streamlined ordering, organized delivery systems, and a
            growing digital experience including app-based ordering and customer
            support.
          </p>
        </motion.article>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="section">
        <div className="section-header">
          <h2>How Our Service Works</h2>

          <p>
            A simple process focused on smooth ordering, careful preparation,
            and reliable delivery.
          </p>
        </div>

        <div className="nutrition-grid">
          {serviceCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="nutrition-card glassy"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                style={{
                  fontSize: '42px',
                  marginBottom: '18px'
                }}
              >
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p
                style={{
                  lineHeight: '1.9',
                  color: '#64748b',
                  marginTop: '14px'
                }}
              >
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BrandSections;
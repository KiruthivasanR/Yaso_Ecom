import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Milk Nutrition',
    items: ['High-quality protein', 'Rich in calcium & B12', 'Supports bone health'],
    accent: 'milk'
  },
  {
    title: 'Paneer Nutrition',
    items: ['Protein-dense', 'Good fats', 'Perfect for muscle building'],
    accent: 'paneer'
  },
  {
    title: 'Butter Nutrition',
    items: ['Vitamin A & E', 'Energy rich', 'Great for traditional cooking'],
    accent: 'butter'
  },
  {
    title: 'Ghee Nutrition',
    items: ['Healthy fats', 'Aids digestion', 'Boosts immunity'],
    accent: 'ghee'
  }
];

const Nutrition = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Dairy That Nourishes</h2>
        <p>Clean labels, no hidden ingredients – just honest nutrition in every scoop.</p>
      </div>
      <div className="nutrition-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className={`nutrition-card glassy nutrition-${card.accent}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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


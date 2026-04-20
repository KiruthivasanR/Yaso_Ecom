import React from 'react';
import { motion } from 'framer-motion';

// ✅ IMPORT YOUR IMAGES
import milk from '../assets/yaso_milk.png';
import ghee from '../assets/yaso_ghee.png';
import palkova from '../assets/yaso_palkova.png';
import milkcake from '../assets/yaso_cake.png';
import butter from '../assets/yaso_butter.png';
import paneer from '../assets/yaso_panner.png';

// ✅ ADD IMAGE TO EACH CATEGORY
const categories = [
  { name: 'Fresh Milk', image: milk },
  { name: 'Ghee', image: ghee },
  { name: 'Palkova', image: palkova },
  { name: 'Milk Cake', image: milkcake },
  { name: 'Butter', image: butter },
  { name: 'Paneer', image: paneer }
];

const Categories = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Explore Our Categories</h2>
        <p>From fresh milk to traditional sweets, crafted with pure dairy.</p>
      </div>

     <motion.div
  className="categories-grid"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {categories.map((cat, index) => (
    <motion.div
      key={index}
      className="category-card glassy premium-card"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        rotateX: 5,
        rotateY: -5
      }}
      transition={{ type: 'spring', stiffness: 180 }}
    >
      {/* Glow background */}
      <div className="category-glow"></div>

      {/* Image */}
      <div className="category-circle premium-circle">
        <img src={cat.image} alt={cat.name} className="category-img" />
      </div>

      {/* Title */}
      <span className="category-title">{cat.name}</span>
    </motion.div>
  ))}
</motion.div>
    </section>
  );
};

export default Categories;
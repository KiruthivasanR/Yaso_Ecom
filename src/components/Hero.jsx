import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ✅ ONLY GHEE IMAGE
import ghee from '../assets/yaso_ghee.png'; // change if you have better ghee image

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      
      {/* Background effect */}
      <motion.div
        className="hero-bg-layer"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
        }}
      />

      <motion.div
        className="hero-content glassy"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        {/* LEFT TEXT */}
        <div className="hero-text">
          
          <span className="hero-tag">
           Freshly Prepared • No Added Preservatives
          </span>

          <h1 className="hero-title">
          Fresh Dairy Delivered Daily
            <span className="hero-highlight"> Delivered Daily</span>
          </h1>

          <p className="hero-subtitle">
            Carefully prepared dairy products for everyday convenience and reliable,
            delivered chilled within a 15km radius every single morning.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary">Download App</button>
            <button className="btn btn-ghost">View Products</button>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* MAIN GHEE CARD */}
          <div className="hero-main-card glassy">
            <img src={ghee} alt="Ghee" className="hero-ghee-img" />
            
            <div className="hero-product-badge">
              Pure Ghee
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
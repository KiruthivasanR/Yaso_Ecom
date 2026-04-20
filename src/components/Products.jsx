import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

// IMAGES
import milk from '../assets/yaso_milk.png';
import paneer from '../assets/yaso_panner.png';
import butter from '../assets/yaso_butter.png';
import ghee from '../assets/yaso_ghee.png';

const productData = [
  {
    name: 'Farm Fresh Milk',
    image: milk,
    description: 'Rich, creamy cow milk collected every morning.',
    variants: [
      { quantity: '500ml', price: '₹35' },
      { quantity: '1L', price: '₹65' }
    ]
  },
  {
    name: 'Soft Paneer',
    image: paneer,
    description: 'Soft, spongy paneer made from fresh milk.',
    variants: [
      { quantity: '200g', price: '₹120' },
      { quantity: '500g', price: '₹270' }
    ]
  },
  {
    name: 'White Butter',
    image: butter,
    description: 'Hand-churned fresh butter.',
    variants: [{ quantity: '200g', price: '₹180' }]
  },
  {
    name: 'Aromatic Ghee',
    image: ghee,
    description: 'Golden pure  ghee.',
    variants: [
      { quantity: '500ml', price: '₹400' },
      { quantity: '1L', price: '₹780' }
    ]
  }
];

const Products = () => {
  const [selected, setSelected] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  // 👉 IMAGE ONLY 3D ROTATION
 const handleMouseMove = (e, el) => {
  const img = el.querySelector('.product-img');

  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;

  img.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
  `;
};

const resetTilt = (el) => {
  const img = el.querySelector('.product-img');
  img.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
};

  return (
    <section className="section premium-products-section">

      {/* 🥛 LIQUID MILK ANIMATION */}
      <div className="milk-liquid">
        <svg viewBox="0 0 1440 320" className="milk-liquid-svg" aria-hidden>
          <path
            fill="currentColor"
            fillOpacity="0.7"
            d="M0,160L60,170C120,180,240,200,360,197C480,195,600,171,720,160C840,149,960,149,1080,170C1200,192,1320,235,1380,256L1440,277L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
              M0,160L60,170C120,180,240,200,360,197C480,195,600,171,720,160C840,149,960,149,1080,170C1200,192,1320,235,1380,256L1440,277L1440,320L0,320Z;
              M0,180L60,150C120,120,240,120,360,150C480,180,600,220,720,210C840,200,960,140,1080,140C1200,140,1320,200,1380,230L1440,260L1440,320L0,320Z;
              M0,160L60,170C120,180,240,200,360,197C480,195,600,171,720,160C840,149,960,149,1080,170C1200,192,1320,235,1380,256L1440,277L1440,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="section-header">
        <h2>Signature Dairy Products</h2>
        <p>Crafted daily in small batches for peak freshness.</p>
      </div>

      <div className="products-grid">
        {productData.map((product, i) => {
          const startingPrice = product.variants[0].price;

          return (
            <div
              key={i}
              className="product-card premium-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >
              <div className="product-image">
                <div className="floating-badge">100% Fresh</div>
                <img src={product.image} alt={product.name} className="product-img" />
              </div>

              <div className="product-body">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="starting-price">
                  Starting from <span>{startingPrice}</span>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelected(product);
                    setSelectedVariantIndex(0);
                  }}
                >
                  Check Options
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      <Modal
        open={Boolean(selected)}
        title={selected?.name ?? 'Product options'}
        maxWidth={400}
        onClose={() => setSelected(null)}
      >
        {selected ? (
          <div className="product-options-modal">
            <h3 className="product-options-title">{selected.name}</h3>
            <p className="product-options-desc">{selected.description}</p>

            <div className="product-variant-list" role="listbox" aria-label="Quantity variants">
              {selected.variants.map((v, i) => (
                <button
                  key={`${v.quantity}-${v.price}`}
                  type="button"
                  className={`product-variant ${i === selectedVariantIndex ? 'product-variant-active' : ''}`}
                  onClick={() => setSelectedVariantIndex(i)}
                  role="option"
                  aria-selected={i === selectedVariantIndex}
                >
                  <span className="product-variant-qty">{v.quantity}</span>
                  <span className="product-variant-price">{v.price}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>

    </section>
  );
};

export default Products;
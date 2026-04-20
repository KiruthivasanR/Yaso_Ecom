import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

/**
 * Reviews data - can be replaced with API call for scalability.
 */
export const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Chennai, Anna Nagar',
    rating: 5,
    comment: 'Freshest milk I have ever tasted. Always delivered before 6 AM – my kids love it.',
    verified: true,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    location: 'Coimbatore, RS Puram',
    rating: 5,
    comment: 'High protein paneer and clean label products. The app makes it super easy to manage my diet.',
    verified: true,
  },
  {
    id: 3,
    name: 'Lakshmi Iyer',
    location: 'Bengaluru, Indiranagar',
    rating: 5,
    comment: 'Their ghee and butter have changed the way my sweets taste. Pure, aromatic and consistent.',
    verified: true,
  },
  {
    id: 4,
    name: 'Arjun Nair',
    location: 'Chennai, Velachery',
    rating: 5,
    comment: 'Delivery is punctual and the taste feels genuinely farm-fresh. Premium quality every day.',
    verified: true,
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    location: 'Madurai, KK Nagar',
    rating: 5,
    comment: 'Clean packaging, consistent freshness, and the subscription flow is effortless. Highly recommend.',
    verified: true,
  },
];

const Star = ({ filled }) => (
  <span className={`review-star ${filled ? 'review-star-filled' : ''}`} aria-hidden>
    ★
  </span>
);

const StarRating = ({ rating }) => (
  <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} filled={i < rating} />
    ))}
  </div>
);

const ReviewCard = ({ review, index }) => (
  <motion.article
    className="review-card review-card-compact"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{
      y: -4,
      transition: { duration: 0.3 },
    }}
  >
    <div className="review-top">
      <div className="review-avatar" aria-hidden>
        {review.name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </div>
      <div className="review-meta">
        <div className="review-name-row">
          <h3 className="review-name">{review.name}</h3>
          {review.verified ? (
            <span className="review-verified" title="Verified Customer">
              ✔ Verified Customer
            </span>
          ) : null}
        </div>
        <div className="review-subrow">
          <span className="review-location">{review.location}</span>
          <StarRating rating={review.rating} />
        </div>
      </div>
    </div>
    <p className="review-quote">“{review.comment}”</p>
  </motion.article>
);

const CustomerReviews = () => {
  const trustedCount = useMemo(() => '1000+', []);

  return (
    <section className="section section-reviews" id="reviews">
      <AnimatedSection className="section-header">
        <h2>Trusted by {trustedCount} Happy Customers</h2>
        <p>A premium, verified review feed—just like your delivery app.</p>
      </AnimatedSection>

      <div className="phone-reviews-layout">
        <div className="phone-reviews-bg" aria-hidden />

        <motion.div
          className="phone-shell"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="phone-notch" aria-hidden />
          <div className="phone-screen phone-reviews-screen">
            <div className="phone-screen-header">
              <span className="phone-screen-title">Customer reviews</span>
              <span className="phone-screen-pill">✔ Verified</span>
            </div>

            <div className="phone-reviews-viewport" aria-label="Auto-scrolling customer reviews">
              <div className="phone-reviews-track">
                {[...REVIEWS, ...REVIEWS].map((review, i) => (
                  <ReviewCard key={`${review.id}-${i}`} review={review} index={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

/**
 * Reviews data - can be replaced with API call for scalability.
 */
export const REVIEWS = [
  {
    id: 1,
    name: 'Ramadevi murugan',
    location: '',
    rating: 4,
    comment: 'அண்ணா நெய் ரொம்ப வாசனையா இருக்கு அம்மா ரொம்ப நல்லா இருக்கு சொல்ல என்னோட 7 மாத குழந்தைக்கு உங்க நெய் தான் கொடுக்கிறேன் ரொம்ப நன்றி நல்ல சுத்தமான பசுநெய் கொடுப்பதற்காக 🙏🙏🙏',
    verified: true,
  },
  {
    id: 2,
    name: 'Sukumari',
    location: '',
    rating: 4.5,
comment: 'The ghee you sent this time is 200% world class. Please maintain the same. It is manamai.. Manal manlai. It is too very excellent 👍',
    verified: true,
  },
  {
    id: 3,
    name: 'saravanan',
    location: '',
    rating: 5,
    comment: 'சுத்தமான சுவையான நெய் கிடைத்தது மிக நீண்ட காலத்திற்கு பின் மணம் மிக அருமை புளித்தமான மணம் நெய்யின் சுவை அருமை',
    verified: true,
  },
  {
    id: 4,
    name: 'Chandran',
    location: '',
    rating: 5,
    comment: 'Ghee received bro.. Thanks..Packing was excellent..Never seen such a tight packing even air cant enter..It shows your dedication and hard work in the work you do..Great.. Keep going...👍👏',
    verified: true,
  },
  {
    id: 5,
    name: 'Vijay',
    location: '',
    rating: 3,
    comment: 'Regarding products, I would like to say fantastic.The aroma of ghee is wow, very good and tastes very natural.Coming to Palkova, it tasted so sweet and we cant stop eating. Excellent taste.Will let you know about butter shortly.My request is to maintain the same consistency in quality and provide the same tasty products.Definitely I will recommend these products to my friends to make use of these products.Once again thanks for all tasty products 😊😊😊',
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

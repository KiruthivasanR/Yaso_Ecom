import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import Products from '../components/Products.jsx';
import BrandSections from '../components/BrandSections.jsx';
import AppPromo from '../components/AppPromo.jsx';
import CustomerReviews from '../components/CustomerReviews.jsx';
import Contact from '../components/Contact.jsx';
import Nutrition from '../components/Nutrition.jsx';
import Footer from '../components/Footer.jsx';
import ThemeSwitcher from '../components/ThemeSwitcher.jsx';

const Home = () => {
  return (
    <div className="app-root">
      <ThemeSwitcher className="theme-switcher-fixed" />

      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>
     <section id="brand">
          <BrandSections />
        </section>
        <section id="categories">
          <Categories />
        </section>

        <section id="products">
          <Products />
        </section>

        {/* ✅ NEW BRAND SECTION */}
   
         <section id="nutrition">
          <Nutrition />
        </section>

        <section id="reviews">
          <CustomerReviews />
        </section>

        <section id="app">
          <AppPromo />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
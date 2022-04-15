import React from 'react';

import Header from '../partials/Header';
import HeroBlog from '../partials/HeroBlog';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Carousel from '../partials/Carousel';
import TrendingArticles from '../partials/TrendingArticles';
import GoldCanvasBlur from '../partials/blurs/GoldCanvasBlur';
// import Cta from '../partials/Cta';
// import RelatedPosts from '../partials/RelatedPosts';
import Footer from '../partials/Footer';

function Blog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroBlog />
        
        <Carousel />
        <TestimonialsCarousel />
        
        {/* <TrendingArticles /> */}
        {/* <RelatedPosts /> */}
        {/* <Cta /> */}

      </main>

      {/*  Site Footer */}
      <Footer />

    </div>
  );
}

export default Blog;
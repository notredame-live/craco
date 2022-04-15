import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Header from '../../partials/Header';
import HeroBlog from '../../partials/HeroBlog';
import BlogList from '../../partials/BlogList';
import Footer from '../../partials/Footer';
import Cta from '../../partials/Cta';

function Blog() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroBlog />
        <BlogList />
        <Cta />

      </main>

      {/*  Site Footer */}
      <Footer />

    </div>
  );
}

export default Blog;
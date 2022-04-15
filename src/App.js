import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import About from './pages/About';
import Tips from './pages/__/tips/index';
import Demo from './pages/demo/index';
import Blog from './pages/blog/index';
import BlogPostOne from './pages/season/1960/index';
import BlogPostTwo from './pages/season/1964/index';
import BlogPostThree from './pages/season/1966/index';
import Contact from './pages/Contact';
import Help from './pages/Help';
import PageNotFound from './pages/PageNotFound';

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://notre-dame-live-default-rtdb.firebaseio.com"
// });

function App() {

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
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/__/tips">
          <Tips />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/season/1960">
          <BlogPostOne />
        </Route>
        <Route path="/season/1964">
          <BlogPostTwo />
        </Route>
        <Route path="/season/1966">
          <BlogPostThree />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;

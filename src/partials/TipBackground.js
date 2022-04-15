import React from 'react';
import { Link } from 'react-router-dom';

import AuthorTag from './AuthorTag';
import TipBackground from './TipBackground';

function TipBackground() {
  return (
    <section className="relative">

      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <img className="flex flex-grow object-cover opacity-25" src={require('../images/clover-background.svg').default} layout="fill" alt="About" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">

          {/* Featured article */}
          <div className="max-w-3xl" data-aos="fade-down">
            <article>
              <div>
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <Link to="/blog">
                    <h1 className="h1 font-red-hat-display mb-4"></h1>
                  </Link>
                    <h1 className="h2 font-red-hat-display mb-4">Notre Dame Live</h1>
                  {/* <p className="text-xl text-gray-600 dark:text-gray-400">A Notre Dame Blog</p> */}
                </div>

                <div>
                  <AuthorTag align="left"/>
                </div>

              </div>
            </article>
          </div>

        </div>
      </div>

    </section>
  );
}

export default TipBackground;
import React from 'react';

import AuthorTag from './AuthorTag'
import Cta from './Cta';
import ContactDevForm from './ContactDevForm';
import BlogButton from './buttons/BlogButton';
import HomeButton from './buttons/HomeButton';

function BlogSingleThree() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content">
        <img className="sticky inset-0 w-full h-full object-cover opacity-25" src={require('../images/notre-dame-network.jpg').default} width="1440" height="577" alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              {/* Article header */}
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">"Addendum Number Two"</h1>
                  <p className="text-xl text-gray-400 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Post #2</p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">
                  
                  {/* Author meta */}
                  <div className="flex items-center justify-center" data-aos="fade-down" data-aos-delay="300">
                    <AuthorTag />
                  </div>
                </div>
              </header>
              <hr className="w-5 h-px pt-px bg-gray-500 dark:bg-gray-500 border-0 mb-8" data-aos="fade-down" data-aos-delay="450" />

              {/* Article content */}
              <div className="text-lg text-gray-400 dark:text-gray-400" data-aos="fade-up" data-aos-delay="450">
                <p className="mb-8">
                  <strong className="font-medium text-gray-100 dark:text-gray-100">The first time I received emotional pain from the University of Southern California was 1964. The  Irish were on their way to another national championship and only had a mediocre USC team left.</strong>
                </p>

                <figure className="mb-8">
                  <img className="w-full" src={require('../images/notre-dame-stadium.svg').default} width="768" height="432" alt="News inner" />
                  <figcaption className="text-xs text-center text-gray-500 mt-3">Photo credit: @alexmertz on Unsplash</figcaption>
                </figure>

                <p className="mb-8">
                  John Huart was the All American quarterback and Jack Snow was the All-American wide receiver.  Jack Snow, unlike today's receivers, did not need gloves. If his finger touched the ball he would catch it. The Irish were 9-0 and were on their way to a National championship with only a game over a mediocre USC team left, but it wasn't meant to be. The Irish lost 20-17.
                </p>

                <p className="mb-8 text-gray-300 dark;text-gray-300">
                It won't be the first time a mediocre USC spoiled the Irish hopes.  I woke up in the middle of the night with sadness like someone died in my family. This is not an embellished,its a curse. I realized at that time I may have a problem and it has stayed with me my entire life.

                </p>

                <figure className="mb-8">
                  <img className="w-full" src={require('../images/notre-dame-stadium.svg').default} width="768" height="432" alt="News inner" />
                  <figcaption className="text-xs text-center text-gray-500 mt-3">Photo credit: @alexmertz on Unsplash</figcaption>
                </figure>
              </div>

              <div>
                <HomeButton />
                <BlogButton />
                <br />
              </div>

              <div>
                <Cta />
              </div>
                
              <div>
                <ContactDevForm />
              </div>
                
            </article>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSingleThree;
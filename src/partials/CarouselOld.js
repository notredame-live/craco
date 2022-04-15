import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import BlogButton from './buttons/BlogButton';

Swiper.use([Autoplay, Navigation]);

function Carousel() {

  const [unlockedCard, setUnlockedCard] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      lazy: true,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <h1 className="h2 font-red-hat-display mb-4">From rough design files, to powerful products</h1> */}
            {/* <p className="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">

            {/* First Card */}
            {/* <div className="swiper-slide max-w-lg border border-outline border-shadowed">
              <Link to="/blog/post/1/#/__/October/24/2021/">
                <a className="flex justify-center text-xs font-medium text-center text-white py-2 px-3 bg-ndblue-100 bg-opacity-50 hover:bg-opacity-100 border-2 border-gold-100 transition duration-150 ease-in-out focus:blur">"The First Summer"</a>
                <span>
                  <h1 className="inline-flex flex-grow justify-center text-gray-300 text-xs bg-transparent bg-opacity-25 mx-auto self-center">Oct 24th, 2021</h1>
                </span>  
                  <img className="transition-opacity duration-300" src={require('../images/carousel-item-01.svg').default} width="540" height="460" alt="Carousel item 01" />
                  <br />
                  <div className="absolute bottom-0 right-0 p-6">
                  
                    <span className="inline-flex flex-grow justify-center text-gray-300 text-xs bg-transparent hover:underline bg-opacity-25 mx-auto self-center">
                    </span>
                  </div>
              </Link>
            </div> */}

            {/* Post 1 */}
            <Link to="/post/1" className="swiper-slide max-w-lg border border-outline border-shadowed hover:border-teal-500 hover:border-2 cursor-pointer">
              <img className="transition-opacity duration-300" src={require('../images/carousel-item-02.svg').default} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="absolute bottom-0 right-0 p-6">
                  {/* <a className="text-xs font-medium text-center text-white py-2 px-3 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out">Nov 28th, 2021</a> */}
                  
                  <br />
                  <a className="flex justify-center text-xs font-medium text-center text-white py-2 px-3 bg-ndblue-100 bg-opacity-50 hover:bg-opacity-100 border-2 border-gold-200 dark:border-gold-200 hover:border-gold-100 dark:hover:border-gold-100 transition duration-150 ease-in-out focus:blur">Click Here</a>
                  <h5 className="text-sm text-center text-gray-400">Post 1</h5>
                </div>
              </div>
            </Link>

            <Link to="/#post-coming-soon"className="swiper-slide max-w-lg border border-outline border-shadowed hover:border-red-500 hover:border-2 cursor-pointer">
              <img className="transition-opacity duration-300" src={require('../images/carousel-item-04.svg').default} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="">Post Locked</a>
                  <h5 className="text-xs text-gray-400 bottom-0 right-0"></h5>
                </div>
              </div>
            </Link>

            <Link to="/#post-coming-soon"className="swiper-slide max-w-lg border border-outline border-shadowed hover:border-red-500 hover:border-2 cursor-pointer">
              <img className="transition-opacity duration-300" src={require('../images/carousel-item-03.svg').default} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#month/date/year/post-3">Post Locked</a>
                  <h5 className="text-xs text-gray-400 bottom-0 right-0"></h5>
                </div>
              </div>
            </Link>

            <Link to="/#post-coming-soon"className="swiper-slide max-w-lg border border-outline border-shadowed hover:border-red-500 hover:border-2 cursor-pointer">
              <img className="transition-opacity duration-300" src={require('../images/carousel-item-05.svg').default} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#month/date/year/post-3">Post Locked</a>
                  <h5 className="text-xs text-gray-400 bottom-0 right-0"></h5>
                </div>
              </div>
            </Link>

            <Link to="/#post-coming-soon"className="swiper-slide max-w-lg border border-outline border-shadowed hover:border-red-500 hover:border-2 cursor-pointer">
              <img className="transition-opacity duration-300" src={require('../images/carousel-item-06.svg').default} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#month/date/year/post-3">Post Locked</a>
                  <h5 className="text-xs text-gray-400 bottom-0 right-0"></h5>
                </div>
              </div>
            </Link>

            <Link to="/#post-coming-soon"className="swiper-slide max-w-lg border border-outline border-shadowed hover:border-red-500 hover:border-2 cursor-pointer">
              <img className="transition-opacity duration-300" src={require('../images/carousel-item-01.svg').default} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="absolute bottom-0 right-0 p-6">
                  <a className="text-xs font-medium text-center text-white py-2 px-3 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out" href="#month/date/year/post-3">Post Locked</a>
                  <h5 className="text-xs text-gray-400 bottom-0 right-0"></h5>
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 hover:bg-teal-500 bg-teal-500 bg-opacity-25 dark:bg-ndblue-100 dark:hover:text-white  transition duration-150">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>

            <div>
              <BlogButton />
            </div>

            <button className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 hover:bg-teal-500 bg-teal-500 bg-opacity-25 dark:bg-ndblue-100 dark:hover:text-white  transition duration-150">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-whitetransition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Carousel;
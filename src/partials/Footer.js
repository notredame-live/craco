import React from 'react';
import { Link } from 'react-router-dom';

import GoldCanvasBlur from './blurs/GoldCanvasBlur';
// import TipButton from './buttons/TipButton';
import MoreButton from './buttons/MoreButton';

function Footer() {
  return (
    <footer className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-16 border-t border-gray-200 dark:border-t dark:border-gray-200 -mt-px">
                <GoldCanvasBlur />

              

                {/* Bottom area */}
                <div className="md:flex flex-row md:items-center md:justify-between">


                      {/* Middle links */}
                      <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
                        <MoreButton />
                      </div>

                      {/* <TipButton /> */}

                      <div className="md:flex md:items-center md:justify-between mt-5">
                        {/* Author meta */}
                        <div className="flex items-center justify-center">
                          <a href="/#/__/sponsors">
                            <img className="rounded-full mr-3" src={require('../images/spaceship.svg').default} width="32" height="32" alt="Divops Logo" />
                          </a>
                            <div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 italics">Coming Soon</p>
                              {/* <span className="text-gray-600 text-sm dark:text-gray-400">On </span> */}
                              <a className="font-medium text-purple-500 hover:underline-gray-500 focus:blur" href="https://github.com/divops.network text-md">Divops Network</a>
                            </div>
                          </div>
                      </div> 
                    
                    
                </div>

            </div>
        </div>
    </footer>
  );
}

export default Footer;

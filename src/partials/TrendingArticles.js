import React from 'react';
import { Link } from 'react-router-dom';

  function TrendingArticles() {
    return (
        <div className="mb-8">
                <h4 className="flex flex-grow justify-center h4 font-red-hat-display mb-5 text-gray-200">Trending ND </h4>
                <ul className="-my-3">
                  <li className="flex py-3 border-b border-gray-500 dark:border-gray-400">
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">01</div>
                    <span className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 dark:hover:text-teal-500 flex-shrink-0 mt-0">️‍🔥</span>
                    <article>
                      <Link className="hover:underline underline-green-500" to="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1 text-green-500">
                          The First Summer
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By <a className="font-medium text-gray-500 dark:text-gray-400 hover:underline" href="/#/__/Johnny-Joe">Johnny Joe </a> <span className="text-green-500">Nov, 2nd 2021</span>
                      </div>
                    </article>
                  </li>

                  {/* Trending 2 News 1*/}
                  <li className="flex py-3 border-b border-gray-500 dark:border-gray-400">
                    {/* <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">02</div> */}
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">News</div>
                    <span className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 dark:hover:text-teal-500 flex-shrink-0 mt-0">️</span>
                    <article>
                      <Link className="hover:underline" to="/blog-post">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                         Notre Dame hires new head coach; defensive coordinator, Marcus Freeman.
                        </h3>
                      </Link>
                      <div className="text-sm text-gray-500">
                        By <a className="font-medium text-gray-500 dark:text-gray-400 hover:underline" href="blog/#/__/nd-blog-bot">ND Blog Bot</a>
                        <br /> 
                        <span className="text-green-500">Nov, 2nd 2021</span>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
    )
}

export default TrendingArticles

import React from 'react';
import { Link } from 'react-router-dom';

function RelatedPosts() {
  return (
    <aside>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <h4 className="h4 font-red-hat-display mb-8">Sponsors</h4>

            {/* Articles container */}
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2" data-aos-id-relposts>

              {/* 1st article */}
              <article className="relative group p-6 text-white" data-aos="fade-down" data-aos-anchor="[data-aos-id-relposts]">
                <figure>
                  <img className="absolute inset-0 w-half h-full object-stretch opacity-70 group-hover:opacity-75 transition duration-700 ease-out" src={require('../images/divops-add.jpg').default} width="372" height="182" alt="Related post 01" />
                  <div className="absolute inset-0 bg-transparent opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
                </figure>
                <div className="relative flex flex-col h-full">
                  <header className="flex-grow">
                    {/* <Link className="hover:underline" href="https://divops.network">
                      <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                        Divops | Automate Web Administration | COMING SOON
                      </h3>
                    </Link> */}
                    {/* <div className="text-sm opacity-80">Dec 2nd, 2021</div> */}
                  </header>
                  <footer>
                    {/* Author meta */}
                    <div className="flex items-center text-sm mt-5">
                      <a href="https://divops.network">
                        <img className="rounded-full flex-shrink-0 mr-16" src={require('../images/spaceship.svg').default} width="32" height="32" alt="Author 04" />
                      </a>
                      <Link className="hover:underline" href="https://divops.network">
                        <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                          Divops | Automate Web Administration | COMING SOON
                        </h3>
                    </Link>
                    </div>
                  </footer>
                </div>
              </article>

              {/* 2nd article */}
              <article className="relative group p-6 text-white" data-aos="fade-down" data-aos-anchor="[data-aos-id-relposts]" data-aos-delay="200">
                <figure>
                  <img className="absolute inset-0 w-full h-full object-stretch opacity-70 group-hover:opacity-75 transition duration-700 ease-out" src={require('../images/add-2.jpg').default} width="372" height="182" alt="Related post 02" />
                  <div className="absolute inset-0 bg-transparent opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
                </figure>
                <div className="relative flex flex-col h-full">
                  <header className="flex-grow">
                    <Link className="hover:underline">
                      <h3 className="text-lg text-center font-red-hat-display font-bold tracking-tight mb-2">
                       *Your advertisement here*
                      </h3>
                    </Link>
                    {/* <div className="text-sm opacity-80">Dec 2nd, 2021</div> */}
                  </header>
                  <footer>
                    {/* Author meta */}
                    <div className="flex items-center text-sm mt-5">
                      <a href="#0">
                        <img className="rounded-full flex-shrink-0 mr-3" src={require('../images/news-author-03.jpg').default} width="32" height="32" alt="Author 03" />
                      </a>
                      <div>
                        <span className="opacity-75">By </span>
                        <a className="font-medium hover:underline" href="/post/1/#/your-company">*Your Company Name*</a>
                      </div>
                    </div>
                  </footer>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RelatedPosts;
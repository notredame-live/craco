import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 font-red-hat-display mb-4">Request More Johnny</h1>
                <br />
                <p className="text-xl text-gray-300 dark:text-gray-300">If you would like to hear more posts from Johnny, please submit the requested information from this form and we will do out best to make it happen. </p>
                <br />
                <p className="text-xl text-gray-100 dark:text-gray-100">Have a great day!</p>
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto bg-black bg-opacity-10 rounded">
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Name<span className="text-teal-500 dark:text-gold-200">*</span></label>
                    <input id="first-name" type="text" className="form-input w-full text-teal-500 dark:text-gold-100" placeholder="Enter a name to go by" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Email<span className="text-teal-500 dark:text-gold-200">*</span>
                      <span className="flex-row justify-content-between text-sm text-gray-500">{""} (Optional)</span>
                    </label>
                    <input id="last-name" type="text" className="form-input text-teal-500 dark:text-gold-100 w-full" placeholder="Enter your email" required />
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">Company <span className="text-gold-200">*</span></label>
                    <input id="company" type="text" className="form-input w-full" placeholder="Enter your company name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">Phone Number <span className="text-gold-200">*</span></label>
                    <input id="phone" type="tel" className="form-input w-full" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="country">Country <span className="text-gold-200">*</span></label>
                    <select id="country" className="form-select w-full" required>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <div className="flex justify-between items-center mb-1">
                      <label className="blocktext-gray-300 dark:text-gray-300 text-sm font-medium" htmlFor="message">Details<span className="text-teal-500 dark:text-gold-200">*</span></label>
                     
                    </div>
                    <textarea id="message" rows="4" className="form-textarea w-full text-teal-500 dark:text-gold-100" placeholder="Please include a brief description of the game, the date, and who they were playing."></textarea>
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <div className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-3">Tell us about your role</div>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">CO-founder</span>
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Developer</span>
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Design / Marketing</span>
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Other</span>
                    </label>
                  </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-gray-500 dark:text-gold-200 hover:text-green-500 bg-black bg-opacity-60 border-1 dark:bg-ndblue-100 dark:border-gold-200 dark:hover:border-gold-100 flex items-center border-2 border-teal-500 focus:blur cursor-pointer w-full">
                      <span>Submit</span>
                      <svg className="w-3 h-3 flex-shrink-0 mt-px ml-2 dark:text-white text-teal-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>

      </main>

      {/*  Site Footer */}
      <Footer />

    </div>
  );
}

export default Contact;
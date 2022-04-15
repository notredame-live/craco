import React from 'react';

import Header from '../../../partials/Header';
import PageIllustration from '../../../partials/PageIllustration';
import Footer from '../../../partials/Footer';
import TipPortal from '../../../partials/TipPortal';

function Tips() {
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
                <h1 className="h1 font-red-hat-display mb-4">Tips</h1>
                <br />
                <TipPortal />
                <br />
                <p className="text-xs text-gray-600 dark:text-gray-400">Your contributions fuel this blog and help make it possible! Please keep in mind the components on this page are active and the payments will be real! Your contributions fuel this blog and are what make it possible. If you enjoy reading it and would like to leave a tip, you can do so here. The blog has integrated Stripe, a well known and trusted payment platform to help provide a simple, and secure transaction process.</p>

              </div>

            </div>
          </div>
        </section>
        

      </main>

        {/* Footer */}
        <br/>
        <Footer />
    </div>
  );
}

export default Tips;
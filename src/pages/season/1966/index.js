import React from 'react';

import Header from '../../../partials/Header';
import RelatedPosts from '../../../partials/RelatedPosts';
import BlogSingleOne from '../../../partials/BlogSingleOne';
import Footer from '../../../partials/Footer';

function BlogPostThree() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <BlogSingleOne />
        <RelatedPosts />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default BlogPostThree;
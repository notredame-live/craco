import React from 'react';

import Header from '../../../partials/Header';
import RelatedPosts from '../../../partials/RelatedPosts';
import BlogSingleTwo from '../../../partials/BlogSingleTwo';
import Footer from '../../../partials/Footer';

function BlogPostTwo() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <BlogSingleTwo />
        <RelatedPosts />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default BlogPostTwo;
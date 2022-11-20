import React from 'react';

import BlogCard from './BlogCard';
import blogData from '../data/blog';

const Blog = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative">Articles & Guide</span>
        </h2>
        <p className="text-sm md:text-base text-gray-700 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum et accumsan
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        <>
          {blogData.map(({ article, image, pressRelease, slug }, index) => {
            return (
              <BlogCard
                key={index}
                article={article}
                src={image}
                pressRelease={pressRelease}
                slug={slug}
              />
            );
          })}
        </>
      </div>
    </section>
  );
};

export default Blog;

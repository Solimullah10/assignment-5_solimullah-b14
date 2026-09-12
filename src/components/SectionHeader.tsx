import React from 'react';

const SectionHeader = () => {
  return (
    <div className="container mx-auto mb-6 px-4 sm:px-6 lg:px-8 py-5">
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>
      <p className="text-slate-500 text-base mt-2 font-normal">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
  );
};

export default SectionHeader;
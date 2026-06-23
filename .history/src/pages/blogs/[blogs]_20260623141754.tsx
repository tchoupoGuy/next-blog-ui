import React from 'react';
import PageTitle from '@next/components/page-title';
import SEO from '@next/components/seo';

const Blogs: React.FC = () => {
  return (
    <section>
      <SEO
        title="Blogs"
        description="Technical articles and blog posts by Guy Tchoupo — Frontend Developer."
      />
      <PageTitle title="Blogs" />
    </section>
  );
};

export default Blogs;

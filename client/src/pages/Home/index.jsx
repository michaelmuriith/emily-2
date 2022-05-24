import React, { useState } from 'react';
import EmptyList from '../../components/EmptyList';
import BlogList from '../../components/BlogList';

const Home = () => {
  return (
    <div>
      {/* Blog List & Empty View */}
      <BlogList />
    </div>
  );
};

export default Home;

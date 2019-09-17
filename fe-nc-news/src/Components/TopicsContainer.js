import React from 'react';
import { Link } from '@reach/router';

const TopicsContainer = ({ slug, description }) => {
  return (
    <div className="article-container">
      <Link className="article-link" to={`/topics/${slug}`}>
        <h2>{slug}</h2>
      </Link>
      <h4>{description}</h4>
    </div>
  );
};

export default TopicsContainer;

import React from 'react';
import SingleArticle from './SingleArticle';

const SingleArticlePage = props => {
  return (
    <div>
      <SingleArticle id={props.article_id} username={props.username} />
    </div>
  );
};

export default SingleArticlePage;

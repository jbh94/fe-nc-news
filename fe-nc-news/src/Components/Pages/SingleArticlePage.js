import React from 'react';
import SingleArticle from '../SingleArticle';

const SingleArticlePage = props => {
  console.log(props.article_id);
  return (
    <div>
      <SingleArticle id={props.article_id} />
    </div>
  );
};

export default SingleArticlePage;

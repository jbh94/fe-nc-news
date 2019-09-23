import React from 'react';
import { Link } from '@reach/router';

const ArticleContainer = props => {
  const {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes
  } = props;

  return (
    <div className="article-container">
      <div>
        <Link className="article-link" to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <Link className="article-link" to={`/topics/${topic}`}>
          <h3>{topic}</h3>
        </Link>
        <p>posted at: {new Date(created_at).toLocaleString()}</p>
        <Link className="article-link" to={`/users/${author}`}>
          <p>{author}</p>
        </Link>
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </div>
    </div>
  );
};

export default ArticleContainer;

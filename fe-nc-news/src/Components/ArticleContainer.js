import React from 'react';
import { Link } from '@reach/router';

class ArticleContainer extends React.Component {
  state = {};

  render() {
    const {
      article_id,
      author,
      comment_count,
      created_at,
      title,
      topic,
      votes
    } = this.props;

    return (
      <div className="article-container">
        <div>
          <Link className="article-link" to={`/articles/${article_id}`}>
            <h2>{title}</h2>
          </Link>
          <Link className="article-link" to={`/topics/${topic}`}>
            <h3>{topic}</h3>
          </Link>
          <p>posted at: {created_at}</p>
          <Link className="article-link" to={`/users/${author}`}>
            <p>{author}</p>
          </Link>
          <p>comments: {comment_count}</p>
          <p>votes: {votes}</p>
        </div>
      </div>
    );
  }
}

export default ArticleContainer;

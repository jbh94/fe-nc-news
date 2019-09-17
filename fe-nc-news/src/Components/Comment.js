import React from 'react';
import { Link } from '@reach/router';
import ErrorHandler from './ErrorHandler';

class Comment extends React.Component {
  state = { comment: this.props.comment, err: null };
  render() {
    const { author, created_at, body, votes, err } = this.state.comment;

    if (err) {
      return <ErrorHandler {...err} />;
    }
    return (
      <div className="comment-box">
        {
          <Link className="comment-link" to={`/users/${author}`}>
            <h3>{author}</h3>
          </Link>
        }
        <h2>{created_at}</h2>
        <p>{body}</p>
        <p>Votes: {votes}</p>
      </div>
    );
  }
}

export default Comment;

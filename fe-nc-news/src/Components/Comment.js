import React from 'react';
import { Link } from '@reach/router';
import ErrorHandler from './ErrorHandler';
import VoteUpdater from './VoteUpdaterComment';

class Comment extends React.Component {
  state = { err: null };
  render() {
    const {
      author,
      created_at,
      body,
      err,
      votes,
      comment_id
    } = this.props.comment;

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
        <VoteUpdater votes={votes} comment_id={comment_id} />
      </div>
    );
  }
}

export default Comment;

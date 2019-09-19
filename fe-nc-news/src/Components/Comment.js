import React from 'react';
import { Link } from '@reach/router';
import ErrorHandler from './ErrorHandler';
import VoteUpdater from './VoteUpdaterComment';

class Comment extends React.Component {
  state = { err: null, comments: {} };
  render() {
    const {
      author,
      created_at,
      body,
      err,
      votes,
      comment_id
    } = this.props.comment;
    const { isLoading, comments, article, error } = this.state;
    console.log(this.props.comment, 'propsss');

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
        <h2>{new Date(created_at).toLocaleString()}</h2>
        <p>{body}</p>
        <VoteUpdater votes={votes} comment_id={comment_id} />
      </div>
    );
  }
}

export default Comment;

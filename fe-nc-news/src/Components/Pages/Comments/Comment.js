import React from "react";
import { Link } from "@reach/router";
import ErrorHandler from "../Utils/ErrorHandler";
import VoteUpdater from "../Utils/VoteUpdaterComment";
import * as api from "../../../api";

class Comment extends React.Component {
  state = { err: null, hide: false };
  render() {
    const {
      author,
      created_at,
      body,
      err,
      votes,
      comment_id
    } = this.props.comment;

    const { username } = this.props;

    if (this.state.hide === true) {
      return null;
    }

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
        <div>
          {username === author && (
            <button
              className="delete-button"
              onClick={e =>
                window.confirm(
                  "Are you sure you want to delete this comment?"
                ) && this.removeComment(e)
              }
            >
              Delete Comment
            </button>
          )}
        </div>
      </div>
    );
  }

  removeComment = () => {
    const { comment_id } = this.props.comment;
    api.deleteComment(comment_id);
    this.setState({ hide: true });
  };
}

export default Comment;

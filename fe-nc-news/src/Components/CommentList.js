import React from 'react';
import Comment from './Comment';
import * as api from '../api';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';
import AddComment from './AddComment';

class CommentList extends React.Component {
  state = { comments: {}, isLoading: true };

  render() {
    const { comments, isLoading, err } = this.state;

    if (isLoading) return <Loading />;
    if (err) return <ErrorHandler {...err} />;

    return (
      <div>
        <AddComment
          username={this.props.username}
          article_id={this.props.id}
          addComment={this.addComment}
        />
        <div>
          {comments.map(comment => {
            return (
              <Comment
                comment={comment}
                key={comment.comment_id}
                body={comment.body}
              />
            );
          })}
        </div>
      </div>
    );
  }

  addComment = comment => {
    const { id, username } = this.props;

    api
      .postComment(id, { body: comment, username })
      .then(newComment => {
        this.setState((prevState, prevProps) => {
          const arr = [newComment, ...prevState.comments];
          return {
            comments: arr
          };
        });
      })
      .catch(({ response }) => {
        const { status } = response;
        const { msg } = response.data;
        this.setState({ isLoading: false, err: { status, msg } });
      });
  };

  componentDidMount = () => {
    api.getComments(this.props.id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  };
}

export default CommentList;

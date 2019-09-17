import React from 'react';
import Comment from './Comment';
import * as api from '../api';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';

class CommentList extends React.Component {
  state = { comments: {}, isLoading: true };

  render() {
    const {
      comments: { comments },
      isLoading,
      err
    } = this.state;
    console.log(comments, 'this.state');

    if (isLoading) return <Loading />;
    if (err) return <ErrorHandler {...err} />;

    return (
      <div>
        {comments.map(comment => {
          return <Comment comment={comment} key={comment.comment_id} />;
        })}
      </div>
    );
  }

  componentDidMount = () => {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
}

export default CommentList;

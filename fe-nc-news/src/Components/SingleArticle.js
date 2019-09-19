import React from 'react';
import * as api from '../api';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import VoteUpdaterArticle from './VoteUpdaterArticle';
import AddComment from './AddComment';

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
    sort_by: 'created_at',
    order: 'desc'
  };

  render() {
    const { isLoading, article, err } = this.state;
    console.log(this.state, 'this.state in singlearticle');

    const {
      author,
      title,
      created_at,
      comment_count,
      topic,
      votes,
      body
    } = article;

    if (isLoading) return <Loading />;
    if (err) return <ErrorHandler {...err} />;

    const { id, username } = this.props;
    console.log(this.props, 'thisprops singlearticle');
    console.log(this.props.article, 'this.props.comments');

    return (
      <div className="article-container">
        <h1>{title}</h1>
        <Link className="article-link" to={`/users/${author}`}>
          <h2>{author}</h2>
        </Link>
        <Link className="article-link" to={`/topics/${topic}`}>
          <p>{topic}</p>
        </Link>
        <p>{new Date(created_at).toLocaleString()}</p>
        <p>{body}</p>
        <VoteUpdaterArticle votes={votes} article_id={article.article_id} />

        <AddComment
          username={this.props.username}
          article_id={this.props.id}
          addTheComment={this.addComment}
        />

        <p>Comments: {comment_count}</p>
        <CommentList article_id={article.article_id} />
      </div>
    );
  }

  componentDidMount() {
    this.getArticleById();
  }

  addComment = comment => {
    const { id, username } = this.props;
    api.postComment(id, comment, { username }).then(newComment => {
      this.setState(({ comments }) => {
        return { comments: { newComment, ...comments } };
      });
    });
  };

  getArticleById = () => {
    api
      .getArticle(this.props.id)
      .then(({ article }) => {
        // this.props.id relates to parametric endpoint in App.js
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        const { status } = response;
        const { msg } = response.data;
        this.setState({ isLoading: false, err: { status, msg } });
      });
  };
}

export default SingleArticle;

import React from 'react';
import * as api from '../api';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';
import { Link } from '@reach/router';

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  render() {
    const { isLoading, article, err } = this.state;

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

    return (
      <div className="article-container">
        <h1>{title}</h1>
        <Link className="article-link" to={`/users/${author}`}>
          <h2>{author}</h2>
        </Link>
        <Link className="article-link" to={`/topics/${topic}`}>
          <p>{topic}</p>
        </Link>
        <p>{created_at}</p>
        <p>{body}</p>
        <p>Comments: {comment_count}</p>
        <p>Number of votes: {votes}</p>
      </div>
    );
  }

  componentDidMount() {
    this.getArticleById();
  }

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

import React from "react";
import * as api from "../../../api";
import Loading from "../Utils/Loading";
import ErrorHandler from "../Utils/ErrorHandler";
import { Link } from "@reach/router";
import CommentList from "../Comments/CommentList";
import VoteUpdaterArticle from "../Utils/VoteUpdaterArticle";

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
    sort_by: "created_at",
    order: "desc"
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

    const { username } = this.props;

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

        <p>Comments: {comment_count}</p>
        <CommentList id={article.article_id} username={username} />
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

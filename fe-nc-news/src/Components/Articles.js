import React from 'react';
import * as api from '../api';
import ArticleContainer from './ArticleContainer';
import Loading from '../Components/Loading';

class Articles extends React.Component {
  state = {
    articles: null,
    isLoading: true
  };

  render() {
    const { isLoading, articles } = this.state;

    if (isLoading === true) return <Loading />;
    return (
      <div>
        {articles.map(article => {
          return <ArticleContainer key={article.article_id} {...article} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;

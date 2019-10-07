import React from 'react';
import * as api from '../../../api';
import ArticleContainer from './ArticleContainer';
import Loading from '../Utils/Loading';
import Sort from '../Utils/Sort';

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    order: 'desc',
    sort_by: 'created_at'
  };

  render() {
    const { isLoading, articles } = this.state;

    if (isLoading === true) return <Loading />;
    return (
      <div>
        <Sort fetchAllArticles={this.fetchAllArticles} />
        {articles.map(article => {
          return <ArticleContainer key={article.article_id} {...article} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    const { uri, slug } = this.props;
    if (uri === `/topics/${slug}`) {
      this.fetchAllTopics();
    } else this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchAllArticles = (sort_by, order) => {
    api.getArticlesWithParams(null, sort_by, order).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  fetchArticles = () => {
    api.getArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  fetchAllTopics = () => {
    const { slug } = this.props;
    api.getTopicsFromArticles(slug).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;

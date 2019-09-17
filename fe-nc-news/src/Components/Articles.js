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
    const { uri, slug } = this.props;
    if (uri === `/topics/${slug}`) {
      this.fetchAllTopics();
    } else this.fetchArticles();
  }

  fetchData = () => {};

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

  componentDidUpdate(prevProps) {
    console.log(this.props.uri);
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
}

export default Articles;

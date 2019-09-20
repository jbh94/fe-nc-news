import React from 'react';
import * as api from '../api';
import TopicsContainer from './TopicsContainer';
import Loading from './Loading';

class Topics extends React.Component {
  state = {
    topics: null,
    isLoading: true,
    topic: '',
    articles: null
  };

  render() {
    const { isLoading, topics } = this.state;

    if (isLoading === true) return <Loading />;

    return (
      <div>
        {topics.map(topic => {
          return <TopicsContainer key={topic.slug} {...topic} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then(({ topics }) => {
        this.setState({ topics, isLoading: false });
      })
      .catch(({ response }) => {
        const { status } = response;
        const { msg } = response.data;
        this.setState({ isLoading: false, err: { status, msg } });
      });
  };
}

export default Topics;

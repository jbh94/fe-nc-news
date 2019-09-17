import React from 'react';
import * as api from '../api';
import TopicsContainer from './TopicsContainer';
import Loading from './Loading';

class Topics extends React.Component {
  state = {
    topics: null,
    isLoading: true
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
    api.getTopics().then(({ topics }) => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;

import React from 'react';
import SingleTopics from './SingleTopics';

const SingleTopicsPage = props => {
  return (
    <div>
      <SingleTopics id={props.slug} />
    </div>
  );
};

export default SingleTopicsPage;

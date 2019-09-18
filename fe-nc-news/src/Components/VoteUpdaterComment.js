import React from 'react';
import * as api from '../api';
import { Icon } from '@iconify/react';
import arrowUp from '@iconify/icons-foundation/arrow-up';
import arrowDown from '@iconify/icons-foundation/arrow-down';

class VoteUpdater extends React.Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;

    return (
      <div>
        <Icon
          icon={arrowUp}
          color="#ffffff"
          className="vote-arrow"
          onClick={() => this.updateVotes(1)}
          value="1"
          disabled={voteChange >= 1}
        />
        <p>Votes: {votes + voteChange}</p>
        <Icon
          icon={arrowDown}
          className="vote-arrow"
          color="#ffffff"
          onClick={() => this.updateVotes(-1)}
          value="1"
          disabled={voteChange >= -1}
        />
      </div>
    );
  }

  updateVotes = inc_votes => {
    const { comment_id } = this.props;
    api.patchCommentVotes(comment_id, inc_votes).then(() => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + inc_votes };
      });
    });
  };
}

export default VoteUpdater;

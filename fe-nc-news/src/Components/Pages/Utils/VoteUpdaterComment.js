import React from 'react';
import * as api from '../../../api';
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
        <button
          className="vote-button"
          onClick={() => this.updateVotes(1)}
          disabled={voteChange >= 1}
          value="1"
        >
          <Icon icon={arrowUp} color="#ffffff" className="vote-arrow" />
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button
          className="vote-button"
          onClick={() => this.updateVotes(-1)}
          disabled={voteChange === -1}
          value="1"
        >
          <Icon icon={arrowDown} color="#ffffff" className="vote-arrow" />
        </button>
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

import React from 'react';

class Sort extends React.Component {
  state = {
    sort_by: 'created_at',
    order: 'desc'
  };

  render() {
    return (
      <div className="sort-style">
        <form onSubmit={this.onSubmit}>
          <select
            className="form-style"
            name="sort_by"
            onChange={this.onChange}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select className="form-style" name="order" onChange={this.onChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button className="form-submit">Submit</button>
        </form>
      </div>
    );
  }

  onSubmit = event => {
    const { fetchAllArticles } = this.props;
    const { sort_by, order } = this.state;
    fetchAllArticles(sort_by, order);
    event.preventDefault();
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
}

export default Sort;

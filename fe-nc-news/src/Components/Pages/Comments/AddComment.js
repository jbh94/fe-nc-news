import React from 'react';

class AddComment extends React.Component {
  state = {
    body: ''
  };

  render() {
    const { body } = this.state;

    return (
      <div>
        <form className="form-addcomment" onSubmit={this.onSubmit}>
          <textarea
            type="text"
            name="body"
            id="body"
            className="form-textbox"
            placeholder="Enter your comment here.."
            required
            value={body}
            onChange={e => this.onChange(e.target.value, 'body')}
          />
          <br></br>
          <button className="form-submit">Submit</button>
        </form>
      </div>
    );
  }

  // real time on change of body
  onChange = (text, value) => {
    this.setState({
      [value]: text
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    this.props.addComment(body);
  };
}

export default AddComment;

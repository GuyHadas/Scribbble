var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;
var ClientActions = require('../actions/clientActions.js');

var CommentForm = React.createClass({

  getInitialState: function() {
    return {body: ""};
  },

  componentDidMount: function() {
    var self = this;

    ReactDOM.findDOMNode(self.refs.autoFocus).focus();

  },

  bodyChange: function(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  },

  submitHandler: function(e) {
    e.preventDefault();
    ClientActions.createComment({
      body: this.state.body,
      xPos: this.props.xPos,
      yPos: this.props.yPos,
      designId: this.props.designId
    });
  },

  render: function() {
    return (
      <div className="comment-form-box">
        <div className="comment-form">
          <form className="comment-form" onSubmit={this.submitHandler}>
            <textarea
              className="comment-form-textarea"
              ref="autoFocus"
              value={this.state.body}
              onChange={this.bodyChange}
              placeholder="What's on your mind?"
              ></textarea>
            <div className="comment-form-action-btns">
              <div className="comment-form-cancel-btn" onClick={this.props.closeCommentForm}>Cancel</div>
              <input type="submit" className="comment-form-submit-btn" value="Comment"/>
            </div>
          </form>
        </div>

      </div>
    );
  }
});

module.exports = CommentForm;

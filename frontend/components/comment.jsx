var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var Comment = React.createClass({

  handleMouseEnter: function() {
    this.props.showComment([this.props.comment.x_pos, this.props.comment.y_pos]);
    this.disableMouseOver = false;
  },

  handleClick: function() {
    this.props.showComment([this.props.comment.x_pos, this.props.comment.y_pos]);
    this.disableMouseOver = true;
  },

  handleMouseLeave: function() {
    if (!this.disableMouseOver) {
      this.props.unshowComment();
    }
  },

  render: function() {
    return (
      <li
        className="comment"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}>
        {this.props.comment.body}
      </li>

    );
  }
});

module.exports = Comment;

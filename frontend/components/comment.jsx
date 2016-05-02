var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var Comment = React.createClass({

  handleMouseEnter: function() {
    // console.log(this.props.showComment);
    this.props.showComment([this.props.comment.x_pos, this.props.comment.y_pos]);
  },

  handleMouseLeave: function() {
    this.props.unshowComment();
  },

  render: function() {
    return (
      <li className="comment" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.props.comment.body}
      </li>

    );
  }
});

module.exports = Comment;

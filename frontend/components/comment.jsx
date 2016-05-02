var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var Comment = React.createClass({

  handleMouseEnter: function() {
    this.props.showComment([this.props.comment.x_pos, this.props.comment.y_pos]);
  },

  render: function() {
    return (
      <li className="comment" >
        {this.props.comment.body}
      </li>

    );
  }
});

module.exports = Comment;

// onMouseEnter={this.handleMouseEnter}

var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var ClientActions = require("../actions/clientActions.js");

var Logout = React.createClass({

  logoutUser: function() {
    ClientActions.logoutUser();
  },

  render: function() {
    return (
      <span className="nav-session-button" onClick={this.logoutUser}>Logout</span>
    );
  }
});

module.exports = Logout;

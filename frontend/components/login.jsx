var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var ClientActions = require("../actions/clientActions.js");

var Login = React.createClass({

  getInitialState: function() {
    return {username: "", password: ""};
  },

  submitHandler: function(e) {
    e.preventDefault();
    ClientActions.clearErrors();
    ClientActions.loginUser(this.state);
  },

  componentDidMount: function() {
    ClientActions.clearErrors();
    var self = this;
    setTimeout(function() {
      ReactDOM.findDOMNode(self.refs.autoFocus).focus(); },
      500);
  },


  usernameChange: function(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  passwordChange: function(e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  },

  render: function() {
    return (
      <form className="modal-form" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="form-textbox"
          ref="autoFocus"
          value={this.state.username}
          onChange={this.usernameChange}
          placeholder="Username"
          />

        <input type="password"
          className="form-textbox"
          value={this.state.password}
          onChange={this.passwordChange}
          placeholder="Password"/>

        <input type="submit" className="modal-submit-btn" value="Login"/>
      </form>
    );
  }
});

module.exports = Login;

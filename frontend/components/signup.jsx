var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var ClientActions = require("../actions/clientActions.js");

var SignUp = React.createClass({

  getInitialState: function() {
    return {username: "", password: ""};
  },

  submitHandler: function(e) {
    e.preventDefault();
    ClientActions.clearErrors();
    ClientActions.createUser(this.state);
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
      <form onSubmit={this.submitHandler} >
        <input type="text" value={this.state.username} onChange={this.usernameChange}/>
        <input type="password" value={this.state.password} onChange={this.passwordChange}/>
        <input type="submit" value="Sign Up"/>
      </form>
    );
  }
});

module.exports = SignUp;

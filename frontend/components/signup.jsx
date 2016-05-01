var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var ClientActions = require("../actions/clientActions.js");

var SignUp = React.createClass({

  getInitialState: function() {
    return {username: "", password: ""};
  },

  componentDidMount: function() {
    var self = this;
    setTimeout(function() {
      ReactDOM.findDOMNode(self.refs.autoFocus).focus(); },
      500);
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
      <form className="modal-form" onSubmit={this.submitHandler} >
        <input type="text"
          ref="autoFocus"
          className="form-textbox"
          value={this.state.username}
          onChange={this.usernameChange}
          placeholder="Username"/>

        <input type="password"
          className="form-textbox"
          value={this.state.password}
          onChange={this.passwordChange}
          placeholder="Password"/>
        <input type="submit" className="modal-submit-btn" value="Sign Up"/>
      </form>
    );
  }
});

module.exports = SignUp;

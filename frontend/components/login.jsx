var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;

var ClientActions = require("../actions/clientActions.js");

var Login = React.createClass({

  DEMO_USERNAME: "demo",

  DEMO_PASSWORD: "asdfasdf",

  getInitialState: function() {
    return { username: "", password: "", formType: this.props.formType};
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

  demoLoginHandler: function(e) {
    e.preventDefault();
    this.setState({ username: "", password: "" });
    var _username = this.DEMO_USERNAME.split("").slice();
    this.fillDemoUsername(_username);
  },

  fillDemoUsername: function(_username) {
    var self = this;
    if (_username.length > 0) {
      setTimeout(function() {
        self.setState({
          username: self.state.username + _username.shift()
        });

        self.fillDemoUsername(_username);
      }, 120);
    } else {
      var _password = this.DEMO_PASSWORD.split("").slice();
      this.fillDemoPassword(_password);
    }
  },

  fillDemoPassword: function(_password) {
    var self = this;
    if (_password.length > 0) {
      setTimeout(function() {
        self.setState({
          password: self.state.password + _password.shift()
        });

        self.fillDemoPassword(_password);
      }, 120);
    } else {
      var e = { preventDefault: function() {} };
      this.submitHandler(e);
    }
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
        <div
          id="demo-login-btn"
          className="modal-submit-btn"
          onClick={this.demoLoginHandler}>
            Demo Login
        </div>
      </form>
    );
  }
});

module.exports = Login;
